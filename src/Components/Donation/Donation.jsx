
import { useEffect, useState } from "react";

import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noData,setNoData]= useState(false)
    const [isShow , setShow] = useState(false)
    

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

    


    return (
        <div>
            {
                noData ? <p>{noData}</p> : 
                <div className="grid grid-cols-2 gap-8">
                    {
                        isShow ? 
                        
                        donation.map(donate => <DonationDetails card={donate} key={donate.id}></DonationDetails> )
                        : 
                        donation.slice(0,4).map(donate => <DonationDetails card={donate} key={donate.id}></DonationDetails> )
                    }
                </div>
            }
            <div className="flex justify-center items-center">
            <button className="btn btn-secondary mt-4" onClick={()=> setShow(!isShow)}>see more</button>
            </div>
        </div>
    );
};

export default Donation;