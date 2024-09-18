import Image from "next/image";
import React from "react";
import Link from "next/link";
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
    <section className="relative z-10">
      <div className="container mx-auto my-14 px-6">
        <section className="mb-32 text-center lg:text-left">
          <div
            className="relative overflow-hidden rounded-md bg-cover bg-no-repeat"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                "url('https://i.ibb.co.com/s9kKkC2/tr71823-ewaste-au.webp')",
              height: "600px",
            }}
          ></div>

          <div>
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
              <div className="container mx-auto my-6 space-y-1 p-4 text-center">
                <h2 className="pb-3 text-3xl font-bold md:text-4xl">
                  The Transformative Impact of Generous Donations
                </h2>
                <p>
                  Exploring How Contributions Drive Relief, Promote
                  Sustainability, and Build Stronger Communities
                </p>
              </div>
              <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col px-8 py-6">
                  <h2 className="title-font mb-2 text-lg font-semibold sm:text-xl dark:text-gray-800">
                    Relief
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Donations provide crucial support and assistance to those in
                    need, enhancing their well-being.
                  </p>
                  <a
                    className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
                    href="/components"
                  ></a>
                </div>
                <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                  <h2 className="title-font mb-2 text-lg font-semibold sm:text-xl dark:text-gray-800">
                    Sustainability
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Donations help reduce waste and promote recycling,
                    contributing to a more eco-friendly future.
                  </p>
                </div>
                <div className="flex flex-col px-8 py-6">
                  <h2 className="title-font mb-2 text-lg font-semibold sm:text-xl dark:text-gray-800">
                    Unity
                  </h2>
                  <p className="mb-4 flex-1 text-base leading-relaxed dark:text-gray-600">
                    Donations strengthen community bonds by encouraging
                    collective action and mutual support.
                  </p>
                  <a
                    className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
                    href="/templates"
                  ></a>
                </div>
              </div>
            </section>
          </div>

          <section className="!col-[1/-1] grid grid-cols-1 items-center justify-items-center pt-8 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-y-6 px-6 py-10 text-center sm:px-10 lg:items-start lg:py-0 lg:text-start">
              <div>
                <h1 className="font-meidum text-pretty text-[clamp(2rem,_6.5vw+0.5rem,_3.5rem)] capitalize leading-tight tracking-tight">
                  Meet MD Saifur Rahman The Founder Of E-Recylee
                </h1>
              </div>
              <div>
                <p className="max-w-[35rem] text-pretty text-lg leading-relaxed text-foreground-600">
                  A brief intro to grab attention, stating who the founder is
                  and their role. Md Saifur is the heart and soul behind
                  e-recylee, bringing years of experience and passion for this
                  platform.
                </p>
              </div>
              <div></div>
            </div>
            <div>
              <Image
                src="/images/founder.jpg"
                alt="Hero Illustration"
                height="600"
                width="600"
                className="h-full w-full rounded-md object-cover object-center lg:max-h-[90vh]"
              />
            </div>
          </section>
        </section>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mt-14 flex flex-col items-center gap-4 p-4 lg:flex-row">
          <div className="border-l-2 px-6 py-10 shadow-xl shadow-[#67a1d1]">
            <h1 className="pb-4 text-2xl font-bold">Our Mission</h1>
            <p>
              Our mission is to transform e-waste into an opportunity for
              positive change. By giving discarded electronics a second life, we
              aim to reduce environmental harm and contribute to a more
              sustainable future. We believe that every gadget has the potential
              to serve beyond its initial purpose.
            </p>
          </div>
          <div className="border-l-2 px-6 py-10 shadow-xl shadow-[#67a1d1]">
            <h1 className="pb-4 text-2xl font-bold">Our Vision</h1>
            <p>
              Our vision is to create a world where technology and
              sustainability coexist harmoniously. We envision a future where
              e-waste is no longer a growing problem but a valuable resource
              that fuels innovation and positive environmental impact. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
