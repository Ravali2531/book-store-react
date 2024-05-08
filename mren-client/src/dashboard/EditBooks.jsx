import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, Table, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {authorname, imageurl, category, bookdescription, booktitle, bookpdfurl } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibiliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (e) => {
      console.log(e.target.value);
      setSelectedBookCategory(e.target.value);
  }

  //handle book submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const booktitle = form.booktitle.value;
    const authorname = form.authorname.value;
    const imageurl = form.imageurl.value;
    const category = form.category.value;
    const bookdescription = form.bookdescription.value;
    const bookpdfurl = form.bookpdfurl.value;

    const updbookObj = {
      booktitle, authorname, imageurl, category, bookdescription, bookpdfurl
    }

     console.log(updbookObj);
    //update book details
    fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      header : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updbookObj)
    }).then(res => res.json()).then(data => {      
      console.log(data);
      alert("Book updated successfully")
    })   
  }

  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the book details</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
          {/* first row */}

          {/* Book title */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="booktitle" value="Book title" />
              </div>
              <TextInput id="booktitle" name='booktitle' type="text" placeholder="Enter Book name" required 
              defaultValue={booktitle}/>
            </div>
            {/* author name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorname" value="Author name" />
              </div>
              <TextInput id="authorname" name='authorname' type="text" placeholder="Enter Author name" required 
              defaultValue={authorname}/>
            </div>
          </div>

          {/* second row */}
          {/* image url */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageurl" value="Book Image Url" />
              </div>
              <TextInput id="imageurl" name='imageurl' type="text" placeholder="Enter Book Image url" required 
              defaultValue={imageurl} />
            </div>
            {/* category   */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value='Category' />
              </div>
              <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
              </Select>
            </div>
          </div>
          
          {/* bookDescription */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookdescription" value="Book Descripiton" />
            </div>
            <Textarea id="bookdescription" className='w-full' name='bookdescription' placeholder="Enter book description..." required rows={4} 
            defaultValue={bookdescription}/>
          </div>

          {/* book pdf link */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookpdfurl" value="PDF Url" />
            </div>
            <TextInput id="bookpdfurl" name='bookpdfurl' type="text" placeholder="Enter book PDF Url" required shadow 
            defaultValue={bookpdfurl}/>
          </div>

          <button type="submit" className='bg-blue-700 text-white font-semibold px-5
            py-2 rounded hover:bg-black transition-all duration-300 mt-5'>Update Book</button>
        </form>
    </div>
  )
}

export default EditBooks