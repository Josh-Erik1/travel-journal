import React from "react";
import icon from "../assets/icon.png";

const Card = (props) => {
  console.log(props.item);
  return (
    <div className="flex items-center justify-center bg-slate-50">
      <div className="sm:max-w-[550px] md:max-w-[700px] w-[100%] p-[18px] border-b-slate-200 border-b-2 flex justify-center items-center  md:px-[80px] ">
        <img
          src={props.item.imageUrl}
          alt="Image"
          className="w-[125px] rounded-md h-[168px] justify-start mr-[20px]"
        />
        <div className="">
          <div className="flex items-center">
            <img src={icon} alt="" className="mr-2" />
            <p
              className="mr-10 uppercase text-xs  font-normal text-[#2B283A]
          "
            >
              {props.item.location}
            </p>
            <a href={props.item.googleMapsUrl}>
              <p className="underline text-xs text-[#918E9B] font-normal">
                View on Google Maps
              </p>
            </a>
          </div>
          <h1 className="text-2xl font-bold text-[#2B283A] mb-3 mt-1">
            {props.item.title}
          </h1>
          <p className=" font-bold font-inter mb-1 text-xs">{`${props.item.startDate} - ${props.item.endDate}`}</p>

          <p className="text-xs font-normal font-inter">
            {props.item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
