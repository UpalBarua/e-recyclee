import { Card } from "@nextui-org/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";

export function Blog() {
  return (
    <section className="space-y-6">
      <SectionHeading>Latest Blog & News</SectionHeading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <Card
              key={i}
              classNames={{
                base: "group border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
              }}
            >
              <Image
                className="border-border/25 max-h-[14rem] w-full rounded-[inherit] rounded-bl-none rounded-br-none border-b object-cover object-center"
                src={"/images/hero.webp"}
                alt={"blog image"}
                height={400}
                width={250}
              />
              <div className="space-y-2 px-5 py-6">
                <div className="flex items-center gap-x-2 pb-2 text-sm text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  {/* <span>{format(new Date(date), "dd LLL y")}</span> */}
                  <span>August 22, 2024</span>
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Why Sustainable Tech Matters: The JustUsed Tech Approach
                </h3>
                <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
                  In today’s fast-paced world, technology is an inseparable part
                  of our lives.…
                </p>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
