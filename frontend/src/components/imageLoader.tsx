"use client";

import { useState } from "react";
import Image from "next/image";

export function ImageLoader({
  src,
  alt,
  classes,
}: {
  src: string;
  alt: string;
  classes: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${classes}`}>
      <div
        className={`absolute inset-0 bg-gray-300 animate-pulse ${!loading && "hidden"}`}
      ></div>
      <Image
        fill={true}
        objectFit="cover"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
