import React, { ReactNode } from "react";
import { Grid } from "./Grid";

export const RecordToGrid = <T extends ReactNode>({
  value,
}: {
  value: Record<string, T>;
}) => {
  return (
    <Grid
      direction="column"
      count={2}
      gap="1em"
      cellSize={["max-content", "auto"]}
    >
      {Object.entries(value).map((entry, index) => {
        const [key, value] = entry;
        return (
          <React.Fragment key={index}>
            <div>{key}</div>
            {value}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
