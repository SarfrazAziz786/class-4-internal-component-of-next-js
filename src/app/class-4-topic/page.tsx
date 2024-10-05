import React from 'react'

export default  function ClassTopic() {
  
 
  return (
   
    <div className='ml-4 flex-wrap' >
      <br />
      <h1 className='underline'>Class 4 Topic</h1>
       <br />
       <p>
        we explored Next.js internal components, which play a crucial role in structuring applications. Next.js provides built-in components with partial controls that follow a hierarchical structure: 
        </p><br />
        

        <ul className='list-disc ' >
        <li>
        Layout (layout.tsx): Acts as the parent component for the entire app. It allows us to include persistent elements like a Navbar and Footer on every page.
        </li><br />
      <li>
       Error (error.tsx): A conditional component that renders when an error occurs. By adding 'use client', it manages client-side errors.
       </li><br />
       <li>
      Loading/Suspense (loading.tsx): Displays a loading message when the page is fetching data or loading content, enhancing the user experience.
      </li><br />
      <li>
      Error Not Found (not-found.tsx): Handles 404 errors by displaying a custom “Page Not Found” message when a route doesn't exist.
      </li><br />

      <li>
      Page (page.tsx): The main child component that displays the content of the page once all other conditions (error/loading states) are resolved.
      </li><br />
      </ul>
      <p>
      These components offer fine-grained control over rendering and error handling, ensuring a smooth and dynamic user experience in Next.js applications. 
      </p>
      
    </div>
  )
}


