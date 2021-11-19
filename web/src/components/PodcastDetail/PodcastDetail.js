/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

export default function PodcastDetail({ podcast }) {
  return (
    <GlobalLayout>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[podcast].map((foo) => (
          <li
            key={foo.name}
            className="col-span-1 flex flex-col text-center bg-white rounded-sm shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-md"
                src={foo.image_url}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {foo.name}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{foo.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3 text-justify">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-sm">
                    {foo.description}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex"></div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${foo.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </GlobalLayout>
  )
}
