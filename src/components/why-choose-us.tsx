import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsData } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { MotionDiv } from "./motion-div";
import { SectionSubheading } from "./ui/section-subheading";

import { Globe, Trees, PenTool, BarChart } from "lucide-react";

const focus = [
  {
    title: "Humanity",
    description:
      "We believe in the power of technology to transform lives. By providing refurbished devices to underserved communities, we are empowering individuals to connect, learn, and grow.",
    icon: Globe,
  },
  {
    title: "Sustainability",
    description:
      "Protecting our planet is a top priority. We are committed to responsible e-waste management and reducing our environmental footprint. By recycling and repurposing electronics.",
    icon: Trees,
  },
  {
    title: "Repurposing",
    description:
      "We believe that every device has a second life. By refurbishing and repairing old electronics, we are extending their lifespan and reducing the need for new, resource-intensive products.",
    icon: PenTool,
  },
  {
    title: "Impact",
    description:
      "Our work has a measurable impact on communities and the environment. By providing affordable technology to those in need, we are empowering individuals to achieve their goals and improve their quality of life.",
    icon: BarChart,
  },
] as const;

export function WhyChooseUs() {
  return (
    <section>
      <SectionHeading>What Sets Us Apart</SectionHeading>
      <SectionSubheading>
        Explore our customizable packages for your specific needs
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map((data, i) => (
          <ChooseUsCard key={data.title} i={i} {...data} />
        ))}
      </div>
    </section>
  );
}

type ChooseUsCardProps = (typeof focus)[number] & { i: number };

function ChooseUsCard({
  icon: Icon,
  // color,
  title,
  description,
  i,
}: ChooseUsCardProps) {
  return (
    <Card
      classNames={{
        base: "group p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
      }}
    >
      <CardHeader className="flex flex-col items-start">
        <MotionDiv
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.125 * (i + 1),
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex aspect-square items-center justify-center rounded-xl border border-foreground/5 bg-content2/65 p-3.5 backdrop-blur-xl backdrop-saturate-200">
            <Icon
              // style={{ color }}
              className="size-10"
            />
          </div>
        </MotionDiv>
      </CardHeader>
      <MotionDiv
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.125 * (i + 1),
        }}
        viewport={{
          once: true,
        }}
      >
        <CardBody className="space-y-2">
          <h3 className="font-meidum text-3xl tracking-tight">{title}</h3>
          <p className="leading-relaxed text-foreground/60">{description}</p>
        </CardBody>
      </MotionDiv>
    </Card>
  );
}
