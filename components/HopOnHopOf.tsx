import { cardDatas } from "@/constants";
import React from "react";
import TravelCard from "./TravelCard";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const HopOnHopOf = () => {
  return (
    <section className="mt-4 contain-size" id="customCara">
      <div className="mb-4">
        <h2 className="mainSubHeading">Hop on, hop off</h2>
        <p className="bodyMd">Skip the layovers and fly nonstop to these destinations</p>
      </div>
      <Carousel id="id1">
        <CarouselContent>
          {cardDatas?.map((card) => {
            return (
              <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/4">
                <Card className="border-none">
                  <CardContent id="helloSuraj" className="flex  items-center justify-center !p-0">
                    <>
                      <TravelCard
                        id={card.id}
                        src={card.src}
                        key={card.id}
                        name={card.name}
                        cardType="stamp"
                        badge={card.badge}
                        pricing={card.pricing}
                      />
                    </>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HopOnHopOf;
