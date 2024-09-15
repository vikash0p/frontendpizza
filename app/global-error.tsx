"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()} className="bg-textColor px-6 py-2 rounded-lg">Try again</button>
        </div>
      </body>
    </html>
  );
}
