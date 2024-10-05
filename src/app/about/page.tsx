import React from 'react'

async function  About() {
  await new Promise ((resolve)=>{ setTimeout(resolve,5000)})
  
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  )
}

export default About
