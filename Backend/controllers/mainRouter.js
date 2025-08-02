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

mainRouter.use("/", (req, res) => {
  res.json("Welcome to the CookV Backend!");
});

export { mainRouter };
