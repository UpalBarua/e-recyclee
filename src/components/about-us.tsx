import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./motion-div";
import Link from "next/link";

const stats = [
  {
    label: "Laptops Donated",
    stat: 1000,
  },
  {
    label: "Countries Impacted",
    stat: 4,
  },
  {
    label: "New Partners",
    stat: 10,
  },
] as const;

export function AboutUs() {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2">
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="relative w-full"
      >
        <Image
          src="/images/hero.webp"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-xl border-t object-cover object-center lg:max-h-[90vh]"
        />
        <ul className="absolute -left-10 bottom-10 m-2 grid grid-cols-3 gap-8 rounded-xl bg-primary p-6">
          {stats.map(({ label, stat }) => (
            <li className="grid gap-2" key={label}>
              <span className="text-5xl">{stat}+</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </MotionDiv>
      <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:py-0 lg:text-start">
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200 sm:text-base">
            About Us ❓
          </span>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.125 }}
        >
          <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_2.75rem)] capitalize leading-tight tracking-tight">
            Tech with a Purpose. We bridge the digital divide and reduce
            e-waste.
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="max-w-[35rem] text-pretty text-lg leading-relaxed text-foreground-600">
            We're more than just a recycling service. Our mission is to bridge
            the digital divide and create a sustainable future. By refurbishing
            old electronics, we provide essential technology to underserved
            communities, empowering them to connect, learn, and grow.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="/">
            <Button
              className="border border-foreground/10 bg-content1/65 font-medium backdrop-blur-xl backdrop-saturate-200"
              size="lg"
            >
              <span>Learn More</span>
              <ChevronRight />
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
