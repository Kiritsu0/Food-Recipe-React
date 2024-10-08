import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { ThreeCircles } from "react-loader-spinner";

const Details = () => {
  const params = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
    loading,
    setLoading,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetailsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
        );
        const data = await response.json();

        if (data?.data) {
          setRecipeDetailsData(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setRecipeDetailsData("");
      }
    };

    getRecipeDetailsData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-full w-full mt-20 flex justify-center items-center">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#eb8787"
            ariaLabel="three-circles-loading"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-5 mx-5 mb-5">
          <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
              <img
                src={recipeDetailsData?.recipe?.image_url}
                className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">
              {recipeDetailsData?.recipe?.publisher}
            </span>
            <h3 className="font-bold text-2xl truncate text-black">
              {recipeDetailsData?.recipe?.title}
            </h3>
            <div>
              <button
                onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
              >
                {favoritesList &&
                favoritesList.length > 0 &&
                favoritesList.findIndex(
                  (item) => item.id === recipeDetailsData?.recipe?.id
                ) !== -1
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </button>
            </div>
            <div>
              <span className="text-2xl font-semibold text-black">
                Ingredients:
              </span>
              <ul className="flex flex-col gap-3 p-3 max-h-56 list-disc list-inside overflow-auto">
                {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                  <li>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
