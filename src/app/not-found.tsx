import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-sans text-6xl font-medium tracking-tight text-slate-900">
          404
        </h1>
        <p className="font-sans text-lg text-slate-600">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
