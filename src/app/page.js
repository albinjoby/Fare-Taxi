"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import car from "/public/car.svg";
import bus from "/public/bus.svg";
import auto from "/public/auto.svg";

const vehicles = [
  {
    name: "auto",
    src: auto,
  },
  {
    name: "car",
    src: car,
  },
  {
    name: "bus",
    src: bus,
  },
];

const Page = () => {
  const [currentVehicle, setCurrentVehicle] = useState(vehicles[0].name);

  useEffect(() => {
    console.log(currentVehicle);
  }, [currentVehicle]);

  return (
    <div className=" text-white py-20 h-screen">
      <div className="flex flex-col text-center items-center gap-5">
        <p className="text-7xl text-center font-medium">
          Kerala Fare Calculator
        </p>
        <p className="text-2xl">
          {" "}
          A simpler, faster, and more accurate way to
          <br />
          calculate your travel fare in Kerala
        </p>

        <div className="mt-20">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {vehicles.map((vehicle, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-1">
                    <Card className="bg-[#171717]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold text-white select-none">
                          <Image
                            src={vehicle.src}
                            alt={vehicle.name}
                            onClick={() => setCurrentVehicle(vehicle.name)}
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page;
