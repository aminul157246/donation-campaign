import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationDetails = ({ card }) => {
  const { id, image,donate, category_name, title ,card_background,title_background,text_color} = card;

  return (
    <div style={{backgroundColor: card_background}} className="flex-row py-5 px-5 md:flex gap-6   bg-base-100 shadow-xl">
      <div >
        <figure>
          <img className="lg:w-[200px] lg:h-[180px]" src={card.image} alt="Shoes" />
        </figure>
        </div>
        <div className="mt-4">
          <h2 style={{backgroundColor:title_background,color: text_color}} className="text-xl font-semibold text-center">{card.title}</h2>
          <p style={{color: text_color}} className=" mt-3 text-2xl font-bold"> {card.category_name}</p>
          <p style={{color:text_color, fontWeight:'700'}}>${donate}</p>
          <Link to={`/viewDetails/${id}`}>
            <button style={{backgroundColor:text_color, border: 'none'}} className=" mt-4 btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
   
  );
};
DonationDetails.propTypes = {
    card: PropTypes.object,
}
export default DonationDetails;
