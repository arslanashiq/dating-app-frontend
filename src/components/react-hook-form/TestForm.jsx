import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import CustomInput from "./CustomInput";

export default function TestFrom() {
  let schema = object({
    name: string().required("Name is Required"),
    email: string().email().required("Email is required"),
  });

  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, trigger, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "" },
  });
  const onSuccess = (data) => {
    console.log(data, "Success");
  };
  return (
    <form className="mt-4" onSubmit={handleSubmit(onSuccess)}>
      <Stack spacing={2}>
        <CustomInput
          name="name"
          label="Name"
          control={control}
          // trigger={trigger}
        />

        <CustomInput
          name="email"
          label="Email"
          control={control}
          // trigger={trigger}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
