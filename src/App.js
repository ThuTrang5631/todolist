import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [work, setWork] = useState('')
  const [works, setWorks] = useState(()=>{
    const storageWorks = JSON.parse(localStorage.getItem('works')) ?? []
    return storageWorks 
  })

  const handleSubmit = () => {
    setWorks(prev => {
      const newWorks = [...prev, work]
      
      //save to localStorage
      localStorage.setItem('works', JSON.stringify(newWorks))
      return newWorks
    })
    setWork('')
  }

  return (
    <div className='container'>
      <h1>TO DO LIST</h1>
      <div className='block'>
      <div className='input-btn'>
        <input placeholder='Enter todo here' value={work} onChange = {e => setWork(e.target.value)}></input>
        <button onClick = {handleSubmit}>Add</button>
      </div>
      <ul>
        {works.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;