import React from "react";
import Image from "next/image";
export default function Page({ params }: { params: { itemname: string } }) {
  const pizzaImage = "https://i.ibb.co.com/C1SQxCY/pizza-image.png";
  return (
    <div>
      <Image
        className="drop-shadow-1"
        src={pizzaImage}
        height={100}
        width={100}
        alt={"pizzaaaaaaaaaa"}
      />{" "}
    </div>
  );
}
