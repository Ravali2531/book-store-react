import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setAllBooks(data))
  },[]);

  //delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book deleted successfully!")
      // setAllBooks(data)
    });
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage your books</h2>
      {/* table data */}
      <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Category</th>
          <th>Edit or Manage</th>
        </tr>
      </thead>
      {
        allBooks.map((book, index) => <tbody key={book._id}>
                  <tr>
                    <td>{index+1}</td>
                    <td>{book.booktitle}</td>
                    <td>{book.authorname}</td>
                    <td>{book.category}</td>
                    <td><Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                          <p>Edit</p>
                        </Link></td>
                    <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                  </tr>
        </tbody>)
      }
    </table>
    </div>
  )
}

export default ManageBooks