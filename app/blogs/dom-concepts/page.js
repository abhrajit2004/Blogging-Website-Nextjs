import React from 'react'

const dom = () => {
  return (
    <div className='container m-auto mt-12 flex flex-col gap-6'>
      <h1 className='text-5xl font-bold text-center'>What is DOM?</h1>
      DOM stands for Document Object Model.

     <p>Suppose, you have a HTML document in which you want to create, change or remove any element. So, DOM helps you to do the same thing in your document.

     Its used for HTML (Hyper Text Markup Language) and XML (Extensible markup language) documents.

    It is like a tree structure where each node is an object representing a part of the document. Nodes can have event handlers ( click, mouseover ) attached to them. Once an event is triggered, the event handlers get executed.
    
    Text content within an element is represented as a text node in the DOM tree. Text nodes do not have attributes or child nodes, and are always leaf nodes ( a node with zero child ) in the tree. For example, the text content My Website in the title element and Welcome in the h1 element in the above example are both represented as text nodes.
    </p>
    <p>The DOM tree can be manipulated using JavaScript or other programming languages. Common tasks include navigating the tree, adding, removing, and modifying nodes, and getting and setting the properties of nodes. The DOM API provides a set of methods and properties to perform these operations, such as getElementById, createElement, appendChild, and innerHTML.</p>
    <p>In summary, creating a DOM structure involves creating individual nodes and organizing them in a hierarchical structure using JavaScript or other programming languages, and it can be done using several methods depending on the use case and the developers preference.</p>
    <p>Most web browsers use an internal model to render a document such as a HTML page similar to the DOM. When an HTML page is rendered in browsers, the browser downloads the HTML into local memory and automatically parses it to display the page on screen.</p>
    </div>
  )
}

export default dom
