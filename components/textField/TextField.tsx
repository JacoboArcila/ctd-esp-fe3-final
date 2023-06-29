import React from "react";

const TextField = () => {
  return (
    <div>
      <h1>Text field</h1>
      <TextField
        onChange={onChange}
        value={inputValue(value)}
        label={label}
        name={name}
        inputRef={ref}
        type={showPassword ? "text" : type}
        inputProps={{ maxLength: maxLength }}
        fullWidth
        error={!!errors[name]}
        helperText={`${errors[name]?.message || ""}`}
      />
    </div>
  );
};

export default TextField;
