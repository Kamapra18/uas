"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "../lib/supabase/client";
import ModalForm from "./ModalForm";

type BookCardProps = {
  id: number;
  judul: string;
  penulis: string;
  genre: string;
  deskripsi: string;
  cover_url: string;
  onBookUpdated?: () => void;
  showTitle?: boolean;
};

export default function BookCard({
  id,
  judul,
  penulis,
  genre,
  deskripsi,
  cover_url,
  onBookUpdated,
}: BookCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(`Hapus buku "${judul}"?`);
    if (!confirmed) return;

    await supabase.from("buku").delete().eq("id", id);
    onBookUpdated?.();
  };

  return (
    <div id="book">
      <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm border border-orange-100">
        <div className="flex gap-5">
          <div className="flex-shrink-0 w-24 h-36 rounded-lg overflow-hidden shadow-sm bg-gray-100">
            {cover_url ? (
              <Image
                src={cover_url}
                alt={judul}
                width={100}
                height={144}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                No Image
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-lg font-serif font-bold text-black leading-tight">
                {judul}
              </h2>
              <p className="text-sm text-gray-600">By {penulis}</p>
              <p className="text-sm text-[#FF8A00] mt-1 font-semibold">
                {genre}
              </p>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {deskripsi}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm px-4 py-1.5 rounded-md border border-[#1E3A8A] text-[#1E3A8A] hover:bg-orange-50 transition">
                Update
              </button>
              <button
                onClick={handleDelete}
                className="text-sm px-4 py-1.5 rounded-md border border-red-500 text-red-500 hover:bg-red-50 transition">
                Delete
              </button>
            </div>
          </div>
        </div>

        {isEditing && (
          <ModalForm
            onClose={() => setIsEditing(false)}
            onBookAdded={onBookUpdated ?? (() => {})}
            bookData={{ id, judul, penulis, genre, deskripsi, cover_url }}
          />
        )}
      </div>
    </div>
  );
}
