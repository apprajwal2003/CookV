import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Aura Chef</h1>
      </div>
    </header>
  );
}
