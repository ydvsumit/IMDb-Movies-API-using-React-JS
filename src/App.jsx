import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('');
  const [showData, setShowData] = useState();

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSearch = () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c511ca8e9msh8c9f270c8386d28p1454a2jsnfde83e4c5e48',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + input, options)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then((data) => {
        const list = data.d;
        // list.map((item) => {
        //   const name = item.l;
        //   const poster = item.i.imageUrl;
        //   const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
        setShowData(list)
      })

      .catch(err => console.error(err));
  }

  return (
    <div className='style'>
      <input type='text' placeholder='Enter your genre' value={input} onChange={handleChange} />
      <br />
      <button onClick={handleSearch}>Search</button>
      <br />
      <div className='movies'>
        {showData && showData.map((item) => {
          return (
            <li key={item.id}><img src={item.i.imageUrl} /><h2>{item.l}</h2></li>
          )
        })}
      </div>
    </div>
  )
}

export default App