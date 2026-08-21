import { experience } from "../../data/experience";
import { Reveal } from "../ui/Reveal";
import { CompanyBlock } from "./CompanyBlock";
import { KeyloopExperience } from "./KeyloopExperience";

export function DetailedTimeline() {
  const current = experience.find((item) => item.current);
  const past = experience.filter((item) => !item.current);

  return (
    <div>
      {current ? (
        <Reveal>
          <KeyloopExperience />
        </Reveal>
      ) : null}

      <ol className="relative mt-10 space-y-10 border-l border-zinc-200 pl-6 sm:mt-14 sm:space-y-14 sm:pl-8 dark:border-zinc-800">
        {past.map((item, index) => (
          <li key={item.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[27px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[35px]"
            >
              <span className="h-3 w-3 rounded-full bg-zinc-300 ring-4 ring-zinc-100 dark:bg-zinc-700 dark:ring-zinc-900" />
            </span>
            <Reveal delay={index * 0.05}>
              <CompanyBlock item={item} />
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
