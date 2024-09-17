// import { stats } from "@/config";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="grid grid-cols-1 items-center justify-items-start lg:grid-cols-2 lg:gap-14">
      <div className="relative w-full">
        <Image
          src="/images/about.jpg"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-xl object-cover object-center lg:max-h-[90vh]"
        />
        <ul className="-right-10 bottom-10 mt-2 grid w-full grid-cols-1 gap-10 rounded-xl bg-primary p-8 sm:grid-cols-3 lg:absolute lg:m-2 lg:gap-8">
          {stats.map(({ label, stat }) => (
            <li className="grid gap-2" key={label}>
              <span className="text-5xl">{stat}+</span>
              <span className="text-foreground/60">{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid justify-items-start gap-y-4 py-10 md:gap-y-6">
        <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-xs font-medium uppercase backdrop-blur-xl backdrop-saturate-200 sm:text-sm">
          About Us ❓
        </span>
        <h2 className="font-meidum text-2xl capitalize md:text-3xl">
          Tech with a Purpose. We bridge the digital divide and reduce e-waste.
        </h2>
        <p className="leading-relaxed text-foreground/60">
          We're more than just a recycling service. Our mission is to bridge the
          digital divide and create a sustainable future. By refurbishing old
          electronics, we provide essential technology to underserved
          communities, empowering them to connect, learn, and grow.
        </p>
        <Link href="/">
          <Button>
            <span>Learn More</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
