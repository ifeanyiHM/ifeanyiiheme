import { ChangeEvent } from "react";

interface TextInputProps {
  name: string;
  value: string;
  onHandleChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    sectionIndex?: number
  ) => void;
}
function TextInput({ name, value, onHandleChange }: TextInputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-xs">
        {name.toUpperCase()}
      </label>
      <input
        type="text"
        name={name}
        placeholder={name}
        value={value}
        onChange={onHandleChange}
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
      />
    </div>
  );
}

export default TextInput;
