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
    <main className="container relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 pt-[max(5dvw,1.5rem)] md:grid-cols-2 md:gap-28">
      <div>
        <SectionSubheading className="mx-0 px-0 pb-2 text-start">
          Contact Us
        </SectionSubheading>
        <SectionHeading className="pl-0 text-start">
          Reach our People!
        </SectionHeading>
        <p className="leading-relaxed text-foreground-500">
          <ul className="mb-6 p-4 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                <MapPin color="white" />
              </div>
              <div className="mb-4 ml-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Our Address
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  1230 Maecenas Street Donec Road
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  New York, EEUU
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                <Contact color="white" />
              </div>
              <div className="mb-4 ml-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +1 (123) 456-7890
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Mail: tailnext@gmail.com
                </p>
              </div>
            </li>
          </ul>
        </p>
        <div className="flex items-center gap-x-4 pt-8">
          {socialLinks.map(({ link, Icon }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              className="cursor-pointer rounded-full border border-foreground/10 bg-background/80 p-3 text-foreground/60 transition-colors hover:bg-primary hover:text-background"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>
      <ContactUsForm />
    </main>
  );
}
