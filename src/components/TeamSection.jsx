import { Users } from 'lucide-react';

const team = [
  { name: 'Aarav Reddy', role: 'President', dept: 'Mechanical', img: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=400&auto=format&fit=crop' },
  { name: 'Meera Iyer', role: 'Vice President', dept: 'EEE', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Karan Patel', role: 'Technical Lead', dept: 'CSE', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&auto=format&fit=crop' },
  { name: 'Aisha Khan', role: 'Operations Lead', dept: 'ME', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Current Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-black/5 bg-white p-4 text-center shadow-sm">
              <img src={m.img} alt={m.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
              <h3 className="mt-4 text-base font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-blue-700 font-medium">{m.role}</p>
              <p className="text-xs text-slate-600">{m.dept} Dept.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
