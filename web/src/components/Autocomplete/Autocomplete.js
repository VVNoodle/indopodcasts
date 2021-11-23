import Autosuggest from 'react-autosuggest'
import { connectHighlight } from 'react-instantsearch-core'
import { Link, routes } from '@redwoodjs/router'

const suggestion = (hit, index) => {
  return hit.isHighlighted ? (
    <mark key={`${hit.value}${index}`} className="bg-green-200">
      {hit.value}
    </mark>
  ) : (
    <span key={`${hit.value}${index}`}>{hit.value}</span>
  )
}

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  })
  return (
    <div className="self-center text-gray-500 text-sm cursor-pointer w-full">
      <span>{parsedHit.map(suggestion)}</span>
    </div>
  )
}

const CustomHighlight = connectHighlight(Highlight)

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', hits: [] }
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(props) {
    this.setState({ hits: !this.state.value ? [] : props.hits })
  }
  render() {
    const { refine } = this.props
    return (
      <Autosuggest
        renderInputComponent={(inputProps) => (
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-300 focus-within:border-green-400">
            <input
              {...inputProps}
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Cari Podcast"
            />
          </div>
        )}
        renderSuggestionsContainer={({ containerProps, children }) => {
          return (
            <div
              {...containerProps}
              className="absolute border-l-2 border-r-2 border-b-2 rounded-md border-white bg-white w-96 z-10 shadow-lg"
            >
              {children}
            </div>
          )
        }}
        className="absolute"
        suggestions={this.state.hits}
        multiSection={false}
        onSuggestionsFetchRequested={({ value }) => refine(value)}
        onSuggestionsClearRequested={() => this.setState({ hits: [] })}
        getSuggestionValue={(hit) => hit.title}
        renderSuggestion={(hit) => (
          <Link
            to={routes.podcastDetail({
              name: encodeURIComponent(hit.title),
            })}
          >
            <div className="flex  z-10 border-t-2 w-96 border-gray-200 py-2">
              <img className="w-10 mr-2" src={hit.artwork_image} alt="" />
              <CustomHighlight
                attribute="title"
                hit={hit}
                nonHighlightedTagName="span"
                tagName="strong"
              />
              {/* <CustomHighlight attribute="publisher" hit={hit} /> */}
            </div>
          </Link>
        )}
        inputProps={{
          placeholder: 'Cari Podcast',
          value: this.state.value,
          onChange: (event, { newValue, method }) => {
            this.setState({ value: newValue })
          },
        }}
        renderSectionTitle={(section) => section.index}
        getSectionSuggestions={(section) => section.hits}
      />
    )
  }
}
