import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Search, InputSearchBar } from './styles';

export default function SearchBar({ text }) {
  return (
    <Search>
      <MdSearch
        style={{ marginLeft: '0.7rem', position: 'absolute' }}
        color="#623CEA"
        size="1.5em"
      />
      <InputSearchBar type="text" placeholder={text} />
    </Search>
  );
}
