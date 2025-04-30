import { FC, ReactElement } from "react";
import Introduction from "../Pages/introduction";
import Setup from "../Pages/setup";
import Colors from "../Pages/colors";
import Typography from "../Pages/typography";
import Logo from "../Pages/Logo";
import Structure from "../Pages/Structure";
import Navigation from "../Pages/Navigation";
import EnvironmentVars from "../Pages/EnvironmentVars";
import Routing from "../Pages/routing";

export const componentMap: Record<string, ReactElement> = {
  introduction: <Introduction />,
  setup: <Setup />,
  colors: <Colors />,
  typography: <Typography />,
  logo: <Logo />,
  structure: <Structure />,
  navigation: <Navigation />,
  "environment-variables": <EnvironmentVars />,
  routing: <Routing />,
};
