
import { PieChart } from "react-minimal-pie-chart";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();

  // local storage total
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    if (donateItems) {
      setDonation(donateItems);
    }
  }, []);
  const divide = donation.length / data.length;
  const percentLocal = divide * 100;
  const percentTotal = 100 - percentLocal;

  return (
    <div>
      <h2 className="mt-24 font-bold text-center text-[#C13C37]">Total Donate : {percentTotal}%</h2>
      <h2 className=" mb-12  font-bold text-center text-[#E38627]">My Donate : {percentLocal}%</h2>
    <PieChart
    
      className="max-w-xs mx-auto h-[300px] "
      data={[
        { title: "Total", value: percentLocal, color: "#E38627" },
        { title: "localTotal", value: percentTotal, color: "#C13C37" },
      ]}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
    >
      
    </PieChart>
    </div>
  );
};

export default Statistics;
