/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { useCallback, useMemo, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { ProjectItem } from "@/lib/types";
import { theme } from "@/lib/theme";
import { Breakpoints } from "@/lib/utils/breakpoints";
import Project from "./Project";

const PAGE_SIZE = 4;

const styles = {
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
    gap: 24,
    [Breakpoints.sm]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  }),
  navButtons: css({
    display: "flex",
    gap: 8,
    flexShrink: 0,
  }),
  navBtn: css({
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "border-color 0.2s ease, color 0.2s ease",
    ":hover:not(:disabled)": {
      borderColor: theme.colors.accent,
      color: theme.colors.accent,
    },
    ":disabled": {
      opacity: 0.3,
      cursor: "not-allowed",
    },
  }),
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
    [Breakpoints.md]: {
      gridTemplateColumns: "1fr",
    },
  }),
  gridPreview: css({
    gridTemplateRows: "repeat(3, minmax(200px, 220px))",
    [Breakpoints.md]: {
      gridTemplateRows: "repeat(4, minmax(200px, auto))",
    },
  }),
  gridFull: css({
    gridTemplateRows: "repeat(auto-fill, minmax(200px, 220px))",
  }),
};

interface Props {
  projects: ProjectItem[];
  limit?: number;
}

const Projects = ({ projects, limit }: Props) => {
  const [page, setPage] = useState(0);
  const isPreview = limit !== undefined;
  const pageSize = limit ?? PAGE_SIZE;
  const totalPages = Math.ceil(projects.length / pageSize);

  const visibleProjects = useMemo(() => {
    if (isPreview) {
      return projects.slice(0, limit);
    }

    return projects.slice(page * pageSize, page * pageSize + pageSize);
  }, [isPreview, limit, page, pageSize, projects]);

  const goPrev = useCallback(() => {
    setPage((current) => Math.max(0, current - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((current) => Math.min(totalPages - 1, current + 1));
  }, [totalPages]);

  return (
    <>
      {!isPreview && totalPages > 1 && (
        <div css={styles.header}>
          <div />
          <div css={styles.navButtons}>
            <button
              type="button"
              css={styles.navBtn}
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous projects"
            >
              <ArrowBackRoundedIcon fontSize="small" />
            </button>
            <button
              type="button"
              css={styles.navBtn}
              onClick={goNext}
              disabled={page >= totalPages - 1}
              aria-label="Next projects"
            >
              <ArrowForwardRoundedIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}

      <div
        css={css([
          styles.grid,
          isPreview ? styles.gridPreview : styles.gridFull,
        ])}
      >
        {visibleProjects.map((project, index) => (
          <Project project={project} index={index} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
