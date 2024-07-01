"use client";

import { toggleFavorite } from "@/lib/favorites/actions";
import { Favourite } from "@prisma/client";
import { useEffect, useState } from "react";
import { ImageLoader } from "./base/ImageLoader";

export function FavoriteToggleButton({
  bookId,
  favorite,
  updatePaths,
}: {
  bookId: number;
  favorite?: Favourite[];
  updatePaths?: string[];
}) {
  const [isFilled, setIsFilled] = useState(
    favorite?.length && favorite?.length > 0 ? true : false,
  );

  useEffect(() => {
    setIsFilled(favorite?.length && favorite?.length > 0 ? true : false);
  }, [favorite, setIsFilled]);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();

        toggleFavorite(bookId, updatePaths).then((val) => {
          setIsFilled(val);
        });
      }}
      className="flex z-50 items-center hover:cursor-pointer"
    >
      <ImageLoader
        alt="Favorite Icon"
        src={isFilled ? "/icons/star-filled.svg" : "/icons/star-outline.svg"}
        classes="h-8 w-8"
      />
    </div>
  );
}
