/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { assetUrl } from "@/lib/assetUrl";
import { ProjectGalleryItem } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const phoneFrame = css({
  position: "relative",
  borderRadius: 28,
  overflow: "hidden",
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: "#0a0a0a",
  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.45)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    width: 72,
    height: 5,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    zIndex: 2,
    pointerEvents: "none",
  },
});

const styles = {
  screenshot: css({
    width: "100%",
    height: "auto",
    display: "block",
  }),
  gallerySection: css({
    paddingTop: 48,
    paddingBottom: 48,
    borderTop: `1px solid ${theme.colors.border}`,
  }),
  galleryHeading: css({
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
    fontWeight: 800,
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: "left",
  }),
  gallerySubtext: css({
    fontSize: 14,
    lineHeight: 1.7,
    color: theme.colors.textMuted,
    marginBottom: 32,
    maxWidth: 560,
    textAlign: "left",
  }),
  galleryGrid: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    [Breakpoints.md]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [Breakpoints.sm]: {
      gridTemplateColumns: "1fr",
    },
  }),
  galleryItem: css({
    display: "flex",
    flexDirection: "column",
    gap: 14,
  }),
  galleryPhone: css([
    phoneFrame,
    {
      width: "100%",
      maxWidth: 240,
      margin: "0 auto",
    },
  ]),
  caption: css({
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
    textAlign: "center",
  }),
};

interface GalleryProps {
  gallery: ProjectGalleryItem[];
  subtext?: string;
}

export const AppGallerySection = ({ gallery, subtext }: GalleryProps) => (
  <section css={styles.gallerySection}>
    <h2 css={styles.galleryHeading}>Inside the App</h2>
    <p css={styles.gallerySubtext}>
      {subtext ??
        "Product discovery, configurators, resources, and support — designed for homeowners and dealers across Canada."}
    </p>
    <div css={styles.galleryGrid}>
      {gallery.map(({ src, caption }) => (
        <div key={src} css={styles.galleryItem}>
          <div css={styles.galleryPhone}>
            <img src={assetUrl(src)} alt={caption} css={styles.screenshot} />
          </div>
          <div css={styles.caption}>{caption}</div>
        </div>
      ))}
    </div>
  </section>
);
