
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";

const Home = () => {
    const cards = useLoaderData()
    console.log(cards);
    return (
        <div>
            <Banner ></Banner>
        <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards.map(card => <Card card = {card} key={card.id}></Card>)
            }
        </div>
        </div>
    );
};

export default Home;