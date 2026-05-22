export function ErrorScreen({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-semibold text-slate-900">Gagal memuat konten</h1>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex h-10 items-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
        >
          Coba lagi
        </button>
      </div>
    </div>
  );
}
