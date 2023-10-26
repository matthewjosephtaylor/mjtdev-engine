import { Center } from "./Center";
import { Grid } from "./Grid";
import { textToReactComponents } from "./textToReactComponents";
import { CSSProperties } from "react";

export const TextScreen = ({
  text,
  actions,
  style,
}: {
  style?: CSSProperties;
  text: string;
  actions?: Record<string, () => void>;
}) => {
  return (
    <Center style={style}>
      <Grid direction="row">{textToReactComponents(text, actions)}</Grid>
    </Center>
  );
};
