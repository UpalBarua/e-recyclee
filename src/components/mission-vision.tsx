"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

const missionAndVision = [
  {
    title: "Our Mission",
    description:
      "Founded on the belief in sustainability and community empowerment, our journey extends beyond being a venture.Our story is marked by tangible milestones that showcase the real impact of our hard work. Empowering over 7,000 individuals in Africa and North America.",
  },
  {
    title: "Our Vision",
    description:
      "Founded on the belief in sustainability and community empowerment, our journey extends beyond being a venture. Our story is marked by tangible milestones that showcase the real impact of our hard work. Empowering over 7,000 individuals in Africa and North America.",
  },
] as const;

export function MissionVision() {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-[65ch,_1fr]">
      {missionAndVision.map(({ title, description }) => (
        <Card
          classNames={{
            base: "lg:col-[1/2] lg:row-[1/2] lg:even:row-[2/3] group p-3 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
          }}
        >
          <CardHeader className="flex flex-col items-start pb-0">
            <h3 className="font-meidum text-2xl">{title}</h3>
          </CardHeader>
          <CardBody>
            <p className="text-relaxed text-foreground/60">{description}</p>
          </CardBody>
        </Card>
      ))}
      <Image
        src="/images/hero.webp"
        alt="Hero Illustration"
        height="600"
        width="600"
        className="row-[1/3] max-h-[26rem] w-full rounded-xl border-t object-cover object-center"
      />
    </section>
  );
}
