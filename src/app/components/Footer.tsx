export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyBook. All rights reserved.
      </div>
    </footer>
  );
}
