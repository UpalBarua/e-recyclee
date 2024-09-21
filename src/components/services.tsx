import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { House, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./motion-div";
import { SectionHeading } from "./ui/section-heading";

export function Services() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 items-center justify-items-center rounded-xl bg-primary p-5 lg:grid-cols-2 lg:p-10"
    >
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="h-full w-full"
      >
        <Image
          src="/images/recyclee (5).jpg"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-xl object-cover object-center"
        />
      </MotionDiv>
      <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:py-0 lg:text-start">
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200">
            Our services 🚀
          </span>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.125 }}
        >
          <SectionHeading className="pb-0 md:pb-0 lg:text-start">
            Pioneering Smart Solutions in Waste Management
          </SectionHeading>
        </MotionDiv>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card
            classNames={{
              base: "group p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
            }}
          >
            <CardHeader className="flex flex-col items-start">
              <div className="flex aspect-square items-center justify-center rounded-xl border border-foreground/5 bg-content2/65 p-3.5 backdrop-blur-xl backdrop-saturate-200">
                <House />
              </div>
            </CardHeader>
            <CardBody className="space-y-2">
              <h3 className="font-meidum text-xl">E-Waste Recycling</h3>
              <p className="leading-relaxed text-foreground/60">
                Recycling of old and defective equipment.
              </p>
            </CardBody>
          </Card>
          <Card
            classNames={{
              base: "group p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
            }}
          >
            <CardHeader className="flex flex-col items-start">
              <div className="flex aspect-square items-center justify-center rounded-xl border border-foreground/5 bg-content2/65 p-3.5 backdrop-blur-xl backdrop-saturate-200">
                <MonitorSmartphone />
              </div>
            </CardHeader>
            <CardBody className="space-y-2">
              <h3 className="font-meidum text-xl">Upcycling gadgets</h3>
              <p className="leading-relaxed text-foreground/60">
                We give your old electronics a new lease on life.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
