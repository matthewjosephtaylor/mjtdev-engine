import { isDefined, Objects } from "@mjtdev/object";
import { useEffect, useState } from "react";
import { Grid } from "./Grid";

export type FormValueType = "string" | "number" | "boolean" | "color";

export const INPUT_VALUE_CONTROLS: Record<
  FormValueType,
  (key: string, value?: string) => JSX.Element
> = {
  string: (key, value) => (
    <input key={`${key}-${value}`} name={key} defaultValue={value}></input>
  ),
  number: (key, value) => (
    <input
      // key={`${key}-${value}`}
      key={key}
      name={key}
      defaultValue={value}
      type="number"
    ></input>
  ),
  boolean: (key, value) => (
    <input
      // key={`${key}-${value}`}
      key={key}
      name={key}
      defaultValue={value}
      type="checkbox"
    ></input>
  ),
  color: (key, value) => (
    <input
      // key={`${key}-${value}`}
      key={key}
      name={key}
      defaultValue={value}
      type="color"
    ></input>
  ),
};

export const formEntryToFormLine = (key: string, valueType: FormValueType) => {
  return [<div key={key}>{key}</div>, INPUT_VALUE_CONTROLS[valueType]];
};

export const Form = <R extends Record<string, FormValueType>>({
  format,
  initial = {},
  onChange = () => {},
  onSubmit = () => {},
  submitText = "Ok",
}: {
  readonly format: R;
  readonly initial?: Partial<Record<keyof R, string>>;
  onChange?: (record: Partial<Record<keyof R, string>>) => void;
  onSubmit?: (record: Partial<Record<keyof R, string>>) => void;
  submitText?: string;
}) => {
  const [record, setRecord] = useState({ ...initial });

  const [formLines, setFormLines] = useState<JSX.Element[]>([]);

  useEffect(() => {
    onChange(record);
  }, [record]);

  useEffect(() => {
    console.log({ initial });
    setFormLines(
      Objects.mapOf(format, (key, value) => {
        return [
          <div key={`lbl-${key}`}>{key}</div>,
          INPUT_VALUE_CONTROLS[value](key, initial[key]),
        ];
      }).flat()
    );
  }, [initial, format]);

  return (
    <form
      onChange={(evt) => {
        const { target } = evt;
        if (target instanceof HTMLInputElement) {
          const { name, value } = target;
          setRecord({ ...record, [name]: value });
        }
      }}
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit(record);
      }}
    >
      <Grid
        style={{ margin: "auto" }}
        cellSize={"min-content"}
        direction="row"
        gap="2em"
      >
        <Grid
          style={{ margin: "auto" }}
          cellSize={"min-content"}
          count={2}
          gap="0.5em"
          direction="column"
        >
          {formLines}
          <button>{submitText}</button>
        </Grid>
      </Grid>
    </form>
  );
};
