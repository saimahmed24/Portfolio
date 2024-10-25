import React from 'react'
import './About.css';
export default function About(props) {
 
  return (
    <>
    <div className="container accordion accordion-flush" id="accordionFlushExample" style={{ color: props.theme === 'dark' ? 'white' : 'black'  }}>
    <h1>About Us</h1>
    <div className="accordion-item " style={{backgroundColor: props.theme === 'dark' ? '#495057' : '#d0d0d0', color: props.theme === 'dark' ? 'white' : 'black' }}>
      <h2 className="accordion-header ">
        <button className="accordion-button collapsed " type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ color: props.theme === 'dark' ? 'white' : 'black', backgroundColor: props.theme === 'dark' ? '#2b3035' : '#f8f9fa'}}>
          Who am I?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. <code>Error</code>, ratione quibusdam alias earum quaerat veniam obcaecati ut aliquid aliquam id.</div>
      </div>
    </div>
    {/* <div className="accordion-item " style={{backgroundColor: props.theme === 'dark' ? '#495057' : '#d0d0d0', color: props.theme === 'dark' ? 'white' : 'black' }}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style={{ color: props.theme === 'dark' ? 'white' : 'black', backgroundColor: props.theme === 'dark' ? '#2b3035' : '#f8f9fa'}} >
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item " style={{backgroundColor: props.theme === 'dark' ? '#495057' : '#d0d0d0', color: props.theme === 'dark' ? 'white' : 'black' }}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"  style={{ color: props.theme === 'dark' ? 'white' : 'black', backgroundColor: props.theme === 'dark' ? '#2b3035' : '#f8f9fa'}} >
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div> */}
  </div>
  </>
  )
}
