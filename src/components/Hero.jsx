import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DkQz9UG3vY7S8n2w/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              SAEINDIA Club · IIITDM Kurnool
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              A student-led motorsport and mobility community fostering engineering excellence through design,
              fabrication, and competition. We build. We test. We race.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#events" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 transition">Explore Events</a>
              <a href="https://www.saeindia.org/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-white font-medium shadow hover:bg-slate-800 transition">About SAEINDIA</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
