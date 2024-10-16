import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { memo } from "react";
import { useController } from "react-hook-form";

function CustomInput({
  // required
  name,
  control,
  trigger,
  // default
  label = "",
  onChange = null,
  helperText = "",

  ...restProps
}) {
  // react form hook
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { onBlur, onChange: onInputChange, ...restFieldProps } = field;

  const handleOnChange = (e) => {
    onInputChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  const handleOnBlur = (e) => {
    onBlur(e);
    if (trigger) {
      trigger(name);
    }
  };
  return (
    <TextField
      {...restFieldProps}
      {...restProps}
      name={name}
      label={label}
      onBlur={handleOnBlur}
      error={Boolean(error)}
      helperText={error?.message || helperText || ""}
      onChange={handleOnChange}
    />
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,

  trigger: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
};
export default memo(CustomInput);
