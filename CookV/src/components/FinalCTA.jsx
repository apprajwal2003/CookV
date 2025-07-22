export default function FinalCTA() {
  return (
    <section className="bg-amber-500 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
          Need Any Help?
        </h3>
        <p className="max-w-2xl mx-auto mb-8 text-amber-100">
          Enter your email to get the latest updates and support from our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-300"
          />
          <button className="bg-white text-amber-600 font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
