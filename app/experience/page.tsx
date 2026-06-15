import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import { getContactInformation, getExperience } from "@/lib/contentful";

export default async function ExperiencePage() {
  const [experience, contact] = await Promise.all([
    getExperience(),
    getContactInformation(),
  ]);

  return (
    <>
      <PageShell
        title="Experience"
        description="A progression from digital marketing and retail channel operations into product-led delivery — owning roadmaps, releases, and measurable growth across apps, web platforms, and partner channels."
      >
        <Experience experience={experience} />
      </PageShell>
      <Footer socialLinks={contact.socialLinks} />
    </>
  );
}
