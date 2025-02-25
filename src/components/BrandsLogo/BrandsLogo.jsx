import React from "react";
import Brand1 from "../../assets/brands/1NN.svg";
import Brand2 from "../../assets/brands/2NN.svg";
import Brand3 from "../../assets/brands/3NN.svg";
import Brand4 from "../../assets/brands/4NN.svg";
import Brand5 from "../../assets/brands/5NN.svg";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0">
        <h1 className="text-center text-lg lg:text-xl font-semibold  mt-5">Powering Next-gen companies</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} alt="" className="lg:w-[150px] h-[auto] md:[120px] w-[100px]"/>
          <img src={Brand2} alt="" className="lg:w-[150px] h-[auto] md:[120px] w-[100px]"/>
          <img src={Brand3} alt="" className="lg:w-[150px] h-[auto] md:[120px] w-[100px]"/>
          <img src={Brand4} alt="" className="lg:w-[150px] h-[auto] md:[120px] w-[100px]"/>
          <img src={Brand5} alt="" className="lg:w-[150px] h-[auto] md:[120px] w-[100px]"/>
        </div> 
      </div>
    </>
  );
};

export default BrandsLogo;
