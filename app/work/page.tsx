import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import Projects from "@/components/Projects";
import { getContactInformation, getFlagshipProjects, getProjects } from "@/lib/contentful";

export default async function WorkPage() {
  const [flagshipProjects, allProjects, contact] = await Promise.all([
    getFlagshipProjects(),
    getProjects(),
    getContactInformation(),
  ]);

  const learningProjects = allProjects.filter(
    (project) => project.featured === false,
  );

  return (
    <>
      <PageShell
        title="Projects"
        description="Flagship product work at JELD-WEN — sales and customer iOS apps, the Canada website, and Home Depot Canada channel growth — plus earlier full-stack learning projects on GitHub."
      >
        <Projects projects={flagshipProjects} />
        {learningProjects.length > 0 && (
          <>
            <h2
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: 64,
                marginBottom: 8,
                textAlign: "left",
              }}
            >
              Earlier Learning Projects
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.55)",
                marginBottom: 32,
                textAlign: "left",
                maxWidth: 560,
              }}
            >
              Selected bootcamp and personal builds from earlier in my
              development journey — useful foundations, separate from the product
              work above.
            </p>
            <Projects projects={learningProjects} />
          </>
        )}
      </PageShell>
      <Footer socialLinks={contact.socialLinks} />
    </>
  );
}
