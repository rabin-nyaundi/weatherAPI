import React from "react";

export default function CheckBoxInput({
  isChecked,
  name,
  onChange,
}: {
  isChecked: boolean | undefined;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <div className="flex p-4">
      <label className="mx-2" htmlFor={name}>
        <input className="px-2 mx-2" onChange={onChange} type="checkbox" checked={isChecked} />
        {name}
      </label>
    </div>
  );
}
