"use client";

import Hero from "./components/Hero";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BookList />
      <AboutPage />
      <Footer />
    </div>
  );
}
