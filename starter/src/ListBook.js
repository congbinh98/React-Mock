const ListBook = ({ listAllBook, handleChange, showSearchPage, handleSearch }) => {
    let arrayTransfer = [...listAllBook]
    // console.log(arrayTransfer);
    //get list book current reading
    let listCurrentReading = arrayTransfer.filter((book) => {
        return book.shelf === "currentlyReading"
    })

    //get list book read 
    let listRead = arrayTransfer.filter((book) => {
        return book.shelf === "read"
    })
    //get list book want to read 
    let listWantToRead = arrayTransfer.filter((book) => {
        return book.shelf === "wantToRead"
    })

    showSearchPage = false;
    return (
        <div>
            {
                showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a
                                className="close-search"
                                onClick={() => handleSearch()}
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
                )
                    : (
                        <div>
                            <div className="list-books">
                                <div className="list-books-title">
                                    <h1>MyReads</h1>
                                </div>
                                <div className="bookshelf">

                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {
                                                listCurrentReading.map((book) => {
                                                    return (
                                                        <li key={book.id}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div
                                                                        className="book-cover"
                                                                        style={{
                                                                            width: 128,
                                                                            height: 193,
                                                                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`

                                                                        }}
                                                                    ></div>
                                                                    <div className="book-shelf-changer">
                                                                        <select onChange={(event) => {
                                                                            handleChange(event, book.id)
                                                                        }}>

                                                                            <option value="none" disabled>
                                                                                Move to...
                                                                            </option>
                                                                            <option value="currentlyReading">
                                                                                Currently Reading
                                                                            </option>
                                                                            <option value="wantToRead">Want to Read</option>
                                                                            <option value="read">Read</option>
                                                                            <option value="none">None</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="book-title">{book.title}</div>
                                                                <div className="book-authors">{book.authors}</div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>

                                <div className="bookshelf">

                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {
                                                listWantToRead.map((book) => {
                                                    return (
                                                        <li key={book.id}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div
                                                                        className="book-cover"
                                                                        style={{
                                                                            width: 128,
                                                                            height: 193,
                                                                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`

                                                                        }}
                                                                    ></div>
                                                                    <div className="book-shelf-changer">
                                                                        <select onChange={(event) => {
                                                                            handleChange(event, book.id)
                                                                        }}>
                                                                            <option value="none" disabled>
                                                                                Move to...
                                                                            </option>
                                                                            <option value="wantToRead">
                                                                                Want to Read
                                                                            </option>
                                                                            <option value="read">Read</option>
                                                                            <option value="currentlyReading">Currently Reading</option>
                                                                            <option value="none">None</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="book-title">{book.title}</div>
                                                                <div className="book-authors">{book.authors}</div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>

                                <div className="bookshelf">

                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {
                                                listRead.map((book) => {
                                                    return (
                                                        <li key={book.id}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                    <div
                                                                        className="book-cover"
                                                                        style={{
                                                                            width: 128,
                                                                            height: 193,
                                                                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`

                                                                        }}
                                                                    ></div>
                                                                    <div className="book-shelf-changer">
                                                                        <select onChange={(event) => {
                                                                            handleChange(event, book.id)
                                                                        }}>
                                                                            <option value="none" disabled>
                                                                                Move to...
                                                                            </option>
                                                                            <option value="read">Read</option>
                                                                            <option value="currentlyReading">
                                                                                Currently Reading
                                                                            </option>
                                                                            <option value="wantToRead">Want to Read</option>
                                                                            <option value="none">None</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="book-title">{book.title}</div>
                                                                <div className="book-authors">{book.authors}</div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>

                            </div>
                        </div>

                    )
            }
        </div>

    )
}

export default ListBook