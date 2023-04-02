import CourseForm from './components/CourseForm';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1 style={{
        fontSize:"2.5rem",
        marginBottom: "2rem"
      }}>My Course List</h1>
      <CourseForm/>
    </div>
  );
}

export default App;
