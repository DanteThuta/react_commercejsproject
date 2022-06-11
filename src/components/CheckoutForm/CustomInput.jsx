import React from "react";
import { Input, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <Input {...field} />}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
};

export default CustomInput;