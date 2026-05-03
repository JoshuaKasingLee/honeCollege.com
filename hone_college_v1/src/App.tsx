import "./App.css";
import BackToTopButton from "./components/layout/BackToTopButton";
import PageSection from "./components/layout/PageSection";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import {
  BookTrial,
  FAQ,
  GettingStarted,
  Hero,
  Pricing,
  Referral,
  SampleResources,
  Subjects,
  WhyUs,
} from "./components/sections";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <PageSection theme="dark">
        <WhyUs />
      </PageSection>

      <PageSection theme="light">
        <Subjects />
      </PageSection>

      <PageSection theme="dark">
        <Pricing />
      </PageSection>

      <PageSection theme="light">
        <Referral />
      </PageSection>

      <PageSection theme="dark">
        <GettingStarted />
      </PageSection>

      <PageSection theme="light">
        <SampleResources />
      </PageSection>

      <PageSection theme="dark">
        <BookTrial />
      </PageSection>

      <PageSection theme="light">
        <FAQ />
      </PageSection>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
