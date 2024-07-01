import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import fgy from '../assets/fgy.png'
import rhi from '../assets/rhf.png'

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeaturedScoresGrid() {
  return (
    <div className=''>
      <h2 className="text-sm font-medium text-gray-500">Recent Scores</h2>
      <ul role="list" className="mt-3 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-lg shadow-sm">
            <div className="flex flex-1 items-center justify-between truncate sm:text-base text-xs border rounded-lg p-2 border-gray-200 bg-white">
              <div className='flex flex-col font-semibold'>
                <div className='flex'>
                  <img src={rhi} alt='Team 1 Logo' className='sm:h-6 h-4 mr-1'/> RHI
                </div>
                <div className='flex'>
                  <img src={fgy} alt='Team 2 Logo' className='sm:h-6 h-4 mr-1'/> FRA
                </div>
              </div>
              <div className='flex flex-col '>
                <div className='flex'>
                  14
                </div>
                <div className='flex'>
                  6
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex font-semibold'>
                  ELF
                </div>
                <div className='flex text-gray-600'>
                  Jun 23
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}