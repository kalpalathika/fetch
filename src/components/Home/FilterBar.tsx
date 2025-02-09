'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { BreedSelect } from './Filter/BreedSelect'
import { AgeSlider } from './Filter/AgeSlider'
import { SortSelect } from './Filter/SortSelect'
import { DogListing } from './Listing/DogListing';
import { Pagination } from './Pagination/Pagination';
import { useFilter } from '../../hooks/useFilter';


export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const {
    handleSubmit
  } = useFilter()
  return (
    <div className="bg-white w-screen p-4">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
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
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 p-6">
                <h3 className="sr-only">Categories</h3>
                <BreedSelect/>
                <AgeSlider/>
                <SortSelect/>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-[#7d1f70]">Adopt your fur baby</h1>

            <div className="flex items-center">

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form onSubmit={handleSubmit} className="hidden lg:flex lg:flex-col lg:gap-8">
                <h3 className="sr-only">Categories</h3>
                  <BreedSelect />
                  <AgeSlider />
                  <SortSelect/>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let's Go
                  </button>
                </div>
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">              
                <DogListing />
                <div className="mt-8">
                        <Pagination/>
                  </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
