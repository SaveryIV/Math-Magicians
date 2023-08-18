import { useEffect } from 'react';

function Quotes(category) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
