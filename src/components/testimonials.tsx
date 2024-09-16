import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    id: "0",
    comment:
      "E-recyclee made the donation process so seamless! I donated my old gadgets, and knowing they’re being reused for a greater purpose is amazing. Their team is incredibly supportive and committed to reducing e-waste!",
    starRating: 5,
    customer: {
      name: "Donald T Clark",
      picture: "/images/testimonials/donald-t-clark.webp",
    },
  },
  {
    id: "1",
    comment:
      "Thanks to e-recyclee, my outdated tech is now making an impact. Their e-recycling initiative not only helped declutter my home but also supported sustainability efforts. A win for both me and the environment!",
    starRating: 5,
    customer: {
      name: "Daniel R Wagner",
      picture: "/images/testimonials/daniel-r-wagner.webp",
    },
  },
  {
    id: "2",
    comment:
      "I’m beyond impressed with e-recyclee's mission. I donated my old devices, and the fact that they give them a new life by helping those in need is truly commendable. Highly recommend their services for e-waste management!",
    starRating: 5,
    customer: {
      name: "Cynthia M Hanlon",
      picture: "/images/testimonials/cynthia-m-hanlon.webp",
    },
  },
  {
    id: "3",
    comment:
      "The way e-recyclee handles e-waste is phenomenal! I contributed my unused electronics, and it’s reassuring to know they are being repurposed for good causes. Their dedication to sustainability is evident!",
    starRating: 5,
    customer: {
      name: "David L.",
      picture: "",
    },
  },
  {
    id: "4",
    comment:
      "I love how e-recyclee makes donating old electronics so easy. Their efforts to reduce e-waste while helping communities in need through donations is truly inspiring. I’m proud to be part of this initiative!",
    starRating: 5,
    customer: {
      name: "Chad E Cote",
      picture: "/images/testimonials/chad-e-cote.webp",
    },
  },
  {
    id: "5",
    comment:
      "E-recyclee’s approach to recycling electronics is a game-changer. I donated my old gadgets, and their efforts to recycle and reuse them have significantly impacted both the environment and people’s lives. A remarkable service!",
    starRating: 5,
    customer: {
      name: "Evelyn L Vrabel",
      picture: "/images/testimonials/evelyn-l-vrabel.webp",
    },
  },
  {
    id: "6",
    comment:
      "The professionalism and dedication of e-recyclee are second to none. Donating my old tech felt like I was directly contributing to a better world. They make e-recycling simple and rewarding!",
    starRating: 5,
    customer: {
      name: "Joseph M Williams",
      picture: "",
    },
  },
  {
    id: "7",
    comment:
      "E-recyclee made donating so convenient! I no longer had to worry about e-waste; they turned my unused gadgets into resources for people in need. Their quick and efficient service was impressive.",
    starRating: 5,
    customer: {
      name: "Kristin S Reed",
      picture: "",
    },
  },
  {
    id: "8",
    comment:
      "E-recyclee's commitment to reducing e-waste is truly inspiring. Their team turned my old electronics into tools that are now helping others. Their creative solutions for e-recycling made the whole process enjoyable.",
    starRating: 5,
    customer: {
      name: "Ava G.",
      picture: "",
    },
  },
];

export async function Testimonials() {
  return (
    <section>
      <SectionHeading>Recommendations</SectionHeading>
      <div className="columns-1 [column-fill:_balance] sm:block sm:columns-2 lg:columns-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
