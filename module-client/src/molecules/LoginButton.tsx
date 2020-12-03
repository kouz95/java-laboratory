import React from "react";
import Button from "../atoms/button/Button";
import Label from "../atoms/label/Label";

interface LoginButtonProps {
  name: string;
}

const LoginButton = (props: LoginButtonProps) => {
  return (
    <Button>
      <Label title={props.name} />
    </Button>
  );
}

export default LoginButton;