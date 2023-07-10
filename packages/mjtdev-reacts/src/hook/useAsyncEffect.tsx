import React, { useEffect } from "react";

export const useAsyncEffect = async (
  func: () => void | (() => void) | Promise<void | (() => void)>,
  deps?: React.DependencyList,
  destructor?: () => void
) => {
  return useEffect(() => {
    func();
    return destructor;
  }, deps);
};
