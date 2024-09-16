import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { SectionHeading } from "@/components/ui/section-heading";
import { ourFocus } from "@/config";

export function OurFocus() {
  return (
    <section>
      <SectionHeading>How Contributions Empower Change</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ourFocus.map((data) => (
          <FocusCard key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
}

type FocusCardProps = (typeof ourFocus)[number];

function FocusCard({ icon: Icon, title, description }: FocusCardProps) {
  return (
    <Card
      classNames={{
        base: "group p-2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
      }}
    >
      <CardHeader className="grid">
        <div className="flex aspect-square items-center justify-center rounded-xl border border-foreground/5 bg-primary p-3.5 backdrop-blur-xl backdrop-saturate-200">
          <Icon className="size-8" />
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <h3 className="font-meidum text-2xl">{title}</h3>
        <p className="line-clamp-4 leading-relaxed text-foreground/60">
          {description}
        </p>
      </CardBody>
    </Card>
  );
}
