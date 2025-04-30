import { Roboto } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700", "900"],
});

export const dm_sans = DM_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700", "900"],
});
