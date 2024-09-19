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
    <section className="grid gap-4 lg:grid-cols-[65ch,_1fr] lg:grid-rows-2">
      <Card
        classNames={{
          base: "group lg:col-[1/2] lg:row-[1/2] p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
        }}
      >
        <CardHeader className="flex flex-col items-start pb-0">
          <h3 className="font-meidum text-3xl">Our Mission</h3>
        </CardHeader>
        <CardBody>
          <p className="text-relaxed">
            Our mission is to transform e-waste into an opportunity for positive
            change. By giving discarded electronics a second life, we aim to
            reduce environmental harm and contribute to a more sustainable
            future. We believe that every gadget has the potential to serve
            beyond its initial purpose, and by repurposing them, we help
            decrease the growing global e-waste crisis.
          </p>
        </CardBody>
      </Card>
      <Card
        classNames={{
          base: "group lg:col-[1/2] lg:row-[2/3] p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
        }}
      >
        <CardHeader className="flex flex-col items-start pb-0">
          <h3 className="font-meidum text-3xl">Our Vision</h3>
        </CardHeader>
        <CardBody>
          <p className="text-relaxed">
            Our vision is to create a world where technology and sustainability
            coexist harmoniously. We envision a future where e-waste is no
            longer a growing problem but a valuable resource that fuels
            innovation and positive environmental impact. By promoting the reuse
            and recycling of electronic devices.
          </p>
        </CardBody>
      </Card>
      <Image
        src="/images/mission (2).jpg"
        alt="Hero Illustration"
        height="600"
        width="600"
        className="row-[1/3] w-full rounded-xl object-cover object-center"
      />
    </section>
  );
}
