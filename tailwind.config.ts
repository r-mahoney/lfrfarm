const withMT = require("@material-tailwind/react/utils/withMT");
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default withMT({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        nav: ["font-nav","Lora", "Georgia", "Times New Roman", "serif"],
        heading: ["font-heading", 'Marcellus', "serif"],
        paragraph: ["font-paragraph", 'DM Sans', "sans-serif"]
      },
      fontSize: {
        heading: ['40pt', {
          lineHeight: "90%",
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        paragraph: '16pt',
        mobileHeader: '24pt',
        mobileParagraph: '12pt'
      }
    },
  },
  plugins: [],
}) satisfies Config;
