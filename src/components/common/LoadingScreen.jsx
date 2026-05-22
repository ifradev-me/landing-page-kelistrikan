export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900">
      <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-amber-500 animate-spin" />
      <p className="mt-4 text-sm text-slate-500">Memuat…</p>
    </div>
  );
}
