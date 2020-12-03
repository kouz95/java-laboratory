import React from "react";

interface ButtonProps {
  children?: React.ReactNode
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;