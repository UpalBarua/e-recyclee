import { MotionDiv } from "./motion-div";
import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { House, MonitorSmartphone } from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[5rem] rounded-xl bg-primary py-20"
    >
      <div className="!col-[1/-1] grid grid-cols-1 items-center justify-items-center p-8 lg:grid-cols-2">
        <MotionDiv
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="w-full"
        >
          <Image
            src="/images/hero.webp"
            alt="Hero Illustration"
            height="600"
            width="600"
            className="h-full w-full rounded-xl object-cover object-center lg:max-h-[90vh]"
          />
        </MotionDiv>
        <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:py-0 lg:text-start">
          <MotionDiv
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200 sm:text-base">
              Our services 🚀
            </span>
          </MotionDiv>
          <MotionDiv
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.125 }}
          >
            <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_2.75rem)] capitalize leading-tight tracking-tight">
              Leading the industry in intelligent waste management
            </h1>
          </MotionDiv>
          <div className="flex items-center gap-x-4">
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
                <h3 className="font-meidum text-2xl tracking-tight">
                  E-Waste Recycling
                </h3>
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
                <h3 className="font-meidum text-2xl tracking-tight">
                  Upcycling gadgets
                </h3>
                <p className="leading-relaxed text-foreground/60">
                  We give your old electronics a new lease on life.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
