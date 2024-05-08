import React from 'react'


export const metadata = {
    title: "About - Abhrajit Gupta Blogs",
    description: "Generated by create next app",
};
  

const About = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center mt-12 gap-7'>
        <h1 className="font-bold text-5xl text-center">About Me</h1>
        <p className='about'>I, Abhrajit Gupta, a 2nd year engineering student from IT department, am going to share my frontend development experience with you all through blogposts. I am also interested in Machine Learning and currently making a project on it. So, to get all my blog updates you can subscribe to my website. Thanks for reading :)</p>
        <h2 className="techstacks text-3xl font-bold">Tech Stacks on I have worked so far</h2>
        <div className="stacks flex flex-wrap gap-6">
          <img src="react.png" width={200} height={200} alt="" />
          <img className='invert' src="next.svg" width={200} height={200} alt="" />
        </div>
        <button className='bg-gray-900 px-4 py-2 rounded-lg transition-all hover:bg-gray-800 border border-white' type="submit">Subscribe to my website</button>
        
    </div>
  )
}

export default About