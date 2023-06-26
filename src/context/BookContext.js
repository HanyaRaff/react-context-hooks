import React, { createContext, useEffect, useReducer } from 'react'
import BookReducer from '../reducer/BookReducer'

export const BookContext = createContext()

export function BookContextProvider(props) {

  const [books, dispatch] = useReducer(BookReducer,[],()=>{
    const data = localStorage.getItem('books')
   const book = JSON.parse(data)
   return data ? book : []
  })

  useEffect(()=>{
    localStorage.setItem('books' , JSON.stringify(books))
  },[books])

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}
