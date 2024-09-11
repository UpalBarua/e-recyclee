import { Card } from "@nextui-org/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const allBlog = [
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
    },
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
    },
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
    },
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
    },
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
    },
    {
      id: 1,
      title: "Donate for people",
      image:
        "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "In a world where challenges often seem overwhelming, donations stand as a beacon of hope and change. Whether it’s a small contribution to a local charity or a substantial gift to an international cause, every act of giving has the potential to create profound and lasting impact. This blog explores the significance of donations, how they transform lives, and ways you can contribute to making a difference.Donations are the lifeblood of countless organizations and initiatives that work tirelessly to address pressing social issues. They fuel programs that provide essential services, support vulnerable populations, and drive advancements in critical areas such as healthcare, education, and environmental conservation.",
      date: "04-08-2024",
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
