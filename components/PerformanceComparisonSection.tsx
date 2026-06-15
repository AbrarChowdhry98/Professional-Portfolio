/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { assetUrl } from "@/lib/assetUrl";
import { LighthouseSnapshot, PerformanceComparison } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  section: css({
    paddingTop: 48,
    paddingBottom: 48,
    borderTop: `1px solid ${theme.colors.border}`,
  }),
  header: css({
    marginBottom: 32,
    maxWidth: 720,
    textAlign: "left",
  }),
  label: css({
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    fontWeight: 700,
    color: theme.colors.accent,
    marginBottom: 16,
  }),
  heading: css({
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
    fontWeight: 800,
    color: theme.colors.text,
    marginBottom: 12,
  }),
  summary: css({
    fontSize: 14,
    lineHeight: 1.8,
    color: theme.colors.textMuted,
    margin: 0,
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    [Breakpoints.md]: {
      gridTemplateColumns: "1fr",
    },
  }),
  card: css({
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 8,
    overflow: "hidden",
    textAlign: "left",
  }),
  cardHeader: css({
    padding: "20px 20px 16px",
    borderBottom: `1px solid ${theme.colors.border}`,
  }),
  cardLabel: css({
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
    marginBottom: 8,
  }),
  cardTitle: css({
    fontSize: 15,
    fontWeight: 700,
    color: theme.colors.text,
    marginBottom: 4,
  }),
  cardUrl: css({
    fontSize: 12,
    color: theme.colors.textMuted,
    wordBreak: "break-all",
  }),
  scores: css({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
    padding: "16px 20px",
    borderBottom: `1px solid ${theme.colors.border}`,
    [Breakpoints.sm]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
  score: css({
    textAlign: "left",
  }),
  scoreValue: css({
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 6,
  }),
  scoreLabel: css({
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: theme.colors.textDim,
  }),
  image: css({
    width: "100%",
    height: "auto",
    display: "block",
  }),
};

function scoreColor(value: number): string {
  if (value >= 90) {
    return "#0cce6b";
  }

  if (value >= 50) {
    return theme.colors.accent;
  }

  return "#ff4e42";
}

function ScoreGrid({ snapshot }: { snapshot: LighthouseSnapshot }) {
  const metrics = [
    { key: "performance", label: "Performance", value: snapshot.scores.performance },
    {
      key: "accessibility",
      label: "Accessibility",
      value: snapshot.scores.accessibility,
    },
    {
      key: "bestPractices",
      label: "Best Practices",
      value: snapshot.scores.bestPractices,
    },
    { key: "seo", label: "SEO", value: snapshot.scores.seo },
  ] as const;

  return (
    <div css={styles.scores}>
      {metrics.map(({ key, label, value }) => (
        <div key={key} css={styles.score}>
          <div css={styles.scoreValue} style={{ color: scoreColor(value) }}>
            {value}
          </div>
          <div css={styles.scoreLabel}>{label}</div>
        </div>
      ))}
    </div>
  );
}

interface Props {
  comparison: PerformanceComparison;
}

const PerformanceComparisonSection = ({ comparison }: Props) => {
  const snapshots = [comparison.before, comparison.after] as const;

  return (
    <section css={styles.section}>
      <div css={styles.header}>
        <div css={styles.label}>
          <SpeedOutlinedIcon sx={{ fontSize: 18 }} />
          {comparison.heading ?? "Performance Improvement"}
        </div>
        <h2 css={styles.heading}>Staging to production Lighthouse gains</h2>
        <p css={styles.summary}>{comparison.summary}</p>
      </div>

      <div css={styles.grid}>
        {snapshots.map((snapshot) => (
          <article key={snapshot.label} css={styles.card}>
            <div css={styles.cardHeader}>
              <div css={styles.cardLabel}>{snapshot.label}</div>
              <div css={styles.cardTitle}>
                {snapshot.title ?? "Lighthouse audit"}
              </div>
              {snapshot.url && <div css={styles.cardUrl}>{snapshot.url}</div>}
            </div>
            <ScoreGrid snapshot={snapshot} />
            <img
              src={assetUrl(snapshot.image)}
              alt={`${snapshot.label} Lighthouse audit for JELD-WEN Canada`}
              css={styles.image}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default PerformanceComparisonSection;
