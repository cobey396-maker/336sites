import { faqs } from "@/lib/content";

/**
 * Native <details>/<summary> — keyboard accessible with zero JavaScript.
 */
export function FAQ({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[1.02rem] font-semibold text-ink transition-colors duration-200 hover:bg-surface [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-teal-700 transition-colors duration-200 group-open:border-teal-600 group-open:bg-teal-700 group-open:text-white"
              aria-hidden="true"
            >
              <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
              <span className="absolute h-3.5 w-[1.5px] rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:scale-y-0" />
            </span>
          </summary>
          <div className="px-6 pb-6 pr-16 text-[0.98rem]">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
