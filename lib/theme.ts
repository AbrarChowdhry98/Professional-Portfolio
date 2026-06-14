export const theme = {
  colors: {
    bg: "#000000",
    surface: "#000000",
    surfaceElevated: "#050505",
    border: "rgba(245, 185, 66, 0.15)",
    accent: "#F5B942",
    accentMuted: "rgba(245, 185, 66, 0.6)",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.65)",
    textDim: "rgba(255, 255, 255, 0.4)",
  },
  gradients: {
    cta: "linear-gradient(135deg, #F5B942 0%, #E85D04 100%)",
    card: "linear-gradient(160deg, rgba(245, 185, 66, 0.08) 0%, rgba(0, 0, 0, 1) 60%)",
    portrait: "linear-gradient(180deg, rgba(245, 185, 66, 0.06) 0%, #000000 100%)",
  },
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Inter', system-ui, -apple-system, sans-serif",
  },
  maxWidth: 1200,
  sectionPadding: "80px 24px",
} as const;
