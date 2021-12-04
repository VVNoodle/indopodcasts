import { useState, useEffect } from 'react'
import { MetaTags } from '@redwoodjs/web'

import { TopPodcastsInfinite } from 'src/components/TopPodcastsInfinite/TopPodcastsInfinite'

function HomePage() {
  const [isBottom, setIsBottom] = useState(false)

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setIsBottom(false)
      return
    }
    console.log('Fetch more list items!')
    setIsBottom(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <MetaTags title="Home" />
      <div className="border-b border-gray-200 pt-24 pb-10 ">
        <div className="flex justify-between items-baseline relative">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Podcast Indo
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Lihat rilis podcast-podcast Indonesia yang terpopuler
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-24 lg:grid lg:grid-cols-1 lg:gap-x-8 xl:grid-cols-1">
        <section
          aria-labelledby="product-heading"
          className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
        >
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          <TopPodcastsInfinite
            limit={25}
            isBottom={isBottom}
            setIsBottom={setIsBottom}
          />
        </section>
      </div>
    </>
  )
}

export default HomePage
