import ReactDOM from "react-dom/client";

export type RenderControl = {
  dispose: () => void;
  root: ReactDOM.Root;
  container: HTMLElement;
};
