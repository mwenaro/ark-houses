import { Img, MyDiv, Typography } from "@/components";
import { ElementProps } from "@/types/core";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = ElementProps & {};
export default function HeroSection({ className = "", children }: Props) {
  return (
    <MyDiv
      className={twMerge(
        `flex flex-col justify-center md:flex-row h-screen my-20`,
        className
      )}
    >
      <div className="w-full  flex flex-col   md:w-1/2 gap-5 text-center">
        {/* Title */}
        <Typography
          variant="h1"
          className="text-5xl md:text-6xl font-medim mb-2 md:py-6"
        >
          Organise Orders on WhatsApp
        </Typography>
        {/* sub title */}
        <Typography variant="p" className="text-lg md:text-xl font-normal mb-2">
          Without messaging manually. <br />
          Start receiving orders ready for fulfillment.
        </Typography>

        {/* CTA Buttons */}

        <div className="w-full flex flex-col md:flex-row md:gap-3 my-5 justify-center items-center">
          {/* primary button */}
          <Link href="/auth/signup">
            <button className="w-fit px-6 py-3  rounded-xl bg-product-blue  hover:bg-black text-white  mb-1 text-lg md:text-xl font-semi">
              Get Started for Free
            </button>
          </Link>

          {/* secondary button */}
          <Link href="/auth/login">
            <button className="w-fit px-10 py-3  rounded-xl  text-[#000]   text-lg font-semibold hover:text-white hover:bg-slate-800">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Banner Section */}

      <div className="w-full md:w-1/2 pt-5">
        <Img
          src="/vendors/vendor/hero_default_img.png"
          alt=""
          className="w-full md:w-11/12 mx-auto "
          priority={true}
        />
      </div>
    </MyDiv>
  );
}
