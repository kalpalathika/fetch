import { AgeSlider } from "./AgeSlider";
import { BreedSelect } from "./BreedSelect";
import { SortSelect } from "./SortSelect";


interface DesktopFiltersProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const DesktopFilters = ({ onSubmit }: DesktopFiltersProps) => {
  return (
    <form onSubmit={onSubmit} className="hidden lg:flex lg:flex-col lg:gap-8">
      <h3 className="sr-only">Categories</h3>
      <BreedSelect />
      <AgeSlider />
      <SortSelect />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:opacity-75 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's Go
        </button>
      </div>
    </form>
  );
};