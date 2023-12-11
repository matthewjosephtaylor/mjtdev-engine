import { isUndefined } from "@mjtdev/object";
import {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { Editor, OnMount } from "@monaco-editor/react";

export const ContentEditable = ({
  id,
  onChange = () => undefined,
  onClick = () => undefined,
  onContextMenu = () => undefined,
  style = {},
  // value = "",
  value,
  autoFocus,
  onMouseUp,
  // onRef = () => undefined,
  tabIndex,
  onKeyDown,
  editable = true,
  title,
  theme = "vs-dark",
}: {
  theme?: string;
  id?: string;
  title?: string;
  editable?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (value: string | undefined) => void;
  onMouseUp?: MouseEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onContextMenu?: MouseEventHandler<HTMLElement>;
}) => {
  const defaultedStyle: CSSProperties = {
    // maxWidth: "80em",
    // minWidth: "20em",
    // minHeight: "3em",
    // maxHeight: "10em",
    // resize: "none",
    ...style,
    overflow: "visible",
  };
  const ref = useRef<HTMLDivElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);

  type OnMountParams = Parameters<OnMount>;
  const [editor, setEditor] = useState<OnMountParams[0]>();
  const [monaco, setMonaco] = useState<OnMountParams[1]>();

  useEffect(() => {
    if (isUndefined(editor)) {
      return;
    }
    if (!ref.current?.parentElement) {
      return;
    }
    const parent = ref.current.parentElement;
    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      editor.layout({
        width,
        height,
      });
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(ref.current.parentElement);
    return () => {
      observer.disconnect();
    };
  }, [ref, editor, monaco]);

  return (
    <div
      className="content-editable"
      ref={ref}
      title={title}
      onKeyDown={onKeyDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      onContextMenu={onContextMenu}
      style={defaultedStyle}
    >
      <Editor
        theme={theme}
        // language=""
        language="Markdown"
        onMount={(editor, monaco) => {
          if (autoFocus) {
            editor.focus();
          }
          setEditor(editor);
          setMonaco(monaco);
        }}
        options={{
          contextmenu: false,
          lineNumbers: "off",
          wordWrap: "on",
          lineDecorationsWidth: 0,
          // automaticLayout: true,
          scrollBeyondLastLine: false,
          // selectionHighlight: false,
          selectionHighlight: false,

          minimap: {
            enabled: false,
          },
          // pasteAs: {}
        }}
        // defaultValue={value}
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
      />
      <div ref={statusBarRef}></div>
    </div>
  );
};
