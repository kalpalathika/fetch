import { FunnelIcon } from '@heroicons/react/20/solid';

interface HeaderProps {
  onOpenMobileFilters: () => void;
}

export const Header = ({ onOpenMobileFilters }: HeaderProps) => {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
      <h1 className="text-4xl font-bold tracking-tight text-[#7d1f70]">Adopt your fur baby</h1>

      <div className="flex items-center">
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="-m-2 ml-6 p-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
};