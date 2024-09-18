import './App.css';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className='container mt-4'>
      <h4 className='text-center display-6 mb-4 '>
        <i className="fa-brands fa-react "></i> React File Upload
        </h4>
      <FileUpload />
    </div>
  );
}

export default App;
