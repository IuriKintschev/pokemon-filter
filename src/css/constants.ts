/**
 * Colors
 */
export const background = {
  Root: "#FFF",
  Content: "#F4F4F4",
};

export const characters = {
  title: "#333",
  paragraph: "#939393",
  titleBlue: "#00A7FD",
};

export const cp = {
  Orange: "#F87060", // 0-500
  Purple: "#662C91", // 501-1000
  Yelow: "#F5B700", // 1001-1500
  Blue: "#00C1FD", // 1501-Max
};

/**
 * Media queries
 */

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
