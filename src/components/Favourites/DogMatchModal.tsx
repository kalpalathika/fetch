
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { DogCard } from '../Home/Listing/DogCard'
import { Dog } from '../../types'

interface DogMatchModalProps {
    dog: Dog 
    onClose: () => void
    isOpen: boolean

}
export const DogMatchModal = ({dog, onClose,isOpen}: DogMatchModalProps) => {

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                data-autofocus
                onClick={() => onClose()}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 hover:cursor-pointer sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
            <div className="bg-white flex justify-center items-center px-4 pt-5 pb-10 sm:p-6 sm:pb-12">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900 pb-8">
                    Pawsome News! You've Found Your Furry Best Friend!
                  </DialogTitle>
                  <DogCard dog={dog} isHeartRequired={false} />
                </div>
              </div>
            </div>
           
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
