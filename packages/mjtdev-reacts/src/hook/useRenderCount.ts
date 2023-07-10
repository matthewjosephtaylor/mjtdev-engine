import { useEffect, useRef } from "react";

export default function useRenderCount() {
  const count = useRef<number>(0);
  function inc() {
    count.current++;
  }
  useEffect(() => inc());
  return count.current;
}
