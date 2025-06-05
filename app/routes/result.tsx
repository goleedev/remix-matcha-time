import { useSearchParams } from '@remix-run/react';
import { generateGoogleCalendarLink } from '~/utils/calendar';

export default function Result() {
  const [searchParams] = useSearchParams();
  const answer = searchParams.get('answer')?.toLowerCase();
  const isCorrect = answer === 'matcha';

  return (
    <main className="min-h-screen bg-[#e6f4ea] flex items-center justify-center px-4 py-12 font-sans">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 sm:p-12 text-center animate-fade-up">
        <h1
          className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isCorrect
              ? 'text-green-600 animate-bounce'
              : 'text-red-500 animate-shake'
          }`}
        >
          {isCorrect ? '✅ CORRECT!' : '❌ WRONG.'}
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-800 font-bold mb-4">
          {isCorrect
            ? 'You clearly know what time it is. 🍵'
            : 'It’s always matcha time. ALWAYS.'}
        </p>

        <img
          src="/matcha.webp"
          alt="Matcha cup"
          className="w-96 max-w-full rounded-xl shadow-lg mx-auto mb-6 animate-pop-in"
        />

        <p className="text-lg text-zinc-700 mb-4">
          {isCorrect
            ? 'Respect. You’re one of us.'
            : 'But hey, no worries — I’ve got a cup ready for you.'}
        </p>

        <a
          href={generateGoogleCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow animate-fade-up inline-block"
        >
          🍵 Add Matcha Time to Google Calendar
        </a>
      </div>
    </main>
  );
}
