import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const Books = () => {

    const [books, setBook] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const allBooks = await axios.get('http://localhost:3001/')
            console.log(allBooks)
            setBook(allBooks.data)

        }
            getBooks()
    }, [])

    return (
        
        <div>
            {books.map(book => {
                return (<><p>{book.title}</p>
                <Link to = {`/${book._id}`}> More details </Link></>
                        )
                    }
                )
            }
        </div>
    )
}
