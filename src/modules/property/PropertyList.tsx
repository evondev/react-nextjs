import PropertyItem, { PropertyItemLoading } from "./PropertyItem";
import React, { useState } from "react";
import { debounce } from "lodash";
import { Dropdown } from "@/components/dropdown";
import { getProperties } from "@/store/property.service";
import { IconSearch, IconTune } from "@/components/icons";
import { PropertyItemData } from "@/types/property.types";
import { statusData } from "@/constants/general.const";
import { TFilter, TPropertyStatus } from "@/types/general.types";
import { useQuery } from "@tanstack/react-query";

const PropertyList = () => {
  const [selected, setSelected] = useState({
    statusText: "Any Status",
    typeText: "Any Type",
    countryText: "All Countries",
    stateText: "All States",
  });
  const [filter, setFilter] = useState<TFilter>({
    text: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", filter.text, filter.status],
    queryFn: () =>
      getProperties({
        text: filter.text,
        status: filter.status,
      }),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  const properties = data;
  const handleFilterProperty = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({
        ...filter,
        text: e.target.value,
      });
    },
    500
  );
  const handleFilterByStatus = (value: TPropertyStatus) => {
    setFilter({
      ...filter,
      status: value,
    });
    const foundStatus = statusData.find((item) => item.value === value);
    setSelected({
      ...selected,
      statusText: value ? foundStatus?.label || "" : "Any Status",
    });
  };
  if (error) return null;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div aria-label="filter" className="flex gap-5 mb-6">
        <div className="rounded-lg p-2.5 gap-2.5 bg-grayf7 flex items-center basis-[229px]">
          <IconSearch></IconSearch>
          <input
            type="text"
            className="w-full text-xs font-medium bg-transparent outline-none"
            placeholder="Enter an address, city or Zip code"
            onChange={handleFilterProperty}
          />
        </div>
        <Dropdown
          selected={selected.statusText}
          onClick={handleFilterByStatus}
          data={statusData}
        ></Dropdown>
        <Dropdown selected="Any Type"></Dropdown>
        <Dropdown selected="All Countries"></Dropdown>
        <Dropdown selected="All States"></Dropdown>
        <button className="flex items-center gap-2.5 rounded-lg bg-grayf7 p-2 text-xs font-medium text-gray80">
          <IconTune></IconTune>
          <span>More</span>
        </button>
      </div>
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
        {isLoading &&
          Array(2)
            .fill(0)
            .map((item, index) => (
              <PropertyItemLoading key={index}></PropertyItemLoading>
            ))}
        {!isLoading &&
          properties &&
          properties.length > 0 &&
          properties.map((item: PropertyItemData) => (
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
  );
};

export default PropertyList;
