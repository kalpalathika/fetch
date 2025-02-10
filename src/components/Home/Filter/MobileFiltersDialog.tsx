
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BreedSelect } from './BreedSelect';
import { AgeSlider } from './AgeSlider';
import { SortSelect } from './SortSelect';

interface MobileFiltersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const MobileFiltersDialog = ({ isOpen, onClose, onSubmit }: MobileFiltersDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-40 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              onClick={onClose}
              className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Filters */}
          <form onSubmit={onSubmit} className="mt-4 border-t border-gray-200 p-6">
            <BreedSelect />
            <AgeSlider />
            <SortSelect />
            <div>
              <button
                type="submit"
                className="flex w-full mt-8 justify-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's Go
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};