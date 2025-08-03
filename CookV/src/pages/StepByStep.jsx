import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Mic, Play, Pause } from "lucide-react"; // modern icons

export default function StepByStep() {
  const { id } = useParams();
  const [recipeName, setRecipeName] = useState("");
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipe/${id}`);
        const recipeDetails = response.data;
        setRecipeName(recipeDetails.name);
        setRecipeSteps(recipeDetails.steps || []);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        {recipeName}
      </h1>

      {/* Voice Assistant Bar */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-4 rounded-2xl shadow-lg mb-8">
        <p className="text-white text-lg font-medium">
          Voice Assistant Controls
        </p>
        <div className="flex gap-3">
          <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <Mic className="text-red-500 w-6 h-6" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <Play className="text-green-500 w-6 h-6" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <Pause className="text-blue-500 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {recipeSteps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-none last:pb-0"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold">
              {index + 1}
            </div>
            <p className="text-gray-700 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
