import { BookOpen } from 'lucide-react';

const posts = [
  {
    title: 'Understanding Aerodynamics in Formula Student',
    excerpt:
      'Dive into downforce, drag, and aero balance. We cover wings, diffusers, and the trade-offs for lap time.',
    link: 'https://www.saeindia.org/',
  },
  {
    title: 'Battery Management for Electric Racecars',
    excerpt:
      'A primer on cell chemistry, thermal management, and BMS strategies for reliability and safety.',
    link: 'https://www.saeindia.org/',
  },
  {
    title: 'Data Acquisition: Turning Telemetry into Pace',
    excerpt:
      'From sensors to insights — how we use logging to guide setup and driver development.',
    link: 'https://www.saeindia.org/',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Scientific Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{p.excerpt}</p>
              <a
                className="mt-4 inline-flex text-sm font-medium text-blue-700 hover:text-blue-800"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                Read more ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
