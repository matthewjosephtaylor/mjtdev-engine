import { isDefined, isUndefined } from "@mjtdev/object";
import { Randoms } from "@mjtdev/random";
import React, { ReactNode } from "react";
import { useDesk, useUpdateDesk } from "./../component/Desk";
import { Frag } from "./../component/Frag";
import { useBringToFront } from "./useBringToFront";

export const useAddToDesk = () => {
  const setDeskCtx = useUpdateDesk();
  const windowById = useWindowById();
  const bringToFront = useBringToFront();
  if (isUndefined(setDeskCtx)) {
    throw new Error("No Desk found");
  }
  return (node: ReactNode, id = Randoms.randomUuid()) => {
    const existing = windowById(id);

    if (isDefined(existing)) {
      bringToFront(id);
      return existing;
    }

    const frag = (
      <Frag id={id} key={id}>
        {node}
      </Frag>
    );
    setDeskCtx((ctx) => {
      return {
        nodes: [...ctx.nodes, [id, frag]],
      };
    });
    return frag;
  };
};

export const useWindowById = () => {
  const desk = useDesk();
  return (id: string) => {
    return desk.nodes.find((entry) => {
      return id === entry[0];
    })?.[1];
  };
};
