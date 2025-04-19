export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Selamat Datang di SMAP & PanCek
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Sistem Manajemen Administrasi Pemerintahan & Pencatatan Elektronik
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Mulai Sekarang
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Manajemen Dokumen</h3>
          <p className="text-gray-600">
            Kelola dokumen dengan mudah dan efisien
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Data BUJK</h3>
          <p className="text-gray-600">
            Akses dan kelola data Badan Usaha Jasa Konstruksi
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg 