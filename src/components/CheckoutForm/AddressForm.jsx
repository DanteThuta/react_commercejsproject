import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomInput from "./CustomInput";

const AddressForm = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address:
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <CustomInput required name="firstName" label="First Name" />
            <CustomInput required name="lastName" label="Last Name" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
