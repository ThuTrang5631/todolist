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

  const handleDelete = (index) => {

  }

  return (
    <div className='container'>
      <div className='contain-title'>
        <h1>TO DO LIST</h1>
        <img className = 'logo-list' src='list.png'></img>
      </div>
      <div className='block'>
        <div className='input-btn'>
          <input placeholder='Enter todo here...' value={work} onChange = {e => setWork(e.target.value)}></input>
          <button className='btn-add' onClick = {handleSubmit}>Add</button>
        </div>
        <div className='contain-todo'>
          <ul>
            {works.map((work, index) => (
                <div className='todo-detail'>
                <li key={index}>{work} 
                </li>
                <button className='btn-delete' onClick={handleDelete(index)}>Delete</button>
                </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;