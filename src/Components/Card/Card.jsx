import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  console.log(card);
  const { id, image,  category_name, title ,card_background,title_background,text_color} = card;
  return (
    <Link to={`/details/${id}`}>
     
      <div style={{backgroundColor:card_background}} className=" h-[360px]  mt-12 rounded-lg space-y-4  p-3 lg:p-5 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-lg h-[220px]" src={image} alt="Shoes" />

        </figure>
        <div   >
          
          <button style={{backgroundColor:title_background, color : text_color}} className="px-2 text-xl font-bold mt-3">{title}</button>
          <p  style={{ color: text_color }} className="text-xl font-semibold" > {category_name}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
