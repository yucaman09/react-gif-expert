import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const valueWithTrim = inputValue.trim()

    if (valueWithTrim.length <= 1) return;

    onNewCategory(valueWithTrim)
    setInputValue('');
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
