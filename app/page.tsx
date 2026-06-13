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
  getProfilePictureUrl,
  getProjects,
} from "@/lib/contentful";

export default async function HomePage() {
  const [banner, contact, projects, experience, profileImageUrl] =
    await Promise.all([
      getBanner(),
      getContactInformation(),
      getProjects(),
      getExperience(),
      getProfilePictureUrl(),
    ]);

  return (
    <main style={{ width: "100%", backgroundColor: "#000000" }}>
      <Intro banner={banner} profileImageUrl={profileImageUrl} />
      <StatsBar projectCount={projects.length} />

      <SectionPreview
        title="Experience"
        description="From digital marketing and business development to leading product delivery at JELD-WEN Canada."
        href="/experience"
      >
        <Experience experience={experience} limit={1} highlightLimit={2} />
      </SectionPreview>

      <SectionPreview
        title="Projects"
        description="Native iOS apps, the Canadian web platform, and selected full-stack work."
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
