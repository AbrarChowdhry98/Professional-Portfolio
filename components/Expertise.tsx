/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { useMemo } from "react";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import { ProjectItem } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  section: css({
    width: "100%",
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    padding: theme.sectionPadding,
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "start",
    [Breakpoints.md]: {
      gridTemplateColumns: "1fr",
      gap: 48,
    },
  }),
  heading: css({
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 800,
    color: theme.colors.text,
    marginBottom: 12,
    textAlign: "left",
  }),
  description: css({
    fontSize: 14,
    color: theme.colors.textMuted,
    textAlign: "left",
    marginBottom: 36,
    lineHeight: 1.7,
  }),
  skill: css({
    marginBottom: 24,
  }),
  skillHeader: css({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
  }),
  skillName: css({
    fontSize: 13,
    fontWeight: 600,
    color: theme.colors.text,
  }),
  skillValue: css({
    fontSize: 13,
    fontWeight: 600,
    color: theme.colors.accent,
  }),
  skillTrack: css({
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 2,
    overflow: "hidden",
  }),
  skillFill: css({
    height: "100%",
    backgroundColor: theme.colors.accent,
    borderRadius: 2,
    transition: "width 0.6s ease",
  }),
  cardsGrid: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    [Breakpoints.sm]: {
      gridTemplateColumns: "1fr",
    },
  }),
  card: css({
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 4,
    padding: 20,
    textAlign: "left",
    transition: "border-color 0.2s ease",
    ":hover": {
      borderColor: theme.colors.accent,
    },
  }),
  cardIcon: css({
    color: theme.colors.accent,
    marginBottom: 12,
    fontSize: 22,
  }),
  cardTitle: css({
    fontSize: 14,
    fontWeight: 700,
    color: theme.colors.text,
    marginBottom: 6,
  }),
  cardDesc: css({
    fontSize: 12,
    color: theme.colors.textMuted,
    lineHeight: 1.6,
  }),
};

const skillBars = [
  { name: "Product Strategy & Go-to-Market", value: 88 },
  { name: "Technical Product Delivery", value: 85 },
  { name: "Digital Marketing & Analytics", value: 82 },
];

const expertiseCards = [
  {
    icon: WebOutlinedIcon,
    title: "Web Platforms",
    description:
      "Next.js, React, and Sitecore XM Cloud for enterprise marketing sites.",
  },
  {
    icon: PhoneIphoneOutlinedIcon,
    title: "Native iOS",
    description:
      "SwiftUI apps with offline media, configurators, and field-ready UX.",
  },
  {
    icon: SpeedOutlinedIcon,
    title: "MERN Stack",
    description:
      "Node.js APIs, MongoDB, and React front ends for dynamic web apps.",
  },
  {
    icon: CampaignOutlinedIcon,
    title: "Product Marketing",
    description:
      "Campaign planning, positioning, launch support, and analytics-driven growth.",
  },
];

function aggregateKeywords(projects: ProjectItem[]): string[] {
  const counts = new Map<string, number>();

  for (const project of projects) {
    for (const keyword of project.keywords ?? []) {
      const normalized = keyword.trim();
      counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([keyword]) => keyword);
}

interface Props {
  projects: ProjectItem[];
  preview?: boolean;
  embedded?: boolean;
}

const Expertise = ({ projects, preview = false, embedded = false }: Props) => {
  const topKeywords = useMemo(() => aggregateKeywords(projects), [projects]);
  const keywordSummary = topKeywords.slice(0, 4).join(", ");
  const visibleSkillBars = preview ? skillBars.slice(0, 2) : skillBars;
  const visibleCards = preview ? expertiseCards.slice(0, 2) : expertiseCards;

  const content = (
    <div css={styles.grid}>
        <div>
          {!preview && !embedded && (
            <>
              <h2 css={styles.heading}>Skills & Expertise</h2>
              <p css={styles.description}>
                A blend of product thinking, marketing strategy, and hands-on
                delivery — from defining digital product direction to shipping
                mobile apps and enterprise web platforms at JELD-WEN.
                {keywordSummary && (
                  <>
                    {" "}
                    Core technologies include {keywordSummary}.
                  </>
                )}
              </p>
            </>
          )}

          {embedded && !preview && keywordSummary && (
            <p css={css([styles.description, { marginBottom: 36 }])}>
              Core technologies include {keywordSummary}.
            </p>
          )}

          {preview && (
            <p css={css([styles.description, { marginBottom: 36 }])}>
              Product strategy, technical delivery, and digital marketing — with
              hands-on work across Sitecore, Next.js, SwiftUI, and the MERN
              stack.
            </p>
          )}

          {visibleSkillBars.map(({ name, value }) => (
            <div key={name} css={styles.skill}>
              <div css={styles.skillHeader}>
                <span css={styles.skillName}>{name}</span>
                <span css={styles.skillValue}>{value}%</span>
              </div>
              <div css={styles.skillTrack}>
                <div css={styles.skillFill} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div css={styles.cardsGrid}>
          {visibleCards.map(({ icon: Icon, title, description }) => (
            <div key={title} css={styles.card}>
              <Icon css={styles.cardIcon} />
              <div css={styles.cardTitle}>{title}</div>
              <div css={styles.cardDesc}>{description}</div>
            </div>
          ))}
        </div>
      </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section id="expertise" css={styles.section}>
      {content}
    </section>
  );
};

export default Expertise;
