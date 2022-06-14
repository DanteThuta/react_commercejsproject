import React from "react";
import { Input, TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      {/* <Controller
        render={({ field }) => <Input {...field} />}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      /> */}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            label={label}
            name={name}
            {...field}
            required
            fullWidth
            value={field.value}
          />
        )}
      />
    </Grid>
  );
};

export default CustomInput;
