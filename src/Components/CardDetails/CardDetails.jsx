import { useEffect, useState } from "react";
import {   useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();
  console.log(id);

  const details = useLoaderData();
  console.log(details);




  useEffect(() => {
    const findDetails = details.find((phone) => phone.id == id);
    setDetail(findDetails);
  }, [id, details]);
  console.log(detail);



  // add to donation
  const handleDonation = () => {
    const addedDonation = [];
    const donateItems = JSON.parse(localStorage.getItem("donate"));

    if (!donateItems) {
      addedDonation.push(detail);
      localStorage.setItem("donate", JSON.stringify(addedDonation));
      swal("👍 !", "Added successfully!", "success");



    } else {
      const isExist = donateItems.find((donate) => donate.id == id);


      if (!isExist) {
        addedDonation.push(...donateItems, detail);
        localStorage.setItem("donate", JSON.stringify(addedDonation));
        swal("👍 !", "Added successfully!", "success");

      }
      
      else{
        swal("Oops!", "Don't add duplicate!", "error");
      }
    }
  };

  return (
    <div>
      <div className="lg:relative ">
        <img className="lg:max-w-4xl mx-auto py-5 lg:h-[500px] " src={detail.image} alt="" />
        <div style={{
    background: '#0b0b0b',
    opacity: '0.5'
    
}} className="lg:px-[385px] py-7 lg:absolute top-[405px] ">
        <button style={{backgroundColor: detail.text_color, opacity: '.9' }} onClick={handleDonation} className=" text-white  font-bold  px-3 py-2">
          Donate : {detail.donate}$
        </button>
        </div>
      </div>
      
      <p className="text-2xl font-bold px-4 mt-3">{detail.title}</p>
      <p className="px-4">{detail.description}</p>
       
        
     
    </div>
  );
};

export default CardDetails;
