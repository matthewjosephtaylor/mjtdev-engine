import React, { ReactNode } from "react";
import { Grid } from "./Grid";


export const ArrayToGrid = <T extends string | object | number>({
  arr, columns = 2, mapper = (v) => <span>{String(v)}</span>,
}: {
  mapper?: (value: T) => ReactNode;
  arr: T[];
  columns?: number;
}) => {
  return (
    <Grid
      direction="column"
      count={columns}
      gap="1em"
    >
      {arr.map(mapper).map((entry, index) => {
        return <React.Fragment key={index}>{entry}</React.Fragment>;
      })}
    </Grid>
  );
};
