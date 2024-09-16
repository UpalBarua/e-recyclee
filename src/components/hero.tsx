import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center gap-8 py-6 lg:grid-cols-2 lg:gap-14">
      <div className="grid justify-items-start gap-y-4 md:gap-y-6">
        <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 text-xs font-medium uppercase backdrop-blur-xl backdrop-saturate-200 sm:text-sm">
          Transform E-Waste into Impact 🌲
        </span>
        <h1 className="font-meidum text-[clamp(1.35rem,_5vw+0.25rem,_2.75rem)] capitalize">
          Recycle responsibly. Empower communities. Build a sustainable future!
        </h1>
        <p className="leading-relaxed text-foreground/60">
          we are dedicated to making a difference in the world through impactful
          philanthropy. Our mission is to connect generous donors with
          meaningful causes, creating a ripple effect of positive change in
          communities around the globe.
        </p>
        <Link href="/contact-us">
          <Button color="primary" size="lg">
            <span>Learn More</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/images/hero.webp"
        alt="Hero Illustration"
        height="600"
        width="600"
        className="max-h-[35rem] rounded-xl object-cover object-center"
      />
    </section>
  );
}
