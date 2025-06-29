export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#FF8A00]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">
          Tentang <span className="text-[#1E3A8A]">Aplikasi</span>
        </h1>

        <p className="text-lg text-white/90 mb-10 leading-relaxed">
          <strong>MyBook Collection</strong> adalah aplikasi sederhana untuk
          mencatat dan mengelola koleksi buku secara online. <br />
          Proyek ini dikembangkan sebagai bagian dari tugas akhir mata kuliah{" "}
          <em>Pemrograman Web</em> menggunakan <br />
          <span className="font-semibold">Next.js & Supabase.</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex justify-center mt-10">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-orange-200 w-full md:w-3/4">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">
            Fungsi Utama
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#1E3A8A] text-base">
            <li>Menambah buku baru ke koleksi pribadi</li>
            <li>Melihat dan mengelola koleksi buku dengan mudah</li>
            <li>
              Menikmati desain minimalis yang responsif di semua perangkat
            </li>
            <li>Mengedit atau menghapus data buku dengan cepat</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-16 text-white/80 text-sm">
        Terima kasih telah mengunjungi aplikasi ini ✨
      </p>
    </section>
  );
}
