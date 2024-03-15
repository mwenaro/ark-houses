import { Img, MyDiv, Typography } from "@/components";
import { ElementProps } from "@/types/core";
import { twMerge } from "tailwind-merge";

type Props = ElementProps & {
  imgSrc?: string;
  heading?: string;
  subHeading?: string;
  rowReverse?: boolean;
  cardStyles?: string;
};
export default function SectionTemplate({
  className = "",
  children,
  imgSrc = "",
  heading = "",
  subHeading = "",
  rowReverse = false,
  cardStyles = "",
}: Props) {
  return (
    <MyDiv
      className={twMerge(
        `flex flex-col justify-center items-center py-3 ${
          rowReverse ? "md:flex-row-reverse" : "md:flex-row"
        } min-h-screen mb-20`,
        className
      )}
    >
      {typeof children !== "undefined" ? (
        children
      ) : (
        <>
          <div className="w-full md:w-1/2 flex flex-col gap-2 ">
            {/* Title */}
            <Typography
              variant="h2"
              className="md:text-center text-4xl md:text-6xl font-semi"
            >
              {heading}
            </Typography>
            {/* sub title */}
            <Typography
              variant="p"
              className="md:text-center text-lg md:text-xl font-normal"
            >
              {subHeading}
            </Typography>
          </div>

          {/* Image Section */}

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-slate-100">
            <div className={twMerge("m-5 px-5  shadow-2xl rounded-3xl", cardStyles)}>
              <Img src={imgSrc} alt="" className="w-full md:w-3/5 mx-auto " />
            </div>
          </div>
        </>
      )}
    </MyDiv>
  );
}
