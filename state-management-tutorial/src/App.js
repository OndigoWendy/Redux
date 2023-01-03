import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';

function App() {
  const projects = useSelector(state => state.projects);  // get the projects state from the Redux store
  return (
    <div className="wrapper">
      <h1>Software Engineering Project List</h1>
      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <div>
              Description: {project.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



