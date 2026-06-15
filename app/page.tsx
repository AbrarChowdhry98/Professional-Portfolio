import ContactCard from "@/components/ContactCard";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionPreview from "@/components/SectionPreview";
import StatsBar from "@/components/StatsBar";
import {
  getBanner,
  getContactInformation,
  getExperience,
  getFlagshipProjects,
  getProfilePictureUrl,
} from "@/lib/contentful";

export default async function HomePage() {
  const [banner, contact, projects, experience, profileImageUrl] =
    await Promise.all([
      getBanner(),
      getContactInformation(),
      getFlagshipProjects(),
      getExperience(),
      getProfilePictureUrl(),
    ]);

  return (
    <main style={{ width: "100%", backgroundColor: "#000000" }}>
      <Intro banner={banner} profileImageUrl={profileImageUrl} />
      <StatsBar projectCount={projects.length} />

      <SectionPreview
        title="Experience"
        description="From digital marketing and channel operations to owning product delivery — apps, web platforms, and retail partnerships at JELD-WEN Canada."
        href="/experience"
      >
        <Experience experience={experience} limit={1} highlightLimit={3} />
      </SectionPreview>

      <SectionPreview
        title="Projects"
        description="Flagship product work — iOS apps, the Canada website, and Home Depot Canada channel growth."
        href="/work"
      >
        <Projects projects={projects} limit={4} />
      </SectionPreview>

      <Expertise projects={projects} />

      <ContactCard contact={contact} />
      <Footer socialLinks={contact.socialLinks} />
    </main>
  );
}
