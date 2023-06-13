import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import { useRouter } from "next/router";
import React from "react";
// https://something.api/property/abc-land -> PropertySlugPage
const PropertySlugPage = () => {
  const router = useRouter();
  console.log("PropertySlugPage ~ router:", router);
  return (
    <LayoutMain>
      <HeadContent
        title="Property Slug Page"
        image="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
      ></HeadContent>
    </LayoutMain>
  );
};

export default PropertySlugPage;
