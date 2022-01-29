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
    value, setValue, clear, onChange
  }
}

export default useInput;