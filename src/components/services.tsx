import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { House, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export function Services() {
  return (
    <section id="services" className="scroll-mt-[5rem] rounded-xl bg-primary">
      <div className="grid grid-cols-1 items-center justify-items-start gap-6 p-4 lg:grid-cols-2">
        <Image
          src="/images/hero.webp"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-xl object-cover object-center lg:max-h-[90vh]"
        />
        <div className="grid justify-items-start gap-y-6">
          <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-xs font-medium uppercase backdrop-blur-xl backdrop-saturate-200 sm:text-sm">
            Our services 🚀
          </span>
          <h2 className="font-meidum text-2xl capitalize md:text-3xl">
            Leading the industry in intelligent waste management
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
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
                <h3 className="font-meidum text-2xl">E-Waste Recycling</h3>
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
                <h3 className="font-meidum text-2xl">Upcycling gadgets</h3>
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
