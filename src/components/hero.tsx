import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./motion-div";

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2 md:gap-10 md:py-10">
      <div className="order-last space-y-2 md:order-first md:space-y-3">
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hidden rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-sm font-medium uppercase backdrop-blur-xl backdrop-saturate-200 md:inline">
            Convert E-Waste into a Lasting Impact 🌲
          </span>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.125 }}
        >
          <h1 className="font-meidum text-balance text-[clamp(2rem,_6.5vw+0.5rem,_3.125rem)] capitalize">
            Breathing New Life into Gadgets, Empowering Communities
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-pretty leading-relaxed text-foreground/60">
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
      >
        <Image
          src="/images/recyclee (4).jpg"
          alt="Hero Illustration"
          height="600"
          width="600"
          className="size-full rounded-xl object-cover object-center"
        />
      </MotionDiv>
    </section>
  );
}
