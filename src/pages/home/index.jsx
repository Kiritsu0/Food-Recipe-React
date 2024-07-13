import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext)

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        recipeList && recipeList.length > 0 ?
          recipeList.map(item => <RecipeItem key={item.id} item={item} />)
          :
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              {
                loading ? "Loading... Please wait!" : "Nothing to show. Search again"
              }
            </p>
          </div>
      }
    </div>
  )
}

export default Home;