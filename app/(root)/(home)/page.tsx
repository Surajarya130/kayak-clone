"use client";

import FlightSearchForm from "@/components/FlightSearchForm";
import HopOnHopOf from "@/components/HopOnHopOf";
import NewsLetter from "@/components/NewsLetter";
import PopularTools from "@/components/PopularTools";

const Page = () => {
  return (
    <main className="flex min-h-screen max-w-full grow  flex-col p-10">
      <FlightSearchForm />
      <NewsLetter />
      <HopOnHopOf />
      <PopularTools />
    </main>
  );
};

export default Page;
