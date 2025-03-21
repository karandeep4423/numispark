import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function PortfolioModal({ item, isOpen, setIsOpen, t }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative  z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed mt-14 w-full inset-0 z-10 overflow-y-auto">
          <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="relative w-screen transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6">
                {/* Close Button */}
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {item && item.translationName
                    ? t(item.translationName)
                    : "Portfolio Project"}
                </Dialog.Title>

                <div className="mt-2">
                  {item && item.src ? (
                    Array.isArray(item.src) ? (
                      <div className="grid grid-cols-1">
                        {item.src.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Portfolio item ${index + 1}`}
                            className="w-full object-contain"
                          />
                        ))}
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-screen"
                        src={item.src}
                        title={t(item.translationName)}
                      ></iframe>
                    )
                  ) : (
                    null
                  )}

                  {item && item.translationContent && (
                    <p className="text-sm text-gray-500 mt-2">
                      {t(item.translationContent)}
                    </p>
                  )}

                  {item && (
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-500">
                      {item.translationdesign && (
                        <li>{t(item.translationdesign)}</li>
                      )}
                      {item.translationfrontendDevelopment && (
                        <li>{t(item.translationfrontendDevelopment)}</li>
                      )}
                      {item.translationbackendDevelopment && (
                        <li>{t(item.translationbackendDevelopment)}</li>
                      )}
                      {item.translationDatabase && (
                        <li>{t(item.translationDatabase)}</li>
                      )}
                      {item.src && !Array.isArray(item.src) && (
                        <li>
                          <a
                            href={item.src}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                          >
                            Click here to view the website.
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
