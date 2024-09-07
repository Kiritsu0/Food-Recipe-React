import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-col flex-wrap gap-5">
      {favoritesList && favoritesList.length > 0 ? (
        <h1 className="text-2xl font-semibold text-black self-center">
          My Favorites
        </h1>
      ) : (
        ""
      )}
      <div className="flex flex-wrap justify-center gap-10">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing is Added
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
