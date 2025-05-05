import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import BeginJourneySection from "../components/BeginJourney"
import { Box } from "@chakra-ui/react"
import FeaturedLogos from "../components/FeaturedLogos";
import GrowthSection from "../components/GrowthSection";
import AutoCarousel from "../components/AutoCarousel";
import MeditationCarousel from "../components/MeditationCarousel";
import DeviceSection from "../components/DeviceSection";
import GetStartedSection from "../components/GetStartedSection"
import "../App.css"
import NowAvailable from "../components/NowAvailabe";
import PressSection from "../components/PressSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import AdvancedPrograms from "../components/AdvancedPrograms";
import OtherComp from "../components/OthersComp";

const Home = () => {
    return (
        <Box>
        <Navbar />
        <HeroSection />
        <FeaturedLogos />
        <BeginJourneySection />
        <GrowthSection/>
        <AutoCarousel />
        <MeditationCarousel />
        <NowAvailable/>
        <DeviceSection />
        <PressSection />
        <SuccessStoriesSection />
        <GetStartedSection />
        <AdvancedPrograms />
        <OtherComp/>
        </Box>
    )
};
export default Home;