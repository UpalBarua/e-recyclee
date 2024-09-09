import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsData } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { MotionDiv } from "./motion-div";
import { SectionSubheading } from "./ui/section-subheading";

export function WhyChooseUs() {
  return (
    <section>
      <SectionHeading>What Sets Us Apart</SectionHeading>
      <SectionSubheading>
        Explore our customizable packages for your specific needs
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUsData.map((data, i) => (
          <ChooseUsCard key={data.title} i={i} {...data} />
        ))}
      </div>
    </section>
  );
}

type ChooseUsCardProps = (typeof whyChooseUsData)[number] & { i: number };

function ChooseUsCard({
  icon: Icon,
  color,
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
            <Icon style={{ color }} className="size-10" />
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
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="leading-relaxed text-foreground/80">{description}</p>
        </CardBody>
      </MotionDiv>
    </Card>
  );
}
