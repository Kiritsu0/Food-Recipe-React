import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";
import Footer from "../../components/footer";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
    <div>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
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
                "Nothing to show. Search again"
              )}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
