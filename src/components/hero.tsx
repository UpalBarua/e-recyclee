import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./motion-div";
import Link from "next/link";

export function Hero() {
  return (
    <section className="!col-[1/-1] grid grid-cols-1 items-center justify-items-center pt-8 lg:grid-cols-2">
      <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:py-0 lg:text-start">
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200 sm:text-base">
            Convert E-Waste into a Lasting Impact 🌲
          </span>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.125 }}
        >
          <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_3.5rem)] capitalize leading-tight tracking-tight">
            Breathing New Life into Gadgets, Empowering Communities
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="max-w-[35rem] text-pretty text-lg leading-relaxed text-foreground-600">
            we are dedicated to making a difference in the world through
            impactful philanthropy. Our mission is to connect generous donors
            with meaningful causes, creating a ripple effect of positive change
            in communities around the globe.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex items-center gap-x-4 pt-4">
            <Link href="/contact-us">
              <Button
                color="primary"
                size="lg"
                className="border border-foreground/10 font-medium"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="w-full"
      >
        <Image
          src="/images/recyclee (4).jpg"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="h-full w-full rounded-md object-cover object-center lg:max-h-[90vh]"
        />
      </MotionDiv>
    </section>
  );
}
