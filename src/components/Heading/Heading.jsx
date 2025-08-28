import React from "react";


const Heading = (props) => {
  return (
    <div className="mx-auto w-fit  ">
      <h2 className="text-[2.5rem] md:text-5xl font-bold">
        <span className="text-orange-500">{props.highlight}</span> {props.heading}
      </h2>

      <div className="w-34 md:mt-4 mt-2 ml-auto h-1 bg-orange-500 "></div>
    </div>
  );
};

export default Heading;



