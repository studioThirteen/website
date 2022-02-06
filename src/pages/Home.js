import Header from "../components/Header";
import HeroNFTContent from "../components/HeroNFTContent";
import "../styles/Home.css";
import WomanCTA from "../components/WomanCTA";
import SkullsComingSoon from "../components/SkullsComingSoon";
import OurTeam from "../components/OurTeam";
import SkullsBanner from "../components/SkullsBanner";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div id="home">
      <Header />
      <HeroNFTContent />
      <WomanCTA />
      <SkullsComingSoon />
      <OurTeam />
      <SkullsBanner />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
