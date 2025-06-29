"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/client";
import BookCard from "./BookCard";

interface Book {
  id: number;
  judul: string;
  penulis: string;
  genre: string;
  deskripsi: string;
  cover_url: string;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("buku")
      .select("*")
      .order("created_at", { ascending: false });

    setBooks((data as Book[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="px-6 py-16">
      <h3 className="text-center text-2xl font-bold mb-10 text-[#1E3A8A] font-serif">
        My Book <span className="text-[#FF8A00]">Collection</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full">Loading books...</p>
        ) : (
          books.map((book) => (
            <BookCard key={book.id} {...book} onBookUpdated={fetchBooks} />
          ))
        )}
      </div>
    </section>
  );
}
