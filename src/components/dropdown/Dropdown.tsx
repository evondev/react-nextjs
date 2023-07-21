import React from "react";
import { Menu } from "@headlessui/react";
import { TDropdownData, TPropertyStatusData } from "@/types/general.types";
import { IconCaretDown } from "../icons";
interface DropdownProps {
  selected?: string;
  data?: TDropdownData[];
  onClick?: (value: any) => void;
}
const Dropdown = ({
  selected = "Any Status",
  data = [],
  onClick,
}: DropdownProps) => {
  return (
    <Menu as="div" className="relative basis-[160px]">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-between p-2.5 rounded-lg bg-grayf7 gap-2.5 w-full text-xs font-medium">
            <span>{selected}</span>
            <span
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <IconCaretDown></IconCaretDown>
            </span>
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute left-0 right-0 z-10 rounded-lg top-full bg-grayfc shadow-dropdown"
          >
            {data.length > 0 &&
              data.map((item) => (
                <Menu.Item
                  key={item.value}
                  as="div"
                  className="py-2 px-2.5 text-sm font-normal rounded-lg cursor-pointer text-gray80 hover:text-grayfc hover:bg-primary"
                  onClick={() => onClick?.(item.value as any)}
                >
                  {item.label}
                </Menu.Item>
              ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
