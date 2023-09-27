
import { useEffect, useState } from "react";

import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noData,setNoData]= useState(false)
    const [showAll , setShowAll] = useState(false)


    // localStorage 
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        if(donateItems){
            setDonation(donateItems)
        }
        else {
            setNoData('Nothing')
        }
    },[])

    

    const toggleShowAll = () => {
     
          setShowAll(true);
      
      };



    return (
        <div>
            {
                noData ? <p>{noData}</p> : 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {showAll
                  ? donation.map((donate) => (
                      <DonationDetails card={donate} key={donate.id}></DonationDetails>
                    ))
                  : donation.slice(0, 4).map((donate) => (
                      <DonationDetails card={donate} key={donate.id}></DonationDetails>
                    ))}
                {donation.length > 4 && !showAll && (
                  <button className="btn btn-accent" onClick={toggleShowAll}>Show All</button>
                )}
              </div>
            }
            
        </div>
    );
};

export default Donation;