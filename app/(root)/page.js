
import FormSection from "@/components/HomeComponents/FormSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import FeatureSection from "@/components/HomeComponents/FeatureSection";
import RacesNews from "@/components/HomeComponents/RacesNews";
import LatestWin from "@/components/HomeComponents/LatestWin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <FeatureSection />
      <RacesNews/>
      <FormSection/>
      <LatestWin/>
    </main>
  );
}
