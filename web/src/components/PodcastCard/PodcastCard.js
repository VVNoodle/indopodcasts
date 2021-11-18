const PodcastCard = ({ product }) => {
  return (
    <li className={`bg-white rounded-lg`}>
      <div className="w-full grid grid-rows-2 max-w-50">
        <img
          className=" w-32 h-32 max-h-50 max-w-50 bg-gray-300 rounded-md row-start-1"
          src={product.image_url}
          alt=""
        />
        <div className="text-xs row-start-2">
          <div className="flex flex-col">{product.name}</div>
        </div>
      </div>
    </li>
  )
}

export default PodcastCard
