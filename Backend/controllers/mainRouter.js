import express from "express";

const mainRouter = express.Router();

mainRouter.use("/", (req, res) => {
  res.json("Welcome to the CookV Backend!");
});

export { mainRouter };
