import "./App.css";
import { useEffect, useState } from "react";
import {getAll} from "./BooksAPI"
import ListBook from "./ListBook";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [listAllBook,setListAllBook] = useState([]);
  const [book,setBook] = useState({});

  const handleChange = (event, bookId)=>{
    let shelfChange = event.target.value;

    const listBookUpdate = listAllBook.map((book)=>{
      if(book.id === bookId){
        console.log(book);
        book.shelf = shelfChange;
      }
      return book;
    })
    setListAllBook(listBookUpdate)
  }

  // get list all book from api
  useEffect(()=>{
    const getDataInitial = () =>{
      getAll()
    .then((data)=>{
      setListAllBook([...data])
      return data;
    })
    .catch(error=>{
      console.log("error is : "+error);
    })}
    getDataInitial();
  },[])




  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <ListBook
        listAllBook={listAllBook}
        handleChange={handleChange}/>
      )}
    </div>
  );
}

export default App;
