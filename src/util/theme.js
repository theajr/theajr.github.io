import { createMuiTheme } from "@material-ui/core/styles";

export const COLORS = {
  blue: "#007bff",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#28a745",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#fff",
  gray: "#6c757d",
  grayDark: "#343a40",
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  info: "#17a2b8",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#343a40"
};
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontSize: 34
    },
    h3: {
      fontSize: 18,
      fontWeight: 500
    },
    h4: {
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      fontWeight: 700
    }
  },
  palette: {},
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#f4f7f6",
        color: COLORS.dark,
        borderBottom: "1px solid #E6EAEA"
      }
    },
    MuiToolBar: {
      root: {
        background: "red"
      }
    },
    MuiTypography: {
      h1: {
        fontWeight: 800,
        fontSize: 60,
        marginTop: 5
      },
      h2: {
        fontFamily: "Poppins",
        fontSize: 40,
        fontWeight: 600
      }
    }
  },

  status: {
    danger: "orange"
  }
});

export default theme;
