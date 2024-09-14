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
          base: "group col-[1/2] row-[2/3] p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
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
        src="/images/recyclee (8).jpg"
        alt="Hero Illustration"
        height="600"
        width="600"
        className="row-[1/3] max-h-[26rem] w-full rounded-xl object-cover object-center"
      />
    </section>
  );
}
