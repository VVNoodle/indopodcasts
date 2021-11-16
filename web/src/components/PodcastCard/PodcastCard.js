const PodcastCard = ({ product }) => {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 h-full">
      <div className="w-full flex items-center justify-between p-2 space-x-6">
        <img
          className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"
          src={product.image_url}
          alt=""
        />
        <div className="flex-1 truncate">
          <div className="flex flex-col items-start ">
            <h3 className="text-gray-900 text-sm font-medium whitespace-normal">
              {product.name}
            </h3>
            {product.genres.slice(0, 2).map((genre, index) => {
              return (
                <span
                  className="mt-2 flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full whitespace-normal"
                  key={`genre${index}`}
                >
                  {genre}
                </span>
              )
            })}
            {product.genres.slice(2, 3).map((_, index) => {
              return (
                <span
                  className="mt-2 flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full whitespace-normal"
                  key={`dll${index}`}
                >
                  ...
                </span>
              )
            })}
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{product.price}</p>
        </div>
      </div>
    </li>
  )
}

export default PodcastCard
