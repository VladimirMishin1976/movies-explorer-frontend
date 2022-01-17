import React from "react";

function useInput(initialValue) {

  const [value, setValue] = React.useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  }

  const clear = () => {
    setValue('');
  }

  return {
    input: { value, onChange },
    value, clear, onChange
  }
}

export default useInput;