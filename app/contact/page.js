import React from 'react'

export const metadata = {
    title: "Contact - Abhrajit Gupta Blogs",
    description: "Generated by create next app",
};

const Contact = () => {


  return (
    
    <form className='mt-12 flex flex-col justify-center items-center gap-4 p-3'>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="name">Enter your name</label>
          <input className='bg-transparent border border-white px-2 w-[20%] h-10 rounded-lg' type="text" name="name" id="name" />
        </div>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="email">Enter your email</label>
          <input className='bg-transparent border border-white  px-2 w-[40%] h-10 rounded-lg' type="email" name="email" id="email" />
        </div>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="message">Enter your message</label>
          <textarea className='bg-transparent border border-white  w-[60%] h-[200px] p-4 rounded-lg' name="message" id="message">Hi Abhrajit!</textarea>
        </div>
        <button className='bg-gray-900 px-4 py-2 rounded-lg transition-all hover:bg-gray-800' type="submit">Submit</button>
    </form>
  
  )
}

export default Contact