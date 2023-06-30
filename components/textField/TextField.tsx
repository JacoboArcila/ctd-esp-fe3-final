import React from "react";
import { Box, Button, FormGroup, IconButton, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
//yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ITextField {
  name: string;
  label: string;
  type: string;
}

type Props = {
  info: ITextField;
};

const TextFieldComponent: FC<Props> = ({ info }: Props) => {
  const shema = yup
    .object({
      name: yup.string().required("El nombre es obligatorio"),
      apellido: yup.string().required("El apellido es obligario"),
      emial: yup
        .string()
        .email("No es un email")
        .required("El email es obligario"),
    })
    .required();

  type FormData = yup.InferType<typeof shema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(shema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      <h1>Text field</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                variant="outlined"
                sx={{ width: "100%" }}
                label="prueba"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
        </FormGroup>
        <Button type="submit">hola</Button>
      </form>

      <TextField
        type={info.type}
        label={info.label}
        name={info.name}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default TextFieldComponent;
