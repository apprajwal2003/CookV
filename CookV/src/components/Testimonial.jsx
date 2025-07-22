export default function Testimonial() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <img
          src="https://i.pravatar.cc/100?img=1"
          alt="Testimonial author"
          className="w-24 h-24 rounded-full mx-auto mb-6"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x100/FBBF24/FFFFFF?text=User";
          }}
        />
        <blockquote className="max-w-3xl mx-auto text-xl md:text-2xl font-medium text-gray-700 mb-4">
          "Aura Chef has revolutionized my weeknight dinners. I can finally cook
          complex recipes without constantly washing my hands to check my phone.
          It's pure magic!"
        </blockquote>
        <cite className="font-semibold text-gray-800">Sarah J.</cite>
        <p className="text-gray-500">Food Blogger & Beta Tester</p>
      </div>
    </section>
  );
}
