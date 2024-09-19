// import { stats } from "@/config";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  {
    label: "Laptops Donated",
    stat: 20,
  },
  {
    label: "Countries Impacted",
    stat: 2,
  },
  {
    label: "New Partners",
    stat: 2,
  },
] as const;

export function AboutUs() {
  return (
    <section className="grid grid-cols-1 justify-items-start gap-5 md:grid-cols-2 md:gap-14">
      <div className="relative w-full">
        <Image
          src="/images/about.jpg"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-xl object-cover object-center"
        />
        <ul className="mt-2 grid w-full grid-cols-3 gap-10 rounded-xl bg-primary p-8 lg:absolute lg:-right-10 lg:bottom-10 lg:m-2 lg:gap-8">
          {stats.map(({ label, stat }) => (
            <li className="grid gap-2" key={label}>
              <span className="text-4xl lg:text-5xl">{stat}+</span>
              <span className="text-sm text-foreground/60 lg:text-base">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid justify-items-start gap-y-4 py-10 md:gap-y-6">
        <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase backdrop-blur-xl backdrop-saturate-200">
          About Us ❓
        </span>
        <SectionHeading className="pb-0 text-start md:pb-0">
          Tech with a Purpose. We bridge the digital divide and reduce e-waste.
        </SectionHeading>
        <p className="leading-relaxed text-foreground/60">
          We're more than just a recycling service. Our mission is to bridge the
          digital divide and create a sustainable future. By refurbishing old
          electronics, we provide essential technology to underserved
          communities, empowering them to connect, learn, and grow.
        </p>
        <Link href="/">
          <Button>
            <span>Learn More</span>
            <ChevronRight className="size-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
