import { CareerSnapshot } from "../components/home/CareerSnapshot";
import { CurrentlyAt } from "../components/home/CurrentlyAt";
import { Hero } from "../components/home/Hero";
import { HomeExperience } from "../components/home/HomeExperience";
import { Specializations } from "../components/home/Specializations";
import { TechStack } from "../components/home/TechStack";
import { WorkComingSoon } from "../components/home/WorkComingSoon";
import { Cta } from "../components/layout/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerSnapshot />
      <CurrentlyAt />
      <Specializations />
      <TechStack />
      <HomeExperience />
      <WorkComingSoon />
      <Cta />
    </>
  );
}