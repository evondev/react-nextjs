import { LayoutMain } from "@/components/layout";
import { API_URL } from "@/config";
import PropertyItem from "@/modules/property/PropertyItem";
import { getProperties } from "@/store/property.service";
import { PropertyItemData } from "@/types/property.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const PropertyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    refetchOnWindowFocus: false,
    cacheTime: 24 * 10 * 60 * 60 * 1000, // 1 day
    staleTime: 24 * 5 * 60 * 60 * 1000, // 1/2 day
  });
  const properties = data;
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <button className="flex items-center justify-center px-5 py-3 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal">
          + Add Property
        </button>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <div aria-label="filter"></div>
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {properties &&
            properties.length > 0 &&
            properties.map((item: PropertyItemData, index: number) => (
              <PropertyItem item={item} key={item.id}></PropertyItem>
            ))}
        </div>
        <div
          aria-label="pagination"
          className="flex items-center justify-between"
        >
          <p className="text-gray80">Showing 1 to 10 Propertys</p>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
              1
            </button>
            <button className="flex items-center justify-center rounded-lg w-9 text-gray80 h-9">
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
