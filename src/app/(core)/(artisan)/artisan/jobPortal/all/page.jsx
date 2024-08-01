import Image from "next/image"; // Adjust the import based on your setup
import { User } from "lucide-react"; // Adjust the import based on your setup
import Link from "next/link";

const jobData = [
  {
    id: 1,
    title: "Pay supplier invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster than ever.",
    imageSrc: "/districtArtisanImage1.png",
  },
  {
    id: 2,
    title: "Manage customer orders",
    description:
      "Ensure timely delivery and manage customer expectations effectively.",
    imageSrc: "/districtArtisanImage2.png",
  },
  {
    id: 3,
    title: "Track inventory",
    description:
      "Keep track of inventory levels and manage restocking efficiently.",
    imageSrc: "/districtArtisanImage3.png",
  },
  {
    id: 4,
    title: "Analyze sales data",
    description: "Gain insights from sales data to drive business growth.",
    imageSrc: "/districtArtisanImage4.png",
  },

  // Add more jobs as needed
];

const Feature6 = () => (
  <main>
    <center className="w-full h-fit py-5 text-gray-900">
      <div className="flex flex-col gap-10 mb-4">
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
            Jobs For You!
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
            Managing a small business today is already tough.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {jobData.map((job, index) => (
          <div
            key={job.id}
            className={`bg-muted rounded-md p-6 aspect-square lg:h-[50vh] lg:aspect-auto flex justify-between flex-col relative ${
              index % 4 === 3 || index % 4 === 0 ? "lg:col-span-2 " : ""
            }`}
          >
            <Link
              href="/artisan/jobPortal/Workshop"
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0"
            >
              <Image
                src={job.imageSrc}
                fill={true}
                className="object-cover mix-blend-overlay -z-10 rounded-md"
              />
            </Link>
            <User className="w-8 h-8 z-10" fill="white" color="white" />
            <div className="flex flex-col z-10">
              <h3 className="text-2xl tracking-tight text-white font-bold mb-2">
                {job.title}
              </h3>
              <p className=" max-w-xs font-light text-base text-slate-200">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </center>
  </main>
);

export default Feature6;
