import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import API from '../utils/API';
import { useSearchGiphy } from '../utils/useSearchGiphyHook';

const SearchResultContainer = () => {
  const {
    search,
    results,
    searchGiphy,
    handleInputChange,
    handleFormSubmit,
  } = useSearchGiphy();
  // 2nd parameter is an array of dependencies
  return (
    <div>
      <SearchForm
        search={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <ResultList results={results} />
    </div>
  );

};

// class SearchResultContainer extends Component {
//   state = {
//     search: "",
//     results: []
//   };
//
//
//   // Life cycle method. React components have life cycle methods
//   // When this component mounts, search the Giphy API for pictures of kittens
//   // only fires one time
//   componentDidMount() {
//     console.log('INSIDE COMPONENT DID MOUNT');
//     this.searchGiphy("kittens");
//   }
//
//   searchGiphy = query => {
//     API.search(query)
//       .then(res => {
//         console.log(res.data);
//         this.setState({ results: res.data.data })
//       })
//       .catch(err => console.log(err));
//   };
//
//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//
//   };
//
//   // When the form is submitted, search the Giphy API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchGiphy(this.state.search);
//   };
//
//   render() {
//     console.log('INSIDE OF RENDER');
//     return (
//       <div>
//         <SearchForm
//           search={this.state.search}
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//         />
//         <ResultList results={this.state.results} />
//       </div>
//     );
//   }
// }

export default SearchResultContainer;
