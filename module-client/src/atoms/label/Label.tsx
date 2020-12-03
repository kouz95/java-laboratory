import React from "react";

interface LabelProps {
  title: string;
}

const Label = (props: LabelProps) => {
  return (
    <p>{props.title}</p>
  );
}

export default Label;