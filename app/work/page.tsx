import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import Projects from "@/components/Projects";
import { getContactInformation, getProjects } from "@/lib/contentful";

export default async function WorkPage() {
  const [projects, contact] = await Promise.all([
    getProjects(),
    getContactInformation(),
  ]);

  return (
    <>
      <PageShell
        title="Projects"
        description="Product work at JELD-WEN — sales and customer iOS apps plus the Canada website — alongside earlier full-stack projects on GitHub."
      >
        <Projects projects={projects} />
      </PageShell>
      <Footer socialLinks={contact.socialLinks} />
    </>
  );
}
