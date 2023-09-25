import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useLoaderData } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";


const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    // in total
    const totalDonate = data.reduce(
      (previous, current) => previous + current.donate,
      0
    );
    setTotal(totalDonate);
  }, [data]);
  console.log(total);
  const inPercent = total/100
  console.log(inPercent);

  // local storage total
  const [donation, setDonation] = useState([]);
  const [totalDonate, setTotalDonate] = useState(0);


  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    if (donateItems) {
      setDonation(donateItems);
      console.log(donateItems);
      
      const totalDonate = donateItems.reduce(
        (previous, current) => previous + current.donate,
        0
      );
      setTotalDonate(totalDonate);
    }
  }, []);
console.log(totalDonate);
  return (
    <div>
      
      <div className="pl-7">
      <h1>total donate : {total }</h1>
      <h1>total donate from local storage : {totalDonate}</h1>
      </div>
      <PieChart
        className="max-w-xl mx-auto"
        data={[
          { title: "One", value:  totalDonate , color: "#E38627" },
          { title: "Two", value:  total , color: "#C13C37" },
        ]}
      />
      ;
    </div>
  );
};

export default Statistics;
