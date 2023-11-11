import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Paramore"]);

  const onAddCategory = (newValue) => {
    if (categorias.includes(newValue)) return;
    setCategorias([newValue, ...categorias]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}></AddCategory>
      {categorias.map((categoria) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};
