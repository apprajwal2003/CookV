const steps = [
  {
    iconColor: "bg-amber-100 text-amber-600",
    title: "1. Speak",
    text: 'Find any recipe from our vast library with a simple voice command. "Hey Aura, find a recipe for lasagna."',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    ),
  },
  {
    iconColor: "bg-red-100 text-red-600",
    title: "2. Follow",
    text: 'Get step-by-step audio instructions, set timers, and ask questions. "Aura, what\'s the next step?"',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3"
      />
    ),
  },
  {
    iconColor: "bg-green-100 text-green-600",
    title: "3. Savor",
    text: "Enjoy a perfectly cooked meal without the mess and stress of juggling devices and ingredients.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3-3m-3 18l3-3m-6 0l3 3M12 2a10 10 0 110 20 10 10 0 010-20z"
      />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Cooking Just Got Simpler.
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          In three easy steps, transform your cooking experience from hectic to
          harmonious.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`p-6 rounded-full mb-4 ${step.iconColor}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {step.icon}
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
