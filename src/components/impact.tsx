import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./motion-div";
import { Card } from "@nextui-org/card";

const stats = [
  {
    label: "Students Impacted",
    stat: 400,
  },
  {
    label: "Yeard",
    stat: 2024,
  },
] as const;

export function Impact() {
  return (
    <section className="space-y-20">
      <div className="relative grid grid-cols-1 items-center justify-items-center lg:grid-cols-3">
        <MotionDiv
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="col-[1/3] w-full"
        >
          <Image
            src="/images/recyclee (14).jpg"
            alt="Hero Illustration"
            height="600"
            width="600"
            className="h-full min-w-[60vw] rounded-xl object-cover object-center lg:max-h-[90vh]"
          />
        </MotionDiv>
        <Card
          classNames={{
            base: "group p-2 absolute left-1/2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
          }}
        >
          <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:text-start">
            <MotionDiv
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.125 }}
            >
              <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_2.75rem)] capitalize leading-tight tracking-tight">
                Collaborating with Passback
              </h1>
            </MotionDiv>
            <MotionDiv
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="max-w-[35rem] text-pretty text-lg leading-relaxed text-foreground-600">
                We were at Wahab Folawiyo School, Lagos, Nigeria. e-recyclee, in
                Collaboration with @passbackofficial, emphasized the importance
                of reuse and circular economy principles.
              </p>
              <ul className="grid grid-cols-3 gap-8 pt-4">
                {stats.map(({ label, stat }) => (
                  <li className="grid gap-2" key={label}>
                    <span className="text-3xl">{stat}+</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
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
        </Card>
      </div>
      {/* <div className="relative grid grid-cols-1 items-center lg:grid-cols-3">
        <MotionDiv
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="order-1 col-[2/4] w-full"
        >
          <Image
            src="/images/hero.webp"
            alt="Hero Illustration"
            height="600"
            width="600"
            className="h-full w-full rounded-xl border-t object-cover object-center lg:max-h-[90vh]"
          />
        </MotionDiv>
        <Card
          classNames={{
            base: "group absolute p-2 right-1/2 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5 sm:p-4",
          }}
        >
          <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:text-start">
            <MotionDiv
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.125 }}
            >
              <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_2.75rem)] capitalize leading-tight tracking-tight">
                Partnership with Passback
              </h1>
            </MotionDiv>
            <MotionDiv
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="max-w-[35rem] text-pretty text-lg leading-relaxed text-foreground-600">
                We were at Wahab Folawiyo School, Lagos, Nigeria. JustUsedTech,
                in Collaboration with @passbackofficial, emphasized the
                importance of reuse and circular economy principles.
              </p>
              <ul className="grid grid-cols-3 gap-8 pt-4">
                {stats.map(({ label, stat }) => (
                  <li className="grid gap-2" key={label}>
                    <span className="text-3xl">{stat}+</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
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
        </Card>
      </div> */}
    </section>
  );
}
