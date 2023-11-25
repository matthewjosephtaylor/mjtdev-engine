import { CSSProperties } from "react";
import { Grid } from "./Grid";

export const ButtonGroup = ({
  actions,
  count = 5,
  style = {},
  buttonStyle = {},
}: {
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
  actions: Record<string, () => void>;
  count?: number;
}) => {
  const contents = Object.entries(actions).map((entry) => {
    const [key, value] = entry;
    return (
      <input
        style={{
          width: "min-content",
          textTransform: "capitalize",
          ...buttonStyle,
        }}
        onClick={value}
        key={key}
        type="button"
        value={key}
      />
    );
  });
  return (
    <Grid
      direction="column"
      gap={"0.3em"}
      cellSize={"min-content"}
      style={{ whiteSpace: "nowrap", ...style }}
      count={count}
    >
      {contents}
    </Grid>
  );
};
