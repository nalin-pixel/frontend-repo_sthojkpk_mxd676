import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Workshop: Vehicle Dynamics 101',
    date: 'Nov 25, 2025',
    time: '5:00 PM – 7:00 PM',
    location: 'Mechanical Lab, IIITDM Kurnool',
    description:
      'Hands-on session covering suspension geometry, weight transfer, and tire models with interactive demos.',
  },
  {
    title: 'Guest Talk: FSAE Journey',
    date: 'Dec 10, 2025',
    time: '6:00 PM – 7:30 PM',
    location: 'Seminar Hall A',
    description:
      'Alumni share their experience from concept to competition in Formula Student. Open Q&A included.',
  },
  {
    title: 'Design Review: Electric Kart',
    date: 'Jan 12, 2026',
    time: '4:30 PM – 6:30 PM',
    location: 'Project Bay',
    description:
      'Cross-team critique on chassis, powertrain, and controls. All members welcome to contribute.',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Upcoming Events</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{e.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
                <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-600" /> {e.date}</div>
                <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-blue-600" /> {e.time}</div>
                <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> {e.location}</div>
              </div>
              <p className="mt-3 text-slate-600 text-sm">{e.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
