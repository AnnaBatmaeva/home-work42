import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch(error) {
        setError('Помилка отриманих данних', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [])

  if (loading) {
    return <p>Завантажуємо данні...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
