
import { useEffect, useState } from "react";

import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noData,setNoData]= useState(false)
    const [isShow , setShow] = useState(false)
//    const  setShow = ()=>{
//     if(donation.length>4){
        
//     }
//    }
    

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
            <div className="flex justify-center items-center my-12  ">
            <button style={{backgroundColor: "pink", padding:'8px', fontSize:'24px' , fontWeight:'700', borderRadius : '10px'}} className={isShow ? 'hidden' : ""} onClick={()=> setShow(!isShow)}>See More</button>
            </div>
        </div>
    );
};

export default Donation;