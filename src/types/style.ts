interface EntityStyleGlobal {
  flexDirection?: "column" | "row";
  gap?: number;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: "auto" | number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  width?: string;
  weight?: number;
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignSelf?: "auto" | "center" | "baseline";
  backgroundColor?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRadius?: number;
  cursorPointer?: boolean;
  position?: "fixed" | "relative" | "absolute" | "initial";
  color?: string;
  size?: string;
}

interface EntityTextProps {
  fontSize?: number;
  textTransform?: "capitalize" | "lowercase" | "uppercase" | "none";
  textAlign?: "center" | "right" | "left" | "justify";
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  color?: string;
  cursorPointer?: boolean;
  lineHeigth?: number | string;
  italic?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
