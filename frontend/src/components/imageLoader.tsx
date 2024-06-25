"use client";

import { useState } from "react";
import Image from "next/image";

export function ImageLoader({
  src,
  alt,
  classes,
}: {
  src?: string | null;
  alt: string;
  classes: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${classes}`}>
      <div
        className={`absolute inset-0 bg-gray-200 animate-pulse ${!loading && src && "hidden"}`}
      ></div>
      {src && (
        <Image
          fill={true}
          objectFit="contain"
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
}
