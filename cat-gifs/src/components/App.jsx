import { useEffect, useState } from 'react'

function App() 
{
  const RANDOM_CAT_FACT = 'https://catfact.ninja/fact';

  const [phrase, setPhrase] = useState('');
  const [url, setUrl] = useState('');

  function getThreeWords()
  {
    // e.preventDefault();

    const string = phrase.split(' ', 3).join('+');

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=e2euklJKBwF4YpCoGA3yopB13xwZo1PB&q=${string}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      .then(res => res.json())
      .then(data => 
        {
          setUrl(data.data[0].images.original.url);
        });
  }

  useEffect(() =>
  {
    fetch(RANDOM_CAT_FACT)
      .then(response => response.json())
      .then(data => 
        {
          setPhrase(data.fact);
        });
  }, []);

  useEffect(() =>
  {
    if (phrase !== '') getThreeWords();
  }, [phrase]);


  return (
    <>
      <h1> El arroz con leche sabe a pollo </h1>

      <p> { phrase } </p>
      <img src={url} alt="gif" />

      {/* <button onClick={(e) => getThreeWords(e)}> Generate new gif </button> */}
    </>
  );
}

export default App;
