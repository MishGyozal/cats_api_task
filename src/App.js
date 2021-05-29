import  {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Categories from './Categories/Categories';
import ImageContainer from './ImageContainer/ImageContainer';
import './index.scss';


function App() {

  const [category, setCategory] = useState([]);
  const [idCategory, setIdCategory] =  useState(2);
  const [limit, setLimit] = useState(10);

  const addNewImage = () => {
    setLimit(prev => prev + 10)
  }

  

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/categories')
    .then(response => response.json())
    .then(json => setCategory(json))
  }, []);

  const changeCategory = (id) => {
    setIdCategory(id);
    setLimit(10);
  }



  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Categories category={category}  changeCategory={changeCategory}/>
          {/* <div>{limit}</div> */}
          <ImageContainer idCategory={idCategory} limit={limit} addNewImage={addNewImage} />
          {/* <div>{category}</div> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
