import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import PopularProducts from "../components/PopularProducts";
import InstagramSection from "../components/InstagramSection";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Espresso Emporium - Try Something Premium</title>
      </Helmet>
      
      <Banner />
      <FeatureSection />
      <PopularProducts />
      <InstagramSection />
    </main>
  );
};

export default Home;