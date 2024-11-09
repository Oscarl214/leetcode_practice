import { plusMinus } from './lib/practice';

export default function Home() {
  const arr = [3, 4, 0, -5, 6, 10, -4];

  const amount = plusMinus(arr);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-7xl font-bold">LEET CODE!</h1>
      <div>{amount[2]}</div>
    </div>
  );
}
