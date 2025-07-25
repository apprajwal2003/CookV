import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2940&auto=format&fit=crop')",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Your Sous Chef is Now Your Voice.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Navigate recipes, control your kitchen, and cook amazing meals—all
          without lifting a finger. Welcome to the future of cooking.
        </p>
        <Link to="/recipe">
          <div className="bg-white text-amber-600 hover:text-white hover:bg-amber-600 font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg inline-block">
            Start Cooking!
          </div>
        </Link>
      </div>
    </section>
  );
}
