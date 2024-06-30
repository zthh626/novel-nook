"use client";

import { toggleFavorite } from "@/lib/favorites/actions";
import { ImageLoader } from "./imageLoader";
import { useState } from "react";
import { Favourite } from "@prisma/client";

export function FavoriteIcon({
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
