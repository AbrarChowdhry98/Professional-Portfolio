import ContactPageView from "@/components/ContactPageView";
import { getContactInformation } from "@/lib/contentful";

export default async function ContactPage() {
  const contact = await getContactInformation();

  return <ContactPageView contact={contact} />;
}
