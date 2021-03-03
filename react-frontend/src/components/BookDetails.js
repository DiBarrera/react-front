import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const BookDetails = () => {
    const {books} = useParams()
    const [book, setBook] = useState({});
    useEffect(() => {
        const getBook = async () => {
            const onlyBook = await axios.get(`http://localhost:3001/${books}`)
            setBook(onlyBook.data)
                console.log(onlyBook, books)
        }
        getBook()
    }, []) 

    return (
        <div>
            <>
                <p>{book.title}</p>
                {/* <p>{book.author.name}</p> */}
                <p>{book.description}</p>
                <p>{book.pages}</p>
            </>
        </div>
    )
}

export default BookDetails
