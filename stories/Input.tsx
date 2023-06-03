import React from "react";
import PropTypes from "prop-types";

type Props = {
  type?: string;
  placeholder?: string;
  disable?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  noBorder?: boolean;
};

const Input = ({
  type = "text",
  placeholder = "Enter text",
  name,
  value,
  onChange = (e) => console.log(e.target.value),
  label,
  disable,
  noBorder,
}: Props) => {
  return (
    <>
      {label?.length !== 0 && (
        <label className="block mb-2 text-sm">{label}</label>
      )}
      <input
        disabled={disable}
        value={value}
        type={type}
        name={name}
        className={
          disable
            ? "ring-2 ring-gray-200 rounded-lg w-fit px-2 shadow py-1 opacity-50 cursor-not-allowed"
            : noBorder
            ? "ring-0 outline-none border-none bg-gray-50 shadow rounded-lg w-fit px-2 py-1 opacity-100"
            : "ring-2 ring-gray-200 rounded-lg w-fit px-2 py-1 shadow opacity-100"
        }
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
