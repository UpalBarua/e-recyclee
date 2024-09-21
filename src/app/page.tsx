import { AboutUs } from "@/components/about-us";
import { Blog } from "@/components/blog";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { MissionVision } from "@/components/mission-vision";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TrustedCompanies } from "@/components/trusted-companies";
import { OurFocus } from "@/components/our-focus";

export default function HomePage() {
  return (
    <main className="relative z-20 mx-auto grid grid-cols-[1fr,_min(80rem,_100%-3rem),_1fr] space-y-[min(10rem,25dvw)] [&>*]:col-[2/3]">
      <Hero />
      <OurFocus />
      <AboutUs />
      <Services />
      <MissionVision />
      <TrustedCompanies />
      <Impact />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </main>
  );
}
