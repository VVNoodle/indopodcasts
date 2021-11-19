import { Link, routes } from '@redwoodjs/router'

const PodcastCard = ({ product }) => {
  return (
    <Link to={routes.podcastDetail({ name: encodeURIComponent(product.name) })}>
      <li className={`bg-white rounded-lg`}>
        <div className="w-full grid grid-rows-podcast max-w-50">
          <img
            className="shadow w-32 h-32 max-h-50 max-w-50 bg-gray-300 rounded-md row-start-1"
            src={product.image_url}
            alt=""
          />
          <div className="mt-1 row-start-2 w-32 h-32 max-h-50 max-w-50 ">
            <div className="flex flex-col text-xs">{product.name}</div>
            <div className="mt-2 flex flex-col text-xs text-gray-400">
              {product.publisher}
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default PodcastCard
