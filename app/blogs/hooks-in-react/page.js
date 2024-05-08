import React from 'react'

const hooks = () => {
  return (
    <div className='container m-auto mt-12 flex flex-col gap-6'>
      <h1 className='text-5xl font-bold text-center'>Hooks in React</h1>
     <p>In the 16.8 version of React, Hooks are introduced to developers. When you are building a react application, you require manipulating with the states of your websites in majority cases. Before hooks, only class components could manage state.</p>
    <p>If you have created a function component in React and later need to add state to it, you used to have to convert it to a class component. However, you can now use a Hook within the existing function component to add a state. This way, you can avoid rewriting your code as a class component.</p>
    <p>With hooks, you can use state, manage side effects etc. This makes your code cleaner and more concise.
    </p>
    <p>The most common hooks are useState for managing state, useEffect for managing side effects, and useRef for accessing and storing references to DOM elements or values that persist across renders without causing re-renders.</p>
    <p>In this example, useEffect is used to update the document title with the current count value whenever the count state changes. Initially, the title is set to You clicked 0 times. When the button is clicked, the count state is updated, triggering a re-render, and then the useEffect hook runs again, updating the document title with the new count value. This demonstrates how useEffect allows you to perform side effects in functional components, in this case, updating the document title is dynamically based on component state.</p>
    </div>
  )
}

export default hooks
