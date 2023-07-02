import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import PopularMember from "../PopularMember/PopularMember";

const Home = () => {
    return (
        <div className="">
         <Hero/>
         <PopularMember/>
         <Features/>
        </div>
    );
};

export default Home;