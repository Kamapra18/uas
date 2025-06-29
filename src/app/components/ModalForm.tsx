"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase/client";

type ModalFormProps = {
  onClose: () => void;
  onBookAdded: () => void;
  bookData?: {
    id: number;
    judul: string;
    penulis: string;
    genre: string;
    deskripsi: string;
    cover_url: string;
  };
};

export default function ModalForm({
  onClose,
  onBookAdded,
  bookData,
}: ModalFormProps) {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [genre, setGenre] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    if (bookData) {
      setJudul(bookData.judul);
      setPenulis(bookData.penulis);
      setGenre(bookData.genre);
      setDeskripsi(bookData.deskripsi);
      setCoverUrl(bookData.cover_url);
    }
  }, [bookData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      judul,
      penulis,
      genre,
      deskripsi,
      cover_url: coverUrl,
    };

    if (bookData) {
      await supabase.from("buku").update(payload).eq("id", bookData.id);
    } else {
      await supabase.from("buku").insert(payload);
    }

    onBookAdded();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-[#FF8A00] mb-6 text-center">
          {bookData ? "Update Buku" : "Tambah Buku"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
            className="w-full border border-gray-300 focus:border-[#FF8A00] focus:ring-[#FF8A00] p-3 rounded-md transition outline-none"
          />
          <input
            type="text"
            placeholder="Penulis"
            value={penulis}
            onChange={(e) => setPenulis(e.target.value)}
            required
            className="w-full border border-gray-300 focus:border-[#FF8A00] focus:ring-[#FF8A00] p-3 rounded-md transition outline-none"
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="w-full border border-gray-300 focus:border-[#FF8A00] focus:ring-[#FF8A00] p-3 rounded-md transition outline-none"
          />
          <textarea
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
            rows={4}
            className="w-full border border-gray-300 focus:border-[#FF8A00] focus:ring-[#FF8A00] p-3 rounded-md transition outline-none"
          />
          <input
            type="text"
            placeholder="Cover Image URL"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            required
            className="w-full border border-gray-300 focus:border-[#FF8A00] focus:ring-[#FF8A00] p-3 rounded-md transition outline-none"
          />
          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setCoverFile(file);
            }}
            className="w-full border p-3 rounded-md"
          /> */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition">
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-[#FF8A00] text-white hover:bg-orange-600 transition">
              {bookData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
