import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center mt-12 gap-8">
    <h1 className="text-center font-bold text-5xl">Abhrajit Gupta Blogs</h1>
    <h2 className="font-bold">These are some of my blogs</h2>
    <div className="firstbox flex gap-6">
      <Link href={"/blogs/dom-concepts"} className="popular1 w-72 min-h-[160px] border rounded-lg cursor-pointer border-gray-400 p-4 hover:border-blue-600 hover:text-blue-600">
        <h1 className="font-bold text-lg">WHAT IS DOM?</h1>
        <p>Suppose, you have a HTML document in which you want to create, change or remove any element...Read More</p>
      </Link>
      <Link href={"/blogs/what-is-api"} className="popular2 w-72 min-h-[160px] border rounded-lg cursor-pointer border-gray-400 p-4 hover:border-blue-600 hover:text-blue-600">
        <h1 className="font-bold text-lg">WHAT IS API?</h1>
        <p>Suppose, we are sitting in a restaurant for dinner. So, first to order a food we see whats available on menu...Read More</p>
      </Link>
    </div>
    <div className="secondbox flex gap-6">
      <Link href={"/blogs/hooks-in-react"} className="popular3 w-72 min-h-[160px] border rounded-lg cursor-pointer border-gray-400 p-4 hover:border-blue-600 hover:text-blue-600">
        <h1 className="font-bold text-lg">HOOKS IN REACT</h1>
        <p>In the 16.8 version of React, Hooks are introduced to developers. When you are building a react...Read More</p>
      </Link>
      <Link href={"/blogs/numpy-basics"} className="popular4 w-72 min-h-[160px] border rounded-lg cursor-pointer border-gray-400 p-4 hover:border-blue-600 hover:text-blue-600">
        <h1 className="font-bold text-lg">NUMPY BASICS</h1>
        <p>In the world of programming, we need to work with arrays majority of the time. NumPy enhances...Read More</p>
      </Link>
    </div>
 </div>
  );
}
