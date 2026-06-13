/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { ExperienceItem } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  timeline: css({
    display: "flex",
    flexDirection: "column",
    gap: 24,
  }),
  entry: css({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    gap: 24,
    [Breakpoints.sm]: {
      gridTemplateColumns: "16px 1fr",
      gap: 16,
    },
  }),
  markerColumn: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 28,
  }),
  marker: css({
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: theme.colors.accent,
    flexShrink: 0,
    boxShadow: `0 0 0 4px rgba(79, 209, 197, 0.12)`,
  }),
  markerLine: css({
    flex: 1,
    width: 1,
    marginTop: 8,
    backgroundColor: theme.colors.border,
    minHeight: 24,
  }),
  card: css({
    backgroundColor: theme.colors.bg,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 8,
    padding: 24,
    textAlign: "left",
    transition: "border-color 0.2s ease",
    ":hover": {
      borderColor: "rgba(79, 209, 197, 0.35)",
    },
  }),
  cardFeatured: css({
    borderColor: "rgba(79, 209, 197, 0.35)",
    borderLeft: `3px solid ${theme.colors.accent}`,
    background:
      "linear-gradient(160deg, rgba(79, 209, 197, 0.06) 0%, rgba(0, 0, 0, 1) 55%)",
  }),
  companyRow: css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: "8px 12px",
    marginBottom: 20,
  }),
  company: css({
    fontSize: "clamp(1rem, 2vw, 1.15rem)",
    fontWeight: 700,
    color: theme.colors.text,
  }),
  badge: css({
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: theme.colors.accent,
    border: `1px solid rgba(79, 209, 197, 0.35)`,
    borderRadius: 999,
    padding: "4px 10px",
  }),
  meta: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "6px 16px",
    fontSize: 12,
    color: theme.colors.textDim,
    marginBottom: 4,
  }),
  roleBlock: css({
    ":not(:last-of-type)": {
      marginBottom: 24,
      paddingBottom: 24,
      borderBottom: `1px solid ${theme.colors.border}`,
    },
  }),
  roleTitle: css({
    fontSize: 14,
    fontWeight: 700,
    color: theme.colors.text,
    marginBottom: 6,
  }),
  rolePeriod: css({
    fontSize: 12,
    fontWeight: 600,
    color: theme.colors.accent,
    marginBottom: 12,
  }),
  highlights: css({
    margin: 0,
    paddingLeft: 18,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  }),
  highlight: css({
    fontSize: 13,
    lineHeight: 1.65,
    color: theme.colors.textMuted,
  }),
};

interface Props {
  experience: ExperienceItem[];
  limit?: number;
  highlightLimit?: number;
}

const Experience = ({
  experience,
  limit,
  highlightLimit,
}: Props) => {
  const visibleExperience = limit ? experience.slice(0, limit) : experience;

  return (
    <div css={styles.timeline}>
      {visibleExperience.map((item, index) => (
        <article key={item.id} css={styles.entry}>
          <div css={styles.markerColumn}>
            <div css={styles.marker} />
            {index < visibleExperience.length - 1 && (
              <div css={styles.markerLine} />
            )}
          </div>

          <div css={css([styles.card, item.featured && styles.cardFeatured])}>
            <div css={styles.companyRow}>
              <div css={styles.company}>{item.company}</div>
              {item.featured && <span css={styles.badge}>Current</span>}
            </div>

            {(item.location || item.workType) && (
              <div css={styles.meta}>
                {item.workType && <span>{item.workType}</span>}
                {item.location && <span>{item.location}</span>}
              </div>
            )}

            {item.roles.map((role) => {
              const highlights = highlightLimit
                ? role.highlights.slice(0, highlightLimit)
                : role.highlights;

              return (
                <div key={`${item.id}-${role.title}`} css={styles.roleBlock}>
                  <div css={styles.roleTitle}>{role.title}</div>
                  <div css={styles.rolePeriod}>
                    {role.period} · {role.duration}
                  </div>
                  <ul css={styles.highlights}>
                    {highlights.map((highlight) => (
                      <li key={highlight} css={styles.highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;
