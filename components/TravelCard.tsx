import { TravelCardTypee } from "@/types";
import Image from "next/image";

import React from "react";

const TravelCard: React.FC<TravelCardTypee> = ({ cardType, badge, name, src, id, pricing }) => {
  return (
    <section>
      <div className="relative">
        <Image
          src={src}
          alt={`${name}-${id}`}
          height={700}
          width={1000}
          quality={100}
          style={{ objectFit: "cover", height: "360px", width: "auto" }}
          className="rounded-md"
        />
        <div className="absolute right-2 top-2 cursor-pointer rounded-md bg-white-100 px-4 py-1.5 hover:bg-gray">
          <Image src="/assets/icons/heart-blank.svg" alt="blank-heart" width={18} height={18} />
        </div>
        {badge && (
          <span className="bodyXsm absolute bottom-3 left-3 cursor-pointer rounded-md bg-white-100 px-2 py-1 hover:bg-gray">
            {badge}
          </span>
        )}
      </div>
      <div>
        <div className="mt-3">
          <p className="bodySubHeading">{name} </p>
          <p className="bodySm">pricing from {pricing}</p>
        </div>
      </div>
    </section>
  );
};

export default TravelCard;
