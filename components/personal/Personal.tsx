import React from "react";
import data from "./data.json";
import { Stack, TextField, Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { ICheckout, ICustomer } from "types";
import Box from "@mui/material/Box";
import TextFieldComponent from "../textField/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  handleNext: (data: ICustomer) => void;
  activeStep: number;
  steps: any;
};

const Personal: React.FC<Props> = ({
  handleNext,
  activeStep,
  steps,
}: Props) => {
  const shema = yup
    .object({
      nombre: yup.string().required("El nombre es obligatorio"),
      apellido: yup.string().required("El apellido es obligario"),
      email: yup
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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {data.map((item, key) => (
          <Controller
            key={key}
            name={item.name as keyof FormData}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                variant="outlined"
                sx={{ width: "100%" }}
                label={item.label}
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
                {...field}
              />
            )}
          />
        ))}
        {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box> */}
        <Button type="submit">Enviar</Button>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default Personal;
