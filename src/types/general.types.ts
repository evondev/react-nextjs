export type TSidebarLink = {
  title: string;
  icon: JSX.Element;
  path: string;
};
export type TDropdownData = {
  value: string;
  label: string;
};
export type TPropertyStatus = "sale" | "rent" | "";
export type TFilter = {
  text?: string;
  status: TPropertyStatus;
  country?: string;
  type?: string;
  state?: string;
};
