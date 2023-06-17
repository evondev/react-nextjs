/* eslint-disable @next/next/no-img-element */
import HeadContent from "@/components/HeadContent";
import { Spinner } from "@/components/loading";
import { getProperty } from "@/store/property.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const PropertyDetails = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => getProperty(id),
    staleTime: 1000 * 60 * 1,
    enabled: !!id,
  });
  if (!data || error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <HeadContent
        title={data.title}
        image={data.image && data.image[0]}
      ></HeadContent>
      <div className="p-5 bg-grayfc rounded-2xl">
        <h2 className="flex items-center gap-5 mb-6 text-xl font-medium">
          <span>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.79292 0.792893C8.18345 1.18342 8.18345 1.81658 7.79292 2.20711L2.00003 8L7.79292 13.7929C8.18345 14.1834 8.18345 14.8166 7.79292 15.2071C7.4024 15.5976 6.76923 15.5976 6.37871 15.2071L0.585817 9.41422C-0.195233 8.63317 -0.195231 7.36683 0.585817 6.58579L6.37871 0.792893C6.76923 0.402369 7.4024 0.402369 7.79292 0.792893Z"
                fill="#11142D"
              />
            </svg>
          </span>
          Details
        </h2>
        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <div aria-label="left">
            <div aria-label="gallery" className="mb-4">
              <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
                <img
                  src="https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  alt=""
                  className="rounded-lg row-[1/-1] col-[1/2] h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  alt=""
                  className="object-cover rounded-lg row-[1/2] h-full"
                />
                <img
                  src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  alt=""
                  className="object-cover rounded-lg row-[2/3] h-full"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-[3fr_1fr] gap-6 mb-5">
                <div className="flex flex-col gap-2">
                  <span className="block text-lg font-medium">Apartment</span>
                  <h1 className="text-xl font-medium">
                    Star Sun Hotel & Aportment
                  </h1>
                  <div className="flex items-center gap-1 text-sm text-gray80">
                    <span></span>
                    <span>North Carolina, USA</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>⭐️⭐️⭐️⭐️⭐️</div>
                  <div className="text-base font-medium">Price</div>
                  <div>
                    <strong className="text-2xl font-bold text-primary">
                      $80
                    </strong>
                    <span className="text-sm text-gray80"> For One Day</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-7">Facillity</h3>
              <div className="grid grid-cols-4 gap-5 mb-6">
                {Array(8)
                  .fill(0)
                  .map((item, index) => (
                    <div className="flex items-center gap-1" key={index}>
                      <span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6666 9.19432V4.22516L4.33306 4.2223C4.33306 4.2223 4.33364 7.66864 4.33325 8.86145C4.34732 7.86161 5.12301 7.05576 6.08403 7.05576H7.24879C8.21579 7.05576 8.99977 7.87861 8.99977 8.88909C8.99977 7.87656 9.78082 7.05576 10.7508 7.05576H11.9155C12.8825 7.05576 13.6665 7.87861 13.6665 8.88909L13.6666 9.19432ZM3.16655 9.49991V4.22511C3.16655 3.54845 3.69048 3 4.33316 3H13.6667C14.311 3 14.8333 3.5501 14.8333 4.22511V9.49991H15.4163C15.7387 9.49991 16 9.77265 16 10.1095V14.3904C16 14.727 15.7412 15 15.4168 15H13.6666C13.3444 15 12.9653 14.7526 12.8223 14.4533L12.7609 14.3246C12.6168 14.0226 12.2369 13.7777 11.9141 13.7777H6.08586C5.76234 13.7777 5.38196 14.0251 5.23909 14.3246L5.17766 14.4533C5.03352 14.7552 4.65783 15 4.33341 15H2.5832C2.26113 15 2 14.7273 2 14.3904V10.1095C2 9.77286 2.26103 9.49991 2.5837 9.49991H3.16655ZM3.16655 13.7776H4.19546C4.53648 13.0633 5.32134 12.5554 6.08569 12.5554H11.914C12.6781 12.5554 13.4622 13.0612 13.8042 13.7776H14.8331V10.7222H3.16655V13.7776ZM7.83307 9.49991V8.88883C7.83307 8.55255 7.57077 8.27765 7.24879 8.27765H6.08404C5.75961 8.27765 5.49976 8.55009 5.49976 8.88883V9.49991H7.83307ZM12.4998 9.49991V8.88883C12.4998 8.55255 12.2375 8.27765 11.9156 8.27765H10.7508C10.4264 8.27765 10.1665 8.55009 10.1665 8.88883V9.49991H12.4998Z"
                            fill="#808191"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium">4 Beds</span>
                    </div>
                  ))}
              </div>
              <h3 className="text-lg font-medium mb-2.5">Description</h3>
              <div className="text-sm leading-normal text-gray80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat officiis, suscipit, ut voluptate nihil praesentium
                consectetur ipsum dicta, labore pariatur sint beatae. Amet,
                quod? Quibusdam explicabo quos earum esse quis.
              </div>
            </div>
          </div>
          <div aria-label="right" className="flex flex-col gap-5">
            <div
              aria-label="agent"
              className="flex flex-col items-center justify-center px-6 py-4 border rounded-lg border-graye4 bg-grayfc"
            >
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                className="w-[90px] aspect-square rounded-full object-cover mb-4"
                alt=""
              />
              <h3 className="mb-2 text-lg font-semibold">Hussain Ahmed</h3>
              <div className="text-sm text-gray80">North Carolina, USA</div>
              <div className="my-2 font-semibold">10 Propertis</div>
              <div className="grid grid-cols-2 gap-5 mt-6">
                <button>Message</button>
                <button>Call</button>
              </div>
            </div>
            <div aria-label="map">
              <img src="/map.png" alt="" />
            </div>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
