import { createTheme } from "@mui/material/styles";

const publicUrl = process.env.PUBLIC_URL || '';
const fontFaces = `
  @font-face {
    font-family: "bold_pro";
    src: url("${publicUrl}/fonts/apercu_bold_pro.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "medium_pro";
    src: url("${publicUrl}/fonts/apercu_medium_pro.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "regular_pro";
    src: url("${publicUrl}/fonts/apercu_regular_pro.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }
`;

// إضافة الخطوط إلى الصفحة
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = fontFaces;
  document.head.appendChild(styleElement);
}

// تعريف الألوان حسب الوظيفة
const colors = {
  // نصوص / رمادي
  darkText: "#262626",
  mediumText: "#707070",

  // خلفيات
  yellowBg: "#FAE086",

  // أكشنات
  blueAction: "#C3D9FF",
  pinkAction: "#FFA9AB",
  purpleAction: "#E1C9FF",
  orangeAction: "#FFD1AB",
};

// إنشاء الثيم
const theme = createTheme({
  palette: {
    // النصوص
    primary: {
      main: colors.darkText,
      darkText: colors.darkText,
      mediumText: colors.mediumText,
    },

    // الخلفيات
    secondary: {
      main: colors.yellowBg,
    },

    // أكشنات / ألوان إضافية
    actionBlue: {
      main: colors.blueAction,
    },
    actionPink: {
      main: colors.pinkAction,
    },
    actionPurple: {
      main: colors.purpleAction,
    },
    actionOrange: {
      main: colors.orangeAction,
    },
  },
  typography: {
    fontFamily: ["bold_pro", "sans-serif"].join(","),
    fontSize: 12,
  },
});

export default theme;
