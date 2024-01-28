import { React } from "react";
import giclogo from "../assets/giclogo.png";

const Banner = ({ header }) => {
  return (
    <div className="banner bg-gradient-to-l from-[#010197] to-[#00005d] w-full">
      <p
        style={{
          color: "white",
          fontSize: "25px",
          padding: "0px 0px 0px 20px",
          fontWeight: "bold",
        }}
      >
        {header}
      </p>
    </div>
  );
};

export default Banner;
