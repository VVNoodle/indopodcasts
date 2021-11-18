const PodcastCard = ({ product }) => {
  return (
    <div className="flex flex-col">
      <li
        className={`col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200`}
      >
        <div className="w-full flex flex-col items-start justify-between p-2 space-x-2">
          <img
            className=" w-32 h-32 bg-gray-300 rounded-md flex-shrink-0 self-center"
            src={product.image_url}
            alt=""
          />
          <div className="flex-1 truncate self-start">
            <div className="flex flex-col">
              {product.genres.slice(0, 2).map((genre, index) => {
                return (
                  <span
                    className="mt-2 flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full whitespace-normal"
                    key={`genre${index}`}
                  >
                    {genre}
                    {/* {product.rownum} */}
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
            <p className="mt-1 text-gray-500 text-sm truncate">
              {product.price}
            </p>
          </div>
        </div>
      </li>
      <h3 className="text-gray-900 text-xs font-medium whitespace-normal">
        {product.name}
      </h3>
    </div>
  )
}

export default PodcastCard
