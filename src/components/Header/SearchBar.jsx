import React from 'react'

const SearchBar = () => {


  return (

    <>
      <div className='searchBar'>
        <input className='inputStyle' type="text" placeholder='Search...' />
        <img className='searchImg' src="/public/search.png" alt="" />
      </div>
    </>
  )
}

export default SearchBar
