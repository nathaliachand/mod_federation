import React from "react";
// import { Carousel } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";

export default function Banner() {
  return (
    <div className="h-96">
      <Carousel slideInterval={5000} className="h-full w-full">
        <img
          className=""
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/23/ff4f4f1d-3d28-49d4-9cbe-099aadb47013.jpg.webp?ect=4g"
          alt="..."
        />
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/23/9f567f39-41db-49bc-97ca-960b91c85d58.jpg?ect=4g"
          alt="..."
          className=""
        />
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/31/85d1511e-3401-4db8-8e3f-b5b90b6f61a7.jpg.webp?ect=4g"
          alt="..."
          className=""
        />
      </Carousel>
    </div>
  );
}
