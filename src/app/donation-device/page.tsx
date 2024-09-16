import { ContactUsForm } from "@/components/contact-us-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { socialLinks } from "@/config";
import { CalendarClock, Contact, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | degikon",
  description:
    "Need digital help? Contact degikon! All digital services, all questions answered.",
};

export default function ContactUs() {
  return (
    <main className="container relative z-10 mx-auto max-w-4xl grid-cols-1 gap-10 px-4 pt-[max(5dvw,1.5rem)]">
      {/* <div>
        <h1>Give donation</h1>
      </div> */}

      <h1 className="pb-6 text-4xl font-bold">Donate Devices :</h1>
      <ContactUsForm />
    </main>
  );
}
