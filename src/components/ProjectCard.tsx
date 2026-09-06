import { ArrowRightIcon } from "@/components/Icons";
import type { Project } from "@/lib/content";

/**
 * Placeholder artwork: a stylised browser frame filled with the project's
 * brand swatch. Drop a real <Image> in here once screenshots exist.
 */
function Thumbnail({ project }: { project: Project }) {
  const [dark, light] = project.swatch;

  return (
    <div
      className="relative aspect-16/10 w-full overflow-hidden rounded-lg"
      style={{ background: `linear-gradient(135deg, ${dark} 0%, ${light} 190%)` }}
      role="img"
      aria-label={`${project.name} website preview placeholder`}
    >
      <div className="absolute inset-x-5 top-5 bottom-0 rounded-t-md bg-white/95 shadow-[0_18px_40px_-18px_rgb(0_0_0/0.45)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-2 h-2.5 flex-1 rounded-full bg-surface" />
        </div>
        <div className="space-y-2.5 p-4">
          <span className="block h-2.5 w-1/3 rounded-full" style={{ background: dark }} />
          <span className="block h-2 w-4/5 rounded-full bg-line" />
          <span className="block h-2 w-3/5 rounded-full bg-line" />
          <span
            className="mt-3 block h-6 w-24 rounded-full"
            style={{ background: light }}
          />
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Placeholder
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white p-4 transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-teal-200 hover:shadow-[var(--shadow-lift)]">
      <Thumbnail project={project} />

      <div className="flex flex-1 flex-col p-3 pt-6">
        <div className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-teal-600">
          {project.industry}
          <span className="h-1 w-1 rounded-full bg-teal-300" aria-hidden="true" />
          <span className="text-subtle">{project.year}</span>
        </div>

        <h3 className="mt-3 text-xl">{project.name}</h3>
        <p className="mt-2.5 text-[0.95rem]">{project.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.scope.map((item) => (
            <li
              key={item}
              className="rounded-full bg-teal-50 px-3 py-1 text-[0.78rem] font-semibold text-teal-700"
            >
              {item}
            </li>
          ))}
        </ul>

        <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-6">
          {project.results.map((result) => (
            <div key={result.label}>
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle">
                {result.label}
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-ink">{result.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-line bg-white p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[var(--shadow-lift)]">
      <Thumbnail project={project} />
      <div className="flex items-end justify-between gap-4 p-3 pt-5">
        <div>
          <h3 className="text-lg">{project.name}</h3>
          <p className="mt-1 text-[0.85rem] text-subtle">{project.industry}</p>
        </div>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-teal-600 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </article>
  );
}
