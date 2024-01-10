import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Quotes({ category }) {
  const [data, setData] = useState([]);
  const [loadState, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'PR9OrpSi7kbt4/xm76yLrQ==GDPbm1EnnixMX3cm';
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }
  const [fetchQuote] = data;
  return (
    <div className="quote-display">
      <h2>
        Quotes about
        {' '}
        {category}
      </h2>
      <ul>
        <li>
          <p>
            {fetchQuote.quote}
          </p>
          <p>
            {fetchQuote.author}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Quotes;

Quotes.propTypes = {
  category: PropTypes.string,
};

Quotes.defaultProps = {
  category: '',
};
