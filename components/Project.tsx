/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import Link from "next/link";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { assetUrl } from "@/lib/assetUrl";
import { ProjectItem } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const layoutPatterns = [
  css({
    gridColumn: "1",
    gridRow: "1 / 3",
    [Breakpoints.md]: { gridColumn: "1", gridRow: "auto" },
  }),
  css({
    gridColumn: "2",
    gridRow: "1 / 2",
    [Breakpoints.md]: { gridColumn: "1", gridRow: "auto" },
  }),
  css({
    gridColumn: "1",
    gridRow: "3 / 4",
    [Breakpoints.md]: { gridColumn: "1", gridRow: "auto" },
  }),
  css({
    gridColumn: "2",
    gridRow: "2 / 4",
    [Breakpoints.md]: { gridColumn: "1", gridRow: "auto" },
  }),
];

const accentOverlays = [
  "rgba(79, 209, 197, 0.08)",
  "rgba(107, 70, 193, 0.1)",
  "rgba(79, 209, 197, 0.06)",
  "rgba(79, 209, 197, 0.14)",
];

const styles = {
  card: css({
    position: "relative",
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 4,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    height: "100%",
    minHeight: 180,
    transition: "border-color 0.25s ease, transform 0.25s ease",
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      borderColor: theme.colors.accent,
      transform: "translateY(-2px)",
    },
    ":hover > span": {
      backgroundColor: theme.colors.accent,
    },
  }),
  overlay: css({
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  }),
  image: css({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    opacity: 0.35,
    filter: "grayscale(35%) brightness(0.45)",
    pointerEvents: "none",
    zIndex: 0,
  }),
  imageApp: css({
    position: "absolute",
    top: 12,
    right: 12,
    bottom: 12,
    width: "42%",
    maxWidth: 140,
    height: "auto",
    maxHeight: "calc(100% - 24px)",
    objectFit: "contain",
    objectPosition: "top center",
    opacity: 0.95,
    filter: "none",
    pointerEvents: "none",
    zIndex: 0,
    borderRadius: 12,
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
  }),
  imageScrim: css({
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.88) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  }),
  imageScrimApp: css({
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.72) 52%, rgba(0, 0, 0, 0.18) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  }),
  content: css({
    position: "relative",
    zIndex: 2,
    maxWidth: "58%",
    [Breakpoints.sm]: {
      maxWidth: "100%",
    },
  }),
  category: css({
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.colors.accent,
    marginBottom: 12,
  }),
  title: css({
    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
    fontWeight: 700,
    color: theme.colors.text,
    textAlign: "left",
    lineHeight: 1.25,
  }),
  linkBtn: css({
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: theme.colors.text,
    color: theme.colors.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    transition: "background-color 0.2s ease",
  }),
};

function getCategory(keywords?: string[]): string {
  if (!keywords?.length) {
    return "Systems";
  }

  const cloud = ["gcp", "azure", "terraform", "cloud", "sitecore"];
  const mobile = ["swift", "swiftui", "ios"];
  const infra = ["node", "nestjs", "graphql", "express", "mongodb"];
  const ui = ["react", "next", "typescript", "javascript", "html", "css"];

  const lower = keywords.map((k) => k.toLowerCase());

  if (lower.some((k) => mobile.some((m) => k.includes(m)))) {
    return "Mobile";
  }

  if (lower.some((k) => cloud.some((c) => k.includes(c)))) {
    return "Cloud";
  }

  if (lower.some((k) => infra.some((i) => k.includes(i)))) {
    return "Infrastructure";
  }

  if (lower.some((k) => ui.some((u) => k.includes(u)))) {
    return "Frontend";
  }

  return keywords[0];
}

interface Props {
  project: ProjectItem;
  index: number;
}

const Project = ({ project, index }: Props) => {
  const layout = layoutPatterns[index % layoutPatterns.length];
  const category = getCategory(project.keywords);
  const isAppProject = project.imageMode === "app";

  return (
    <Link
      href={`/project/${project.slug}`}
      css={css([styles.card, layout])}
      aria-label={`View ${project.title}`}
    >
      <div
        css={styles.overlay}
        style={{ background: accentOverlays[index % accentOverlays.length] }}
      />
      {project.image && (
        <>
          <img
            src={assetUrl(project.image)}
            alt=""
            css={isAppProject ? styles.imageApp : styles.image}
            loading="lazy"
          />
          <div
            css={isAppProject ? styles.imageScrimApp : styles.imageScrim}
            aria-hidden="true"
          />
        </>
      )}
      <div css={styles.content}>
        <div css={styles.category}>{category}</div>
        <h3 css={styles.title}>{project.title}</h3>
      </div>
      <span css={styles.linkBtn} aria-hidden="true">
        <NorthEastRoundedIcon fontSize="small" />
      </span>
    </Link>
  );
};

export default Project;
