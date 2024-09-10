import Image from "next/image";
import React from "react";
const allManagement = [
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "Asif Shamim",
    position: "founder",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto my-24 px-6">
        <section className="mb-32 text-center lg:text-left">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              height: "500px",
            }}
          ></div>

          <div>
            <section className="m-4 dark:bg-gray-100 dark:text-gray-800 md:m-8">
              <div className="container mx-auto my-6 space-y-1 p-4 text-center">
                <h2 className="pb-3 text-3xl font-bold md:text-4xl">
                  Create a stylish website in minutes
                </h2>
                <p>
                  Get a jumpstart to creating your new webpage! With our fully
                  responsive and carefully styled components you can get the
                  structure of your website done with just a couple of clicks.
                </p>
              </div>
              <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col px-8 py-6">
                  <h2 className="title-font mb-2 text-lg font-semibold dark:text-gray-800 sm:text-xl">
                    Components
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Individual components that can be re-used multiple times in
                    your designs.
                  </p>
                  <a
                    className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
                    href="/components"
                  ></a>
                </div>
                <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                  <h2 className="title-font mb-2 text-lg font-semibold dark:text-gray-800 sm:text-xl">
                    Sections
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Pre-made building blocks that you can stack on top of each
                    other like Legos to build a website of your own in minutes.
                  </p>
                </div>
                <div className="flex flex-col px-8 py-6">
                  <h2 className="title-font mb-2 text-lg font-semibold dark:text-gray-800 sm:text-xl">
                    Templates
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Full pages that showcase pieces of what you can achieve with
                    the building blocks that are in this UI kit.
                  </p>
                  <a
                    className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
                    href="/templates"
                  ></a>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-24">
            <div className="pb-8">
              <h1 className="pb-2 text-3xl font-bold text-primary">
                Meet Our Team
              </h1>
              <p>We makes us as a family who has lot of dedication.</p>
            </div>

            <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
              {allManagement?.map((management) => (
                <div key={management?.id}>
                  <Image
                    src={management?.image}
                    alt=""
                    width={370}
                    height={420}
                    className="rounded-md filter duration-300"
                  />
                  <div className="mt-2 w-80 rounded-md border-primary pb-4 pl-4 pt-4">
                    <h2 className="text-[20px] font-bold">
                      {management?.name}
                    </h2>
                    <h4>{management?.position}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mt-14 flex flex-col items-center gap-4 p-4 lg:flex-row">
          <div className="border-l-2 px-6 py-10 shadow-xl shadow-[#67a1d1]">
            <h1 className="pb-4 text-2xl font-bold">Our Goal</h1>
            <p>
              Our goal is to deliver exceptional solutions tailored to your
              needs, ensuring success through innovation and dedicated support.
              We are committed to understanding your unique challenges and
              exceeding your expectations, driving growth and long-term success
              for your business.
            </p>
          </div>
          <div className="border-l-2 px-6 py-10 shadow-xl shadow-[#67a1d1]">
            <h1 className="pb-4 text-2xl font-bold">Our Mission</h1>
            <p>
              Our mission is to empower your business with innovative, tailored
              IT solutions that drive efficiency and growth. We are dedicated to
              providing exceptional service and support, ensuring your success
              through every challenge and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
