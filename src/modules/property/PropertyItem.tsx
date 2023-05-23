import { IconBeds, IconCross, IconLocation } from "@/components/icons";
import Image from "next/image";
import React from "react";
interface PropertyItemProps {
  children?: React.ReactNode;
}
const PropertyItem = ({ children }: PropertyItemProps) => {
  return (
    <div className="flex gap-2">
      <Image
        src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
        alt="setup"
        width={200}
        height={150}
        className="object-cover rounded-xl"
      ></Image>
      <div className="flex-1">
        <span className="inline-block text-xs font-semibold text-primary py-2 px-[10px] rounded-[5px] bg-secondary mb-2">
          $7400
        </span>
        <h3 className="mb-1 text-base font-semibold text-primaryText">
          Metro Jayakarta Hotel & Spa
        </h3>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <span>North Carolina, USA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <span className="text-xs font-medium">4 Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <span className="text-xs font-medium">28M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
