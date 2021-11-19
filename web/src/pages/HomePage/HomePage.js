import { ViewGridIcon } from '@heroicons/react/solid'

import TopPodcastsCell from 'src/components/TopPodcastsCell'
import Sort from 'src/components/Sort'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

function HomePage() {
  return (
    <GlobalLayout>
      {/* <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pt-24 pb-10 ">
          <div className="flex justify-between items-baseline relative">
            <div className="w-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Indo Podcasts
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Lihat rilis podcast-podcast dari Indonesia yang terpopuler
              </p>
            </div>
            <Sort className="flex items-center" />
            <button
              type="button"
              className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View grid</span>
              <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div> */}

      <div className="pt-12 pb-24 lg:grid lg:grid-cols-1 lg:gap-x-8 xl:grid-cols-1">
        <section
          aria-labelledby="product-heading"
          className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
        >
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          <TopPodcastsCell />
        </section>
      </div>
      {/* </main> */}
    </GlobalLayout>
  )
}

export default HomePage
