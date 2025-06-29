"use client";

import Image from "next/image";
import { useState } from "react";
import BookFormModal from "./ModalForm";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const handleBookAdded = () => {
    console.log("Buku berhasil ditambahkan!");
    setShowForm(false);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-10 px-6 sm:px-8">
      <div className="hidden md:block absolute top-0 right-0 w-[50%] h-full bg-[#FF8A00] rounded-bl-[200px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-3 md:mb-4 ">
            MYBOOK <span className="text-[#FF8A00]">COLLECTION</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
            Lightweight Article Where Discussing Matters Relating To The Book
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-4">
            <a
              href="#book"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              View Books
            </a>
            <button
              onClick={handleOpenForm}
              className="border border-[#1E3A8A] text-[#1E3A8A] px-5 py-2.5 rounded-md font-semibold hover:bg-[#1E3A8A] hover:text-white transition"
            >
              Tambah Buku
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center">
          <div className="w-[220px] sm:w-[260px] md:w-[360px]">
            <Image
              src="/hero.png"
              alt="Stack of Books"
              width={360}
              height={360}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>


      {showForm && (
        <BookFormModal
          onClose={handleCloseForm}
          onBookAdded={handleBookAdded}
        />
      )}
    </section>
  );
}
