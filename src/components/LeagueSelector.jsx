import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const leagues = [
  {
    id: 'zzzzzzzzzzzx',
    name: 'European League of Football',
    logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXihcKXcedwC8H7Kozp0XxSyf3hvPlJx4VSw&s',
    shortName: 'ELF'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LeagueSelector() {
  const [selected, setSelected] = useState(leagues[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.logo} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {leagues.map((league) => (
                <ListboxOption
                  key={league.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? 'bg-indigo-600 text-white' : '',
                      !focus ? 'text-gray-900' : '',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    )
                  }
                  value={league}
                >
                  {({ selected, focus }) => (
                    <>
                      <div className="flex items-center">
                        <img src={league.logo} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                          {league.name}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            focus ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  )
}
