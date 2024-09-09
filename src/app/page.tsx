import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TrustedCompanies } from "@/components/trusted-companies";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="relative z-20 mx-auto grid grid-cols-[1fr,_min(80rem,_100%-40px),_1fr] gap-y-[min(10rem,25dvw)] [&>*]:col-[2/3]">
      <Hero />
      <Services />
      <WhyChooseUs />
      <TrustedCompanies />
      <Testimonials />
    </main>
  );
}
