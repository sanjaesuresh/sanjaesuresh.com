import TopBar from "@/components/TopBar";
import Masthead from "@/components/Masthead";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AtlasSection from "@/components/AtlasSection";
import PhotographySection from "@/components/PhotographySection";
import ContactSection from "@/components/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanjae Suresh",
  jobTitle: "Software Engineer",
  url: "https://sanjaesuresh.com",
  email: "sanjaesuresh@gmail.com",
  sameAs: [
    "https://linkedin.com/in/sanjae-suresh",
    "https://github.com/sanjaesuresh",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Wilfrid Laurier University",
  },
  worksFor: {
    "@type": "Organization",
    name: "Bloomberg",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <main>
        <div className="container-page">
          <Masthead />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AtlasSection />
          <PhotographySection />
          <ContactSection />
          <footer className="font-mono flex flex-wrap justify-between gap-2 pb-[60px] pt-[30px] text-[12px] text-dim">
            <span>
              &copy; 2026{" "}
              <span className="text-accent-dim">sanjae suresh</span>
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
