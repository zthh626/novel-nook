import classNames from "classnames";
import { HTMLProps } from "react";
import { Button } from "./button";

export function Input(props: HTMLProps<HTMLInputElement>) {
  const _classNames = classNames(
    "py-2 px-4 w-full text-gray-700 rounded-lg border border-gray-300 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
    props.className,
  );
  delete props.className;

  return <input type="search" className={_classNames} {...props} />;
}
