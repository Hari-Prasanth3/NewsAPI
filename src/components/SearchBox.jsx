import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'

const SearchBox = ({searchNews}) => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

 return (
    <>
        <Form className='form'>
          <i className='icon'><FaSearch/></i>
            <input  type='text' placeholder='Search' onChange={e => searchNews(e.target.value)}/>
            <Button type='submit' onClick={submitHandler}>Go</Button>
        </Form>
    </>
 )
}

export default SearchBox