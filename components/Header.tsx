/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";

const navBtn = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  lineHeight: 1,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: theme.colors.accent,
  border: `1px solid ${theme.colors.accent}`,
  borderRadius: 4,
  padding: "0 16px",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease, color 0.2s ease",
  ":hover": {
    backgroundColor: theme.colors.accent,
    color: theme.colors.bg,
  },
});

const styles = {
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: theme.maxWidth,
    padding: "24px",
    margin: "0 auto",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${theme.colors.border}`,
    [Breakpoints.sm]: {
      flexWrap: "wrap",
      gap: 16,
      justifyContent: "center",
    },
  }),
  logo: css({
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.2em",
    color: theme.colors.text,
    textTransform: "uppercase",
    [Breakpoints.sm]: {
      width: "100%",
      textAlign: "center",
    },
  }),
  actions: css({
    display: "flex",
    alignItems: "center",
    gap: 8,
    [Breakpoints.sm]: {
      width: "100%",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  }),
  nav: css({
    display: "flex",
    gap: 8,
    listStyle: "none",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
    justifyContent: "center",
  }),
  navBtnActive: css({
    backgroundColor: theme.colors.accent,
    color: theme.colors.bg,
  }),
};

const navItems = [
  { name: "Home", href: "/", match: (path: string) => path === "/" },
  {
    name: "Work",
    href: "/#work",
    match: (path: string) => path.startsWith("/project/"),
  },
  {
    name: "Contact",
    href: "/contact",
    match: (path: string) => path === "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header css={styles.header}>
      <Link href="/" css={styles.logo}>
        Abrar Chowdhry
      </Link>

      <div css={styles.actions}>
        <nav>
          <ul css={styles.nav}>
            {navItems.map(({ name, href, match }) => (
              <li key={name}>
                <Link
                  href={href}
                  css={css([navBtn, match(pathname) && styles.navBtnActive])}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
