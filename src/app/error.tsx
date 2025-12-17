"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-sans text-4xl font-medium tracking-tight text-slate-900">
          Something went wrong
        </h1>
        <p className="font-sans text-lg text-slate-600">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
