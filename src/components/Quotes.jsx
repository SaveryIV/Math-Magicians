import { useEffect, useState } from 'react';
import axios from 'axios';
import './Quotes.css';

function Quotes({ category }) {
  const [data, setData] = useState([]);
  const [loadState, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'PR9OrpSi7kbt4/xm76yLrQ==GDPbm1EnnixMX3cm';
  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
      headers: { 'X-Api-Key': apiKey },
    })
    .then((response) => {
      setData(response.data);
      setLoad(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoad(false);
    });
  }, []);

  if (loadState === true) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        Error: {error}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <h2>
        Quotes about {category}
      </h2>
      <ul>
        {data.map((quote, index) => (
          <li key={index}>
            <p>
              {quote.quote}
            </p>
            <p>
              {quote.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
