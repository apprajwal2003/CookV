export default function Features() {
  const features = [
    {
      title: "Hands-Free Navigation",
      text: "Browse, select, and start cooking without ever touching a screen. Keep your hands on the food, not your phone.",
    },
    {
      title: "Intelligent Voice Commands",
      text: "Our AI understands natural language. Ask for ingredient substitutions, convert measurements, or repeat a step.",
    },
    {
      title: "Smart Timers",
      text: 'Set multiple, named timers with your voice. "Aura, set a 20-minute timer for the roast."',
    },
    {
      title: "Dynamic Shopping Lists",
      text: "Add ingredients to your shopping list as you discover recipes. The list syncs across your devices.",
    },
    {
      title: "Screen-On Mode",
      text: "For visual cues, the app keeps your screen awake, displaying only the current step in a large, easy-to-read font.",
    },
    {
      title: "Smart Home Integration",
      text: "Connects seamlessly with your smart speakers and other kitchen devices for a truly integrated experience.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Everything You Need for a{" "}
            <span className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">
              Flawless
            </span>{" "}
            Meal
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our features are designed to keep you in flow, from prep to plate.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm transform transition-transform hover:scale-105"
            >
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
