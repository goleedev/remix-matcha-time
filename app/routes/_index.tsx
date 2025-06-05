import { Form } from '@remix-run/react';

export default function Index() {
  return (
    <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-12 font-sans">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 sm:p-12 text-center animate-fade-up">
        <h1 className="text-sm text-zinc-500 uppercase tracking-wide mb-2">
          🙋🏻 Quick quiz
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-8">
          What time is it right now?
        </h2>

        <Form
          method="get"
          action="/result"
          className="w-full flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            name="answer"
            placeholder="No pressure… but there’s only one right answer 😉"
            required
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-green-400 text-base shadow-sm transition"
          />
          <button
            type="submit"
            className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow"
          >
            ✅ Check
          </button>
        </Form>
      </div>
    </main>
  );
}
