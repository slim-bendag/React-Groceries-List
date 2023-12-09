import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm'>
        <input type="text" placeholder="Search" />
        <button
            type='Submit'
        >Search</button>
    </form>
  )
}

export default SearchItem