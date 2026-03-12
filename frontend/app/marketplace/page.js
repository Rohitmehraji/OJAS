const tiles = [
  { title: 'Trending Courses', desc: 'Discover fast-growing classes globally' },
  { title: 'Top Teachers', desc: 'Ranked by ratings and learner success' },
  { title: 'Categories', desc: 'Coding, Languages, Arts, Business, and more' },
  { title: 'Skill Tracks', desc: 'Curated pathways for career or school goals' },
  { title: 'Featured Mentors', desc: 'Handpicked experts for accelerated learning' }
];

export default function MarketplacePage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Marketplace</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tiles.map((tile) => (
          <article key={tile.title} className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-lg">{tile.title}</h3>
            <p className="text-slate-600 mt-2">{tile.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
