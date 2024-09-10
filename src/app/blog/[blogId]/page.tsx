import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <section className="container mx-auto max-w-7xl pt-8">
      <Image
        className="mt-8 h-[26rem] w-full rounded-3xl object-cover object-center"
        height={500}
        width={500}
        src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxjb2Rpbmd8ZW58MHwwfDB8fHww"
        alt=""
      />
      <div className="border-border/25 relative rounded-3xl border bg-background p-10">
        <h2 className="text-pretty pb-2 text-3xl font-medium capitalize leading-[1.4] tracking-tight">
          The Art Of Artificial Magic Lorem ipsum dolor sit amet consectetur
        </h2>
        <time className="block pb-8">05 June 2024</time>
        <div className="space-y-6 text-pretty leading-loose text-foreground/80">
          <p>
            If you’ve ever read a blog post, you’ve consumed content from a
            thought leader that is an expert in their industry. Chances are if
            the blog post was written effectively, you came away with helpful
            knowledge and a positive opinion about the writer or brand that
            produced the content.Anyone can connect with their audience through
            blogging and enjoy the myriad benefits that blogging provides:
            organic traffic from search engines, promotional content for social
            media, and recognition from a new audience you haven’t tapped into
            yet.A blog post is any article, news piece, or guide thats published
            in the blog
          </p>
          <p>
            section of a website. A blog post typically covers a specific topic
            or query, is educational in nature, ranges from 600 to 2,000+ words,
            and contains other media types such as images, videos, infographics,
            and interactive charts. If you’ve ever read a blog post, you’ve
            consumed content from a thought leader that is an expert in their
            industry. Chances are if the blog post was written effectively, you
            came away with helpful knowledge and a positive opinion about the
            writer or brand that produced the content.Anyone can connect with
            their audience through blogging and enjoy the myriad benefits that
            blogging provides: organic traffic from search engines, promotional
            content for social media, and recognition from a new audience you
            haven’t tapped into yet.A blog post is any article, news piece, or
            guide thats published in the blog section of a website. A blog post
            typically covers a specific topic or query, is educational in
            nature, ranges from 600 to 2,000+ words, and contains other media
            types such as images, videos, infographics, and interactive charts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
