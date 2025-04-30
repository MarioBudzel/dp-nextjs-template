type TThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange";

interface IThemeColorState {
  themeColor: TThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<TThemeColors>>;
}
