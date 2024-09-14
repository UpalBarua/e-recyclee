import { Card } from "@nextui-org/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const allBlog = [
    {
      id: 1,
      title: "The Ripple Effect of Small Donations",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Small donations, though seemingly modest, have the power to create widespread positive impact. This blog highlights real-life examples of how small contributions have led to large-scale change. Through collaborative giving, we can tackle major issues one step at a time, emphasizing that every donation counts toward building a better future.",
      date: "04-08-2024",
    },
    {
      id: 2,
      title: "How Technology Donations Are Bridging the Digital Divide",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Technology has become a vital tool for learning and work, yet many communities lack access to it. This blog explores how donations of refurbished laptops and gadgets are helping bridge the digital divide, providing critical opportunities for education and employment in underprivileged areas.",
      date: "05-08-2024",
    },
    {
      id: 3,
      title: " The Power of Reusing Tech",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Donating used electronics not only helps individuals but also benefits the planet. By contributing to a circular economy, donors extend the lifespan of technology, reducing waste and fostering sustainability. This blog discusses how reuse helps communities and the environment simultaneously.",
      date: "06-08-2024",
    },
    {
      id: 4,
      title: "Why Giving Back Strengthens Communities",
      image:
        "https://i.ibb.co.com/mJftbbR/shubham-sharan-Z-fq3w-BVf-MU-unsplash.jpg",
      text: "Communities flourish when members actively support one another. This blog highlights how donations, big or small, help create resilient, unified communities. It showcases examples of communities that have been strengthened through local giving initiatives, fostering a culture of mutual support and progress.",
      date: "07-08-2024",
    },
    {
      id: 5,
      title: "The Role of Corporate Donations in Shaping a Better Future",
      image:
        "https://images.unsplash.com/photo-1573496267526-08a69e46a409?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Corporate giving has the potential to drive large-scale social impact. This blog explores how businesses are stepping up to fund social and environmental initiatives, emphasizing the mutual benefits for both the organizations and the communities they serve. Learn how corporate donations are helping to shape a better world.",
      date: "08-08-2024",
    },
    {
      id: 6,
      title: "Education Empowerment: How Donations Can Change a Child's Future",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Donating school supplies, books, or technology can have a lasting impact on a child's future. This blog focuses on how contributions to education improve lives, breaking the cycle of poverty and empowering the next generation. It shares inspiring stories of children whose lives have been transformed through educational donations.",
      date: "09-08-2024",
    },
    {
      id: 7,
      title:
        "The Global Impact of E-Waste Donations: Turning Trash into Opportunity",
      image:
        "https://i.ibb.co.com/4N27zc3/markus-spiske-Ru-RYRsw-YDkk-unsplash.jpg",
      text: "E-waste is a growing problem, but donating used electronics can turn trash into opportunity. This blog explores the global implications of e-waste and how donations of electronic devices are helping to reduce waste, empower communities, and fuel innovation. Learn how your old gadgets can create positive change worldwide.",
      date: "10-08-2024",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      <h1 className="pb-6 pt-8 text-2xl font-bold">Read Your Blog :</h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {allBlog?.map((blog) => (
          <div key={blog?.id}>
            <Link href={`blog/${blog.id}`}>
              <Card
                classNames={{
                  base: "group border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
                }}
              >
                <Image
                  className="border-border/25 max-h-[14rem] w-full rounded-[inherit] rounded-bl-none rounded-br-none border-b object-cover object-center"
                  src={blog?.image}
                  alt={"blog image"}
                  height={400}
                  width={250}
                />
                <div className="space-y-2 px-5 py-6">
                  <div className="flex items-center gap-x-2 pb-2 text-sm text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    {/* <span>{format(new Date(date), "dd LLL y")}</span> */}
                    <span>{blog?.date}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">
                    {blog?.title}
                  </h3>
                  <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
                    In today’s fast-paced world, technology is an inseparable
                    part of our lives.…
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
