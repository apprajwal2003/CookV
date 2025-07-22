export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2025 Aura Chef. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
