import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {category}
      </h3>

      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image}></GifItem>
          ))}
        </div>
      )}
    </>
  );
};
