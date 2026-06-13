/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  section: css({
    width: "100%",
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    padding: theme.sectionPadding,
    borderTop: `1px solid ${theme.colors.border}`,
  }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    marginBottom: 40,
    [Breakpoints.sm]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  }),
  heading: css({
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 800,
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: "left",
  }),
  subtext: css({
    fontSize: 14,
    lineHeight: 1.7,
    color: theme.colors.textMuted,
    textAlign: "left",
    maxWidth: 520,
  }),
  viewAll: css({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: theme.colors.accent,
    border: `1px solid ${theme.colors.accent}`,
    borderRadius: 4,
    padding: "10px 16px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "background-color 0.2s ease, color 0.2s ease",
    ":hover": {
      backgroundColor: theme.colors.accent,
      color: theme.colors.bg,
    },
  }),
};

interface Props {
  id?: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  children: React.ReactNode;
}

const SectionPreview = ({
  id,
  title,
  description,
  href,
  linkLabel = "View all",
  children,
}: Props) => {
  return (
    <section id={id} css={styles.section}>
      <div css={styles.header}>
        <div>
          <h2 css={styles.heading}>{title}</h2>
          <p css={styles.subtext}>{description}</p>
        </div>
        <Link href={href} css={styles.viewAll}>
          {linkLabel}
          <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
        </Link>
      </div>
      {children}
    </section>
  );
};

export default SectionPreview;
