export default function ProductItem({ hit, components }) {
  return (
    <div className="aa-ItemContent">
      <div className="aa-ItemTitle">
        <components.Highlight hit={hit} attribute="title" />
      </div>
    </div>
  )
}
