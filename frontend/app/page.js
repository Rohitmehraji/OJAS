import Link from 'next/link';

const sections = [
  'Trending courses',
  'Top teachers',
  'Categories',
  'Skill tracks',
  'Featured mentors'
];

export default function HomePage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="rounded-2xl bg-brand text-white p-8">
        <h1 className="text-4xl font-bold">OJAS</h1>
        <p className="mt-2 text-indigo-100">Create the world&apos;s largest online teaching marketplace.</p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded-lg px-4 py-2 bg-white text-brand font-medium" href="/marketplace">Explore Marketplace</Link>
          <Link className="rounded-lg px-4 py-2 border border-white" href="/auth">Get Started</Link>
        </div>
      </header>
      <section className="grid md:grid-cols-5 gap-4">
        {sections.map((item) => (
          <div key={item} className="rounded-xl bg-white p-4 border border-slate-200">{item}</div>
        ))}
      </section>
      <section className="grid md:grid-cols-3 gap-4">
        <Link href="/teacher" className="rounded-xl p-6 bg-white border">Teacher Dashboard</Link>
        <Link href="/student" className="rounded-xl p-6 bg-white border">Student Dashboard</Link>
        <Link href="/admin" className="rounded-xl p-6 bg-white border">Admin Panel</Link>
      </section>
    </div>
  );
}
