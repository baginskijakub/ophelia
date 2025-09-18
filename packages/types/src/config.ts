import { ColorsConfig } from "./colors";
import { ComponentsConfig } from "./components";
import { TypographyConfig } from "./typography";

export interface ThemeConfig {
  name: string;
  default: boolean;
  colors: ColorsConfig;
}

export interface Config {
  themes: Array<ThemeConfig>;
  typography: TypographyConfig;
  components: ComponentsConfig;
}
