import "styled-components";
import { styledTheme } from "../styled/styledTheme";

declare module "styled-components" {
  type StyledTheme = typeof styledTheme;
  interface DefaultTheme extends StyledTheme {}
}
