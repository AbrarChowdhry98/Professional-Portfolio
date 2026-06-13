/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const styles = {
  main: css({
    width: "100%",
    backgroundColor: theme.colors.bg,
    minHeight: "100vh",
  }),
  section: css({
    width: "100%",
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    padding: "32px 24px 80px",
    [Breakpoints.sm]: {
      padding: "24px 24px 64px",
    },
  }),
  intro: css({
    marginBottom: 48,
    maxWidth: 720,
  }),
  title: css({
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    color: theme.colors.text,
    marginBottom: 16,
    textAlign: "left",
  }),
  description: css({
    fontSize: 15,
    lineHeight: 1.7,
    color: theme.colors.textMuted,
    textAlign: "left",
  }),
};

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageShell = ({ title, description, children }: Props) => {
  return (
    <main css={styles.main}>
      <div css={styles.section}>
        <div css={styles.intro}>
          <h1 css={styles.title}>{title}</h1>
          <p css={styles.description}>{description}</p>
        </div>
        {children}
      </div>
    </main>
  );
};

export default PageShell;
