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
        description="A progression from digital marketing and business development into product-led delivery — owning web platforms, mobile apps, and the marketing systems that support them at scale."
      >
        <Experience experience={experience} />
      </PageShell>
      <Footer socialLinks={contact.socialLinks} />
    </>
  );
}
