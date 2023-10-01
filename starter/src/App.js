import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI"
import ListBook from "./ListBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [listAllBook, setListAllBook] = useState([]);
  const [book, setBook] = useState({});
  const [query,setQuery] = useState("");
  const handleChange = (event, bookId) => {
    let shelfChange = event.target.value;

    const listBookUpdate = listAllBook.map((book) => {
      if (book.id === bookId) {
        console.log(book);
        book.shelf = shelfChange;
      }
      return book;
    })
    setListAllBook(listBookUpdate)
  }

  // get list all book from api
  useEffect(() => {
    const getDataInitial = () => {
      getAll()
        .then((data) => {
          setListAllBook([...data])
          return data;
        })
        .catch(error => {
          console.log("error is : " + error);
        })
    }
    getDataInitial();
  }, [query])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBook 
        listAllBook={listAllBook}
        handleChange={handleChange}/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
