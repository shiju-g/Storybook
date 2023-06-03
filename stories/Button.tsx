import React from "react";
import { action } from "@storybook/addon-actions";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
}

export const Button = ({
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ];

  return (
    <button
      {...props}
      onClick={onClick}
      className={`${buttonClasses.join(" ")} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
