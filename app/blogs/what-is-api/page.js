import React from 'react'

const api = () => {
  return (
    <div className='container m-auto mt-12 flex flex-col gap-6'>
      <h1 className='text-5xl font-bold text-center'>What is API?</h1>
     <p>Suppose, we are sitting in a restaurant for dinner. So, first to order a food we see whats available on menu. Then we ask waiter that the item is available or not. If item is available waiter will take our order and ask chef who is present in a kitchen to prepare food for us. After preparing food chef will give our order to waiter and then waiter will give it back to us. So, this is how actually an API works.</p>
    <p>In terms of API, we can say that we as application or user which sends request, Waiter as API which takes our request and send it to chef and chef or kitchen as backend or server which takes action according to our request and send it back to API i.e. waiter. This is how actually things work in backend.</p>
    <p>Suppose, you have Instagram Account. When you open your account, you can see many features are there ( Finding mentions, Finding hash-tagged photos, stories, posts etc ). The process through which you do all these things is done by API.</p>
    </div>
  )
}

export default api
