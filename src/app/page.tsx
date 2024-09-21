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
    <main className="wrapper relative z-20 mx-auto gap-y-[max(15vw,_6rem)]">
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
