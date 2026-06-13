/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { BannerContent } from "@/lib/types";
import { assetUrl } from "@/lib/assetUrl";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  section: css({
    width: "100%",
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    padding: theme.sectionPadding,
    paddingTop: 48,
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "center",
    [Breakpoints.md]: {
      gridTemplateColumns: "1fr",
      gap: 32,
    },
  }),
  badge: css({
    display: "inline-block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.colors.accent,
    marginBottom: 20,
  }),
  title: css({
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    color: theme.colors.text,
    marginBottom: 24,
    textAlign: "left",
  }),
  highlight: css({
    color: theme.colors.accent,
    fontStyle: "italic",
    fontWeight: 700,
  }),
  description: css({
    fontSize: 15,
    lineHeight: 1.7,
    color: theme.colors.textMuted,
    textAlign: "left",
    maxWidth: 480,
    marginBottom: 16,
  }),
  navText: css({
    fontSize: 14,
    lineHeight: 1.7,
    color: theme.colors.textDim,
    textAlign: "left",
    maxWidth: 480,
  }),
  portraitWrapper: css({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    [Breakpoints.md]: {
      order: -1,
    },
  }),
  portrait: css({
    width: "100%",
    maxWidth: 380,
    aspectRatio: "3 / 4",
    background: theme.gradients.portrait,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  }),
  portraitImage: css({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 18%",
  }),
  initials: css({
    fontSize: 72,
    fontWeight: 800,
    color: theme.colors.accent,
    opacity: 0.3,
    letterSpacing: "0.05em",
  }),
  focusCard: css({
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 4,
    padding: "14px 16px",
    backdropFilter: "blur(8px)",
  }),
  focusLabel: css({
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
    marginBottom: 4,
  }),
  focusText: css({
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.text,
    display: "flex",
    alignItems: "center",
    gap: 8,
  }),
  focusDot: css({
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.colors.accent,
    flexShrink: 0,
  }),
};

function highlightName(title: string) {
  const parts = title.split(/(Abrar Chowdhry)/gi);

  return parts.map((part, index) =>
    part.toLowerCase() === "abrar chowdhry" ? (
      <span key={index} css={styles.highlight}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

interface Props {
  banner: BannerContent;
  profileImageUrl?: string;
}

const Intro = ({ banner, profileImageUrl }: Props) => {
  return (
    <section id="about" css={styles.section}>
      <div css={styles.grid}>
        <div>
          <span css={styles.badge}>
            Working toward Associate Product Line Manager
          </span>
          <h1 css={styles.title}>{highlightName(banner.title)}</h1>
          <p css={styles.description}>{banner.subHeading}</p>
          <p css={styles.navText}>{banner.navText}</p>
        </div>

        <div css={styles.portraitWrapper}>
          <div css={styles.portrait}>
            {profileImageUrl ? (
              <img
                src={assetUrl(profileImageUrl)}
                alt="Abrar Chowdhry"
                css={styles.portraitImage}
              />
            ) : (
              <span css={styles.initials}>AC</span>
            )}
            <div css={styles.focusCard}>
              <div css={styles.focusLabel}>Current focus</div>
              <div css={styles.focusText}>
                <span css={styles.focusDot} />
                Product Management · Technology-Led Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
