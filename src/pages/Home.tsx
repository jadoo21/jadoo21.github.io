import { CareerSnapshot } from "../components/home/CareerSnapshot";
import { CurrentlyAt } from "../components/home/CurrentlyAt";
import { Hero } from "../components/home/Hero";
import { HomeExperience } from "../components/home/HomeExperience";
import { ProfessionalStory } from "../components/home/ProfessionalStory";
import { SelectedWork } from "../components/home/SelectedWork";
import { Specializations } from "../components/home/Specializations";
import { TechStack } from "../components/home/TechStack";
import { Cta } from "../components/layout/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerSnapshot />
      <CurrentlyAt />
      <Specializations />
      <SelectedWork />
      <TechStack />
      <HomeExperience />
      <ProfessionalStory />
      <Cta />
    </>
  );
}