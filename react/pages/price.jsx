import React from "react";
import Prices from "../src/components/prices";

const Price = () => {
  return (
    <div className="bg-landing-bg text-white pt-[75px]">
      <p className="text-center text-[35px] font-convergence font-bold uppercase pb-10">Prices</p>
      <div className=" flex justify-evenly">
        <Prices
          title="Individual Rate"
          dailyPrice="10,000 FRW"
          monthlyPrice="120,000 FRW"
          threemonthPrice="300,000 FRW"
          sixmonthPrice="550,000 FRW"
          annualPrice="1,000,000,000 FRW"
        />
        <Prices
          title="Family Package Rate"
          dailyPrice="15,000 FRW"
          monthlyPrice="200,000 FRW"
          threemonthPrice="500,000 FRW"
          sixmonthPrice="1,000,000 FRW"
          annualPrice="1,500,000,000 FRW"
        />
        <Prices
          title="Corporate Rate +5"
          dailyPrice="8,000 FRW"
          monthlyPrice="80,000 FRW"
          threemonthPrice="240,000 FRW"
          sixmonthPrice="480,000 FRW"
          annualPrice="800,000 FRW"
        />
      </div>
    </div>
  );
};

export default Price;
