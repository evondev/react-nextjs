import Image from "next/image";
import React from "react";
import sea from "@public/sea-bay.jpeg";

const ImageComponent = () => {
  return (
    <>
      {/* <img src="/sea-bay.jpeg" alt="sea-bay" /> */}
      <div className="flex items-center gap-10">
        <div className="relative flex-1 h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
            fill
            alt="sea"
            className="object-cover"
            placeholder="blur"
            blurDataURL=""
          ></Image>
        </div>
        <div className="relative flex-1 h-[600px]">
          <Image
            src="/sea-bay.jpeg"
            alt="sea"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          ></Image>
        </div>
      </div>
      {/* <Image src={Sea} alt="sea"
    sizes=""
    ></Image> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque
        maiores, illum sit minus molestias veritatis, earum accusamus quam qui
        dolore eveniet culpa? Voluptate exercitationem architecto omnis
        molestias sint repudiandae.
      </p>
      <div className="h-screen"></div>
      <div className="grid grid-cols-6 gap-5">
        <div className="relative aspect-square">
          <Image src={sea} alt="" loading="lazy"></Image>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
