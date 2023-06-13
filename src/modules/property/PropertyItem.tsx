import { IconBeds, IconCross, IconLocation } from "@/components/icons";
import { PropertyItemData } from "@/types/property.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropertyItemProps {
  item: PropertyItemData;
}
const PropertyItem = ({ item }: PropertyItemProps) => {
  if (!item) return null;
  return (
    <Link
      href={{
        pathname: "/property/[id]",
        query: { id: item.id },
      }}
      className="flex gap-2"
    >
      <Image
        src={item.image && item.image.length > 0 ? item.image[0] : ""}
        alt="setup"
        width={200}
        height={150}
        className="object-cover rounded-xl"
        priority
      ></Image>
      <div className="flex-1">
        <span className="inline-block text-xs font-semibold text-primary py-2 px-[10px] rounded-[5px] bg-secondary mb-2">
          ${item.price}
        </span>
        <h3 className="mb-1 text-base font-semibold text-primaryText">
          {item.title}
        </h3>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <span>{item.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <span className="text-xs font-medium">{item.info?.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <span className="text-xs font-medium">{item.info?.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyItem;
