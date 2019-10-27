import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const ContactMeForm = props => {
  const [name, setName] = useState("");

  return (
    <form>
      <FormControl className="">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={() => {}}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Hi</FormHelperText>
      </FormControl>
    </form>
  );
};

ContactMeForm.propTypes = {};

export default ContactMeForm;
