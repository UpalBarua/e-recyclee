import { MotionDiv } from "@/components/motion-div";
import { trustedCompanines } from "@/config";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TrustedCompaniesSlider } from "./trusted-companies-slider";

export async function TrustedCompanies() {
  return (
    <section className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="order-last flex flex-col items-start gap-4 lg:order-first">
        <h2 className="font-meidum text-2xl capitalize md:text-3xl">
          Collaborating with Partner
        </h2>
        <p className="leading-relaxed text-foreground/60">
          Recycle is renowned for its brief description of their strengths or
          achievements, e.g., cutting-edge technology, outstanding customer
          service, industry-leading solutions.
        </p>
        <Link href="/contact-us">
          <Button color="primary" endContent={<ChevronRight />}>
            <span>Lets Connect</span>
          </Button>
        </Link>
      </div>
      <div className="hidden grid-cols-3 gap-8 px-2 lg:grid lg:gap-4 lg:px-0">
        {trustedCompanines?.map((company, i) => (
          <MotionDiv
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.125 * (i + 1),
            }}
            viewport={{
              once: true,
            }}
            key={company}
          >
            <div className="flex place-content-center rounded-xl border border-foreground/5 bg-content1/65 p-6 backdrop-blur-xl backdrop-saturate-200">
              <Image
                src={company as string}
                alt="trusted company"
                height={80}
                width={200}
                className="object-fit object-center"
                quality={95}
              />
            </div>
          </MotionDiv>
        ))}
      </div>
      <TrustedCompaniesSlider />
    </section>
  );
}
