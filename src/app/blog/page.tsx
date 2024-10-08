import { Card } from "@nextui-org/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogDetails from "./[blogId]/page";

const Blog = () => {
  const allBlog = [
    {
      id: "1",
      title: "Environmental Impact in the USA",
      date: "02-04-2020",
      image: "https://i.ibb.co.com/r4Dfrz6/recycle-0-1549465291-0.jpg",
      firstSubtitle: "Toxic Components: ",
      firstSubtitleText:
        "In the U.S., improperly disposed electronics can release harmful substances like lead, mercury, and cadmium into the environment, contaminating soil and water. This poses significant risks to human health and local ecosystems, especially near landfills and informal recycling sites (EPA, 2021).",
      secondSubtitle: "Greenhouse Gas Emissions: ",
      secondSubtitleText:
        "The production and disposal of electronics contribute substantially to greenhouse gas emissions in the U.S. Recycling electronics helps mitigate these emissions by reducing the need for raw material extraction, a significant carbon emission source (EPA, 2021).",
    },
    {
      id: "2",
      title: "The E-Waste Crisis in the USA",
      date: "01-8-2022",

      image: "https://i.ibb.co.com/zZcdW70/Screenshot-2552.png",
      firstSubtitle: "Volume of E-Waste",
      firstSubtitleText:
        "The United States is one of the largest producers of e-waste globally, generating approximately 6.9 million metric tons in 2019. This makes up a significant portion of the global e-waste stream, and the volume continues to grow due to the rapid advancement of technology and consumer demand for new devices (EPA, 2021).",
      secondSubtitle: "Domestic Handling and Exportation",
      secondSubtitleText:
        "A large portion of e-waste in the U.S. is collected domestically, but significant quantities are still exported to developing countries, where it is often processed under unsafe conditions, leading to severe environmental pollution and health risks (Basel Action Network, 2020).",
    },
    {
      id: "3",
      title: "E-Recycling Processes in the USA",
      date: "06-04-2023",

      image: "https://i.ibb.co.com/VYqv85H/images-5.jpg",
      firstSubtitle: "Collection and Transportation:",
      firstSubtitleText:
        "The U.S. has established a network of certified e-recycling facilities. However, collection effectiveness varies by state, with some states like California and New York having robust programs while others lag. Efficient transportation and handling are crucial to prevent illegal exports and ensure e-waste is processed safely (Electronics Recycling Coordination Clearinghouse, 2020).",
      secondSubtitle: "Dismantling and Sorting",
      secondSubtitleText:
        "In U.S. recycling facilities, e-waste is dismantled to recover valuable components like metals, plastics, and glass. The process is regulated, focusing on safety and efficiency to maximize material recovery and minimize hazardous waste (R2 Certification Program, 2020).•	Material Recovery Advanced recovery methods are used in the U.S. to extract precious metals and other valuable materials from e-waste. Processes like shredding, magnetic separation, and chemical treatments are standard, and innovations continually improve recovery rates (EPA, 2021)",
    },
    {
      id: "4",
      title: "Economic and Social Benefits in the USA",
      date: "05-07-2023",

      image: "https://i.ibb.co.com/ZcWf5Sc/istockphoto-875074116-612x612.jpg",
      firstSubtitle: "Job Creation",
      firstSubtitleText:
        "The e-recycling industry in the U.S. supports thousands of jobs, from collection and transportation to processing and material recovery. These jobs are crucial in urban and rural areas, providing economic opportunities and promoting environmental sustainability (Institute of Scrap Recycling Industries, 2021).",
      secondSubtitle: "Resource Conservation",
      secondSubtitleText:
        "Recovering materials from e-waste reduces the need for mining, which has significant environmental impacts. In the U.S., this also contributes to reducing the carbon footprint of the manufacturing sector by supplying recycled materials at a lower cost (EPA, 2021).",
    },
    {
      id: "5",
      title: "Regulatory Frameworks in the USA",
      date: "15-07-2023",

      image: "https://i.ibb.co.com/KsvFYsT/regulatory-framework.jpg",
      firstSubtitle: "Federal vs. State Laws",
      firstSubtitleText:
        "The U.S. needs a comprehensive federal e-waste law, which currently results in a patchwork of state regulations. States like California, New York, and Washington have implemented extensive e-waste recycling programs, while others have minimal regulations (National Conference of State Legislatures, 2020).",
      secondSubtitle: "International Commitments",
      secondSubtitleText:
        "The U.S. is a signatory to the Basel Convention but has not ratified it. This affects the country’s ability to regulate the export of e-waste effectively, leading to ongoing challenges with illegal shipments to developing nations (Basel Action Network, 2020).",
    },
    {
      id: "6",
      title: "Future Trends and Innovations in the USA",
      date: "24-08-2023",

      image: "https://i.ibb.co.com/h8vpZwB/man-drawing-bulb-gears-1024x683.jpg",
      firstSubtitle: "Technological Advancements",
      firstSubtitleText:
        "The U.S. is at the forefront of developing new technologies for e-waste recycling, including AI-driven sorting systems and robotic dismantling. These innovations aim to improve efficiency and reduce the cost of recycling (R2 Certification Program, 2020).",
      secondSubtitle: "Circular Economy",
      secondSubtitleText:
        "There is a growing movement in the U.S. towards a circular economy model, where products are designed with recycling and reuse in mind. This approach aims to reduce waste and promote sustainability in the manufacturing sector (Ellen MacArthur Foundation, 2021).",
    },
    {
      id: "7",
      title: "Challenges in E-Recycling in the USA",
      date: "01-09-2024",

      image:
        "https://i.ibb.co.com/X7q4kXT/2166-blog-accounting-finance-how-does-the-global-economy-work-s.png",
      firstSubtitle: "Illegal Exports",
      firstSubtitleText:
        "Despite efforts to regulate e-waste, a significant portion of U.S. e-waste is still illegally exported to countries with less stringent environmental controls. This issue is exacerbated by the need for a unified federal policy on e-waste (Basel Action Network, 2020).",
      secondSubtitle: "Consumer Awareness",
      secondSubtitleText:
        "Many U.S. consumers still need to learn how to properly dispose of their electronics, leading to e-waste ending up in landfills. Public education campaigns are essential to increase awareness and promote responsible e-waste disposal practices (EPA, 2021).",
    },
    {
      id: "8",
      title: "Global E-waste Distribution",
      date: "07-10-2024",

      image: "https://i.ibb.co.com/JtPv3Rb/Screenshot-2553.png",
      firstSubtitle: "Conclusion",
      firstSubtitleText:
        "E-recycling in the United States is a complex issue that requires a multi-faceted approach, including stronger regulations, better consumer education, and continued innovation in recycling technologies. As the volume of e-waste grows, the U.S. must lead in sustainable practices that protect the environment, conserve resources, and create economic opportunities.",
      secondSubtitle: "References",
      secondSubtitleText:
        "	EPA. (2021). Electronic Waste Management in the United States: EPA Report. Retrieved from EPA.gov.	Basel Action Network. (2020). Toxic Trade: U.S. E-Waste Export and Environmental Justice. Retrieved from BAN.org.	Electronics Recycling Coordination Clearinghouse. (2020). State E-Waste Laws and Programs in the U.S. Retrieved from ERCC.org.	Institute of Scrap Recycling Industries. (2021). Economic Impact of Recycling in the United States. Retrieved from ISRI.org.National Conference of State Legislatures. (2020). State E-Waste Legislation Overview. Retrieved from NCSL.org.	R2 Certification Program. (2020). Responsible Recycling (R2) Standards for Electronics Recyclers. Retrieved from SustainableElectronics.org",
    },
  ];

  return (
    <section className="relative z-[10] mx-auto max-w-6xl p-4">
      <h1 className="pb-6 pt-14 text-center text-2xl font-bold">
        Addressing the E-Waste Crisis in the USA: Environmental Impacts,
        Recycling Processes, and Future Innovations
      </h1>

      {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">


      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {allBlog?.map((blog) => (
          <div key={blog?.id}>
            <Link href={`blog/${blog?.id}`}>
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
      </div> */}

      <div>
        {/* full section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            The E-Waste Crisis in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">Volume of E-Waste :</span> The
              United States is one of the largest producers of e-waste globally,
              generating approximately 6.9 million metric tons in 2019. This
              makes up a significant portion of the global e-waste stream, and
              the volume continues to grow due to the rapid advancement of
              technology and consumer demand for new devices (EPA, 2021).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">
                Domestic Handling and Exportation
              </span>
              A large portion of e-waste in the U.S. is collected domestically,
              but significant quantities are still exported to developing
              countries, where it is often processed under unsafe conditions,
              leading to severe environmental pollution and health risks (Basel
              Action Network, 2020).
            </p>
          </div>

          <div className="mt-6">
            <Image
              className="mt-8 h-[46rem] w-full rounded-3xl object-cover object-center"
              src="https://i.ibb.co.com/zZcdW70/Screenshot-2552.png"
              alt={"blog image"}
              height={500}
              width={550}
            />
          </div>
        </div>
        {/* second  section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            Environmental Impact in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">Toxic Components :</span> In the
              U.S., improperly disposed electronics can release harmful
              substances like lead, mercury, and cadmium into the environment,
              contaminating soil and water. This poses significant risks to
              human health and local ecosystems, especially near landfills and
              informal recycling sites (EPA, 2021).
            </p>
          </div>
          <div className="mt-6">
            <Image
              className="mt-8 h-[46rem] w-full rounded-3xl object-cover object-center"
              src="https://i.ibb.co/MPvKYrX/Whats-App-Image-2024-09-15-at-19-43-18-55a279c4.jpg

"
              alt={"blog image"}
              height={400}
              width={450}
            />
          </div>

          {/* second div */}
          <div className="mt-4">
            <p className="text-[18px]">
              <span className="font-semibold">Greenhouse Gas Emissions:</span>
              The production and disposal of electronics contribute
              substantially to greenhouse gas emissions in the U.S. Recycling
              electronics helps mitigate these emissions by reducing the need
              for raw material extraction, a significant carbon emission source
              (EPA, 2021).
            </p>
          </div>
        </div>
        {/* third section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            E-Recycling Processes in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">
                Collection and Transportation:
              </span>{" "}
              The U.S. has established a network of certified e-recycling
              facilities. However, collection effectiveness varies by state,
              with some states like California and New York having robust
              programs while others lag. Efficient transportation and handling
              are crucial to prevent illegal exports and ensure e-waste is
              processed safely (Electronics Recycling Coordination
              Clearinghouse, 2020).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">Material Recovery:</span>Advanced
              recovery methods are used in the U.S. to extract precious metals
              and other valuable materials from e-waste. Processes like
              shredding, magnetic separation, and chemical treatments are
              standard, and innovations continually improve recovery rates (EPA,
              2021).
            </p>
          </div>
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">Dismantling and Sorting: </span>
              In U.S. recycling facilities, e-waste is dismantled to recover
              valuable components like metals, plastics, and glass. The process
              is regulated, focusing on safety and efficiency to maximize
              material recovery and minimize hazardous waste (R2 Certification
              Program, 2020).
            </p>
          </div>
          <div className="mt-6">
            <Image
              className="mt-8 h-[46rem] w-full rounded-3xl object-cover object-center"
              src="https://i.ibb.co/09zcLTD/Whats-App-Image-2024-09-15-at-19-43-00-5030866e.jpg



"
              alt={"blog image"}
              height={400}
              width={450}
            />
          </div>
        </div>
        {/* four section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            Economic and Social Benefits in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">Job Creation :</span> The
              e-recycling industry in the U.S. supports thousands of jobs, from
              collection and transportation to processing and material recovery.
              These jobs are crucial in urban and rural areas, providing
              economic opportunities and promoting environmental sustainability
              (Institute of Scrap Recycling Industries, 2021).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">Resource Conservation:</span>
              Recovering materials from e-waste reduces the need for mining,
              which has significant environmental impacts. In the U.S., this
              also contributes to reducing the carbon footprint of the
              manufacturing sector by supplying recycled materials at a lower
              cost (EPA, 2021).
            </p>
          </div>
        </div>
        {/* five section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            Regulatory Frameworks in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">Federal vs. State Laws::</span>{" "}
              The U.S. needs a comprehensive federal e-waste law, which
              currently results in a patchwork of state regulations. States like
              California, New York, and Washington have implemented extensive
              e-waste recycling programs, while others have minimal regulations
              (National Conference of State Legislatures, 2020).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">International Commitments:</span>
              The U.S. is a signatory to the Basel Convention but has not
              ratified it. This affects the country’s ability to regulate the
              export of e-waste effectively, leading to ongoing challenges with
              illegal shipments to developing nations (Basel Action Network,
              2020).
            </p>
          </div>
          <div className="mt-6">
            <Image
              className="mt-8 h-[46rem] w-full rounded-3xl object-cover object-center"
              src="https://i.ibb.co/Q9Mq4Bf/Whats-App-Image-2024-09-15-at-19-43-29-cbae61ab.jpg

"
              alt={"blog image"}
              height={400}
              width={450}
            />
          </div>
        </div>
        {/* six section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            Future Trends and Innovations in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">
                {" "}
                Technological Advancements: :
              </span>{" "}
              The U.S. is at the forefront of developing new technologies for
              e-waste recycling, including AI-driven sorting systems and robotic
              dismantling. These innovations aim to improve efficiency and
              reduce the cost of recycling (R2 Certification Program, 2020).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold"> Circular Economy</span>There is a
              growing movement in the U.S. towards a circular economy model,
              where products are designed with recycling and reuse in mind. This
              approach aims to reduce waste and promote sustainability in the
              manufacturing sector (Ellen MacArthur Foundation, 2021).
            </p>
          </div>
        </div>
        {/* seven section */}
        <div className="pt-4">
          <h3 className="pb-2 text-[20px] font-bold">
            Challenges in E-Recycling in the USA
          </h3>
          {/* first div */}
          <div className="pb-2">
            <p className="text-[18px]">
              <span className="font-semibold">Illegal Exports:</span> Despite
              efforts to regulate e-waste, a significant portion of U.S. e-waste
              is still illegally exported to countries with less stringent
              environmental controls. This issue is exacerbated by the need for
              a unified federal policy on e-waste (Basel Action Network, 2020).
            </p>
          </div>
          {/* second div */}
          <div>
            <p className="text-[18px]">
              <span className="font-semibold">Consumer Awareness:</span>Many
              U.S. consumers still need to learn how to properly dispose of
              their electronics, leading to e-waste ending up in landfills.
              Public education campaigns are essential to increase awareness and
              promote responsible e-waste disposal practices (EPA, 2021).
            </p>
          </div>
        </div>

        <div>
          <Image
            className="mt-8 h-[46rem] w-full rounded-3xl object-cover object-center"
            src="https://i.ibb.co.com/JtPv3Rb/Screenshot-2553.png"
            alt={"blog image"}
            height={500}
            width={550}
          />
        </div>
        <div className="mt-6">
          <p>
            <span className="font-semibold">Conclusion:</span>
            E-recycling in the United States is a complex issue that requires a
            multi-faceted approach, including stronger regulations, better
            consumer education, and continued innovation in recycling
            technologies. As the volume of e-waste grows, the U.S. must lead in
            sustainable practices that protect the environment, conserve
            resources, and create economic opportunities.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-bold">References: </h3>
          <p>
            1. EPA. (2021). Electronic Waste Management in the United States:
            EPA Report. Retrieved from EPA.gov.
          </p>
          <p>
            2. Basel Action Network. (2020). Toxic Trade: U.S. E-Waste Export
            and Environmental Justice. Retrieved from BAN.org.
          </p>
          <p>
            3. Electronics Recycling Coordination Clearinghouse. (2020). State
            E-Waste Laws and Programs in the U.S. Retrieved from ERCC.org.
          </p>
          <p>
            4. Institute of Scrap Recycling Industries. (2021). Economic Impact
            of Recycling in the United States. Retrieved from ISRI.org.
          </p>
          <p>
            5. National Conference of State Legislatures. (2020). State E-Waste
            Legislation Overview. Retrieved from NCSL.org.
          </p>
          <p>
            6. R2 Certification Program. (2020). Responsible Recycling (R2)
            Standards for Electronics Recyclers. Retrieved from
            SustainableElectronics.org.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
