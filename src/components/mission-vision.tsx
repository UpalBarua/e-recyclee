import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

export function MissionVision() {
  return (
    <section className="grid grid-cols-[65ch,_1fr] grid-rows-2 gap-4">
      <Card
        classNames={{
          base: "group col-[1/2] row-[1/2] p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
        }}
      >
        <CardHeader className="flex flex-col items-start pb-0">
          <h3 className="font-meidum text-3xl">Our Mission</h3>
        </CardHeader>
        <CardBody>
          <p className="text-relaxed">
            Founded on the belief in sustainability and community empowerment,
            our journey extends beyond being a venture. Our story is marked by
            tangible milestones that showcase the real impact of our hard work.
            Empowering over 7,000 individuals in Africa and North America.
          </p>
        </CardBody>
      </Card>
      <Card
        classNames={{
          base: "group col-[1/2] row-[2/3] p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
        }}
      >
        <CardHeader className="flex flex-col items-start pb-0">
          <h3 className="font-meidum text-3xl">Our Vision</h3>
        </CardHeader>
        <CardBody>
          <p className="text-relaxed">
            Founded on the belief in sustainability and community empowerment,
            our journey extends beyond being a venture. Our story is marked by
            tangible milestones that showcase the real impact of our hard work.
            Empowering over 7,000 individuals in Africa and North America.
          </p>
        </CardBody>
      </Card>
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
