import { Img, MyDiv, Typography } from "@/components";
import { ElementProps } from "@/types/core";
import { twMerge } from "tailwind-merge";

type Props = ElementProps & {};
export default function SaveTime({ className = "", children }: Props) {
  return (
    <MyDiv
      className={twMerge(
        `flex flex-col justify-center py-3 md:flex-row`,
        className
      )}
    >
      <div className="w-full md:w-1/2 flex flex-col gap-2 ">
        {/* Title */}
        <Typography variant="h2" className="md:text-center text-4xl md:text-6xl font-semi">Save Time With WhatsApp Order Form</Typography>
        {/* sub title */}
        <Typography variant="p"  className="md:text-center text-lg md:text-xl font-normal">
        Let customers choose items and date before sending message.
        </Typography>

        
      </div>

      {/* Image Section */}

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-11/12 mx-auto p-5 shadow-3xl">
       <video src="/vendors/vendor/whatsapp.mp4" loop={true} autoPlay={true} muted={true} playsInline={true} className="w-full" />
       </div>
      </div>
    </MyDiv>
  );
}
