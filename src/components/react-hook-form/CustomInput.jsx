import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
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
  size = "medium",
  type = "text",

  //
  inputContainerClassName = "",

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
    <Box className={inputContainerClassName}>
      <TextField
        {...restFieldProps}
        {...restProps}
        name={name}
        label={label}
        size={size}
        type={type}
        onBlur={handleOnBlur}
        error={Boolean(error)}
        helperText={error?.message || helperText || ""}
        onChange={handleOnChange}
        className="w-100"
      />
    </Box>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,

  trigger: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,

  //
  inputContainerClassName: PropTypes.string,
};
export default memo(CustomInput);
