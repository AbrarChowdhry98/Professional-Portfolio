/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactInformationContent } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";
import Footer from "./Footer";

const styles = {
  page: css({
    width: "100%",
    backgroundColor: theme.colors.bg,
    minHeight: "100vh",
  }),
  section: css({
    width: "100%",
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    padding: "48px 24px 80px",
  }),
  status: css({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 24,
  }),
  statusDot: css({
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.colors.accent,
    flexShrink: 0,
  }),
  statusText: css({
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "1.35fr 1fr",
    gap: 20,
    alignItems: "stretch",
    [Breakpoints.md]: {
      gridTemplateColumns: "1fr",
    },
  }),
  heroCard: css({
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 12,
    padding: "56px 48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 320,
    [Breakpoints.sm]: {
      padding: "40px 28px",
      minHeight: 0,
    },
  }),
  title: css({
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    color: theme.colors.text,
    marginBottom: 24,
  }),
  titleHighlight: css({
    color: theme.colors.accent,
    fontStyle: "italic",
    fontWeight: 700,
  }),
  subtext: css({
    fontSize: 15,
    lineHeight: 1.7,
    color: theme.colors.textMuted,
    maxWidth: 420,
  }),
  sideColumn: css({
    display: "flex",
    flexDirection: "column",
    gap: 20,
  }),
  directLineCard: css({
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    padding: "32px 28px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 32px rgba(245, 185, 66, 0.25)",
    },
  }),
  atSymbol: css({
    fontSize: 40,
    fontWeight: 700,
    color: theme.colors.bg,
    lineHeight: 1,
    marginBottom: 4,
  }),
  cardLabel: css({
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: theme.colors.bg,
    opacity: 0.7,
  }),
  directLineValue: css({
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    fontWeight: 600,
    color: theme.colors.bg,
    wordBreak: "break-all",
  }),
  ecosystemCard: css({
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 12,
    padding: "28px",
    flex: 1,
  }),
  ecosystemLabel: css({
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
    marginBottom: 20,
  }),
  iconGrid: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  }),
  iconButton: css({
    aspectRatio: "1",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.text,
    fontSize: 20,
    transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
    ":hover": {
      backgroundColor: "rgba(245, 185, 66, 0.12)",
      borderColor: theme.colors.accent,
      color: theme.colors.accent,
    },
  }),
  infoRow: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
    marginTop: 56,
    paddingTop: 40,
    borderTop: `1px solid ${theme.colors.border}`,
    [Breakpoints.sm]: {
      gridTemplateColumns: "1fr",
      gap: 28,
    },
  }),
  infoItem: css({
    display: "flex",
    flexDirection: "column",
    gap: 8,
  }),
  infoLabel: css({
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
  }),
  infoValue: css({
    fontSize: 15,
    fontWeight: 600,
    color: theme.colors.text,
  }),
};

const iconMap: Record<string, IconDefinition> = {
  linkedin: faLinkedin,
  falinkedin: faLinkedin,
  github: faGithub,
  fagithub: faGithub,
  twitter: faXTwitter,
  x: faXTwitter,
  fatwitter: faXTwitter,
  faxtwitter: faXTwitter,
  email: faEnvelope,
  envelope: faEnvelope,
  faenvelope: faEnvelope,
  web: faGlobe,
  faglobe: faGlobe,
  appstore: faAppStoreIos,
  appstoreios: faAppStoreIos,
  faappstoreios: faAppStoreIos,
};

function resolveIcon(iconName: string): IconDefinition {
  const key = iconName.toLowerCase().replace(/[^a-z]/g, "");
  return iconMap[key] ?? faGlobe;
}

function resolveHref(link: string, iconName: string): string {
  const normalizedIcon = iconName.toLowerCase();

  if (
    (normalizedIcon === "email" || normalizedIcon === "envelope") &&
    !link.startsWith("mailto:")
  ) {
    return `mailto:${link}`;
  }

  return link;
}

function findDirectContact(
  socialLinks: ContactInformationContent["socialLinks"]
): { href: string; label: string } {
  const emailLink = socialLinks.find((link) => {
    const key = link.iconName.toLowerCase().replace(/[^a-z]/g, "");
    return key === "email" || key === "envelope" || key === "faenvelope";
  });

  if (emailLink) {
    const email = emailLink.link.replace(/^mailto:/i, "");
    return { href: `mailto:${email}`, label: email };
  }

  const linkedIn = socialLinks.find((link) =>
    link.iconName.toLowerCase().includes("linkedin")
  );

  if (linkedIn) {
    return {
      href: linkedIn.link,
      label: "linkedin.com/in/abrar-chowdhry",
    };
  }

  return {
    href: "mailto:abrarchowdhry98@gmail.com",
    label: "abrarchowdhry98@gmail.com",
  };
}

function highlightTitle(title: string) {
  const parts = title.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} css={styles.titleHighlight}>
          {part.slice(1, -1)}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

const INFO_ITEMS = [
  { label: "Timezone", value: "Eastern Time (ET)" },
  { label: "Location", value: "Mississauga, ON" },
  { label: "Typical Response", value: "< 24 Hours" },
] as const;

interface Props {
  contact: ContactInformationContent;
}

const ContactPageView = ({ contact }: Props) => {
  const directContact = findDirectContact(contact.socialLinks);

  return (
    <main css={styles.page}>
      <section css={styles.section}>
        <div css={styles.status}>
          <span css={styles.statusDot} />
          <span css={styles.statusText}>
            Status: Growing toward Associate Product Line Manager
          </span>
        </div>

        <div css={styles.grid}>
          <div css={styles.heroCard}>
            <h1 css={styles.title}>{highlightTitle(contact.title)}</h1>
            <p css={styles.subtext}>{contact.subHeading}</p>
          </div>

          <div css={styles.sideColumn}>
            <a href={directContact.href} css={styles.directLineCard}>
              <span css={styles.atSymbol}>@</span>
              <span css={styles.cardLabel}>Direct Line</span>
              <span css={styles.directLineValue}>{directContact.label}</span>
            </a>

            <div css={styles.ecosystemCard}>
              <div css={styles.ecosystemLabel}>Ecosystem</div>
              <div css={styles.iconGrid}>
                {contact.socialLinks.slice(0, 4).map((socialLink) => (
                  <a
                    key={socialLink.id}
                    href={resolveHref(socialLink.link, socialLink.iconName)}
                    css={styles.iconButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.title}
                  >
                    <FontAwesomeIcon icon={resolveIcon(socialLink.iconName)} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div css={styles.infoRow}>
          {INFO_ITEMS.map(({ label, value }) => (
            <div key={label} css={styles.infoItem}>
              <span css={styles.infoLabel}>{label}</span>
              <span css={styles.infoValue}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer socialLinks={contact.socialLinks} />
    </main>
  );
};

export default ContactPageView;
