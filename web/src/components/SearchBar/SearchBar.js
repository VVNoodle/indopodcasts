import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter'

import '@algolia/autocomplete-theme-classic/'

// Update the import
import { InstantSearch, connectAutoComplete } from 'react-instantsearch-dom'
import Autocomplete from '../Autocomplete/Autocomplete'

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use the search-only-api-key
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: 'title,publisher',
    limitHits: 4,
    perPage: 4,
  },
})
const searchClient = typesenseInstantsearchAdapter.searchClient

const CustomAutocomplete = connectAutoComplete(Autocomplete)

// Update the App component
export default function SearchBar() {
  return (
    <div className="ais-InstantSearch relative w-96">
      <InstantSearch
        indexName="podcasts"
        searchClient={searchClient}
        className="relative"
      >
        <CustomAutocomplete className=""></CustomAutocomplete>
      </InstantSearch>
    </div>
  )
}
