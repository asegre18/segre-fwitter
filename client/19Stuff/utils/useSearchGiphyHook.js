import React, { useEffect, useState } from 'react';
import API from './API';

export const useSearchGiphy = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchGiphy('kitten');
  }, [])

  const searchGiphy = query => {
    API.search(query)
      .then(res => {
        setResults(res.data.data)
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setSearch(value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    searchGiphy(search);
  };

  return {
    search,
    results,
    searchGiphy,
    handleInputChange,
    handleFormSubmit,
  }
}
