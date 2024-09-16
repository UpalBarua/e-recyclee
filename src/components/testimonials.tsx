import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    id: "0",
    comment:
      "Thrivenvision revolutionised my organisation! We were thrust into the limelight by their inventive branding tactics. They embody our success from logo design to social media campaigns; they are the secret ingredient.",
    starRating: 5,
    customer: {
      name: "Donald T Clark",
      picture: "/images/testimonials/donald-t-clark.webp",
    },
  },
  {
    id: "1",
    comment:
      "Working with thrivenvision changed everything. The inventiveness of their group is unbounded. Their attention to detail is unparalleled, and our website revamp was perfect.",
    starRating: 5,
    customer: {
      name: "Daniel R Wagner",
      picture: "/images/testimonials/daniel-r-wagner.webp",
    },
  },
  {
    id: "2",
    comment:
      "Thrivenvision successfully materialised our vision. Their expertise in UX/UI and content strategy contributed to the app's user-friendliness and increased engagement. Strongly recommend them!",
    starRating: 5,
    customer: {
      name: "Cynthia M Hanlon",
      picture: "/images/testimonials/cynthia-m-hanlon.webp",
    },
  },
  {
    id: "3",
    comment:
      "The dedication of Thrivenvision is praiseworthy. As a result of the redesign of our e-commerce website, sales increased dramatically. Additionally, their consumer service is exceptional.",
    starRating: 5,
    customer: {
      name: "David L.",
      picture: "",
    },
  },
  {
    id: "4",
    comment:
      "Indeed, thrivenvision's branding alchemy works! Customers are now attuned to our brand identity. Their group is innovative, prompt, and a delight to collaborate with.",
    starRating: 5,
    customer: {
      name: "Chad E Cote",
      picture: "/images/testimonials/chad-e-cote.webp",
    },
  },
  {
    id: "5",
    comment:
      "With Thrivenvision's SEO knowledge, our ranks skyrocketed. Their keyword magic caused an explosion in our organic traffic. Strongly suggest it!",
    starRating: 5,
    customer: {
      name: "Evelyn L Vrabel",
      picture: "/images/testimonials/evelyn-l-vrabel.webp",
    },
  },
  {
    id: "6",
    comment:
      "What an incredible team Thrivenvision is! Their work on our website was revolutionary; it is now modern and easy to navigate. Their meticulousness is second to none.",
    starRating: 5,
    customer: {
      name: "Joseph M Williams",
      picture: "",
    },
  },
  {
    id: "7",
    comment:
      "With Thrivenvision's help, our brand's visibility increased. We get a lot of clicks from their email marketing and blog articles. And they're really quick!",
    starRating: 5,
    customer: {
      name: "Kristin S Reed",
      picture: "",
    },
  },
  {
    id: "8",
    comment:
      "The imagination of Thrivenvision is limitless. Their video production crew elevated our product introduction to the level of a Hollywood film. Forever indebted, we are!",
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
