import express from "express";

const mainRouter = express.Router();

mainRouter.get("/allRecipes", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Pasta Carbonara",
      description: "A classic Italian pasta dish.",
      image: "/images/carbonara.jpg",
    },
    {
      id: 2,
      name: "Chicken Curry",
      description: "A spicy and flavorful chicken curry.",
      image: "/images/curry.jpg",
    },
    {
      id: 3,
      name: "Vegetable Stir Fry",
      description: "A quick and healthy vegetable stir fry.",
      image: "/images/stirfry.jpg",
    },
  ]);
});

mainRouter.get("/recipe/:id", (req, res) => {
  const recipeId = req.params.id;
  // Simulating fetching recipe details by ID
  const recipeDetails = {
    id: recipeId,
    name: "Sample Recipe",
    steps: [
      "Step 1: Prepare ingredients",
      "Step 2: Cook the main dish",
      "Step 3: Serve and enjoy",
    ],
  };
  res.json(recipeDetails);
});

mainRouter.use("/", (req, res) => {
  res.json("Welcome to the CookV Backend!");
});

export { mainRouter };
