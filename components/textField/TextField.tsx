import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TextFieldComponent = () => {

  return (
    <div>
      <h1>Text field</h1>
      <TextField
      />
    </div>
  );
};

export default TextFieldComponent;
