import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import LatestMemberSlider from "../LatestMemberSlider/LatestMemberSlider";
import PopularMember from "../PopularMember/PopularMember";
import SubscribToday from "../SubcribeToday/SubscribToday";

const Home = () => {
    return (
        <div className="">
         <Hero/>
         <PopularMember/>
         <Features/>
         <SubscribToday/>
         <LatestMemberSlider/>
        </div>
    );
};

export default Home;