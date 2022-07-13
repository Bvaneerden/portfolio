import { images, imageNames } from '../Images'
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';



const FORM_ENDPOINT = "https://public.herotofu.com/v1/93781c10-0268-11ed-bc36-e1ea9ccadd33"

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };



  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I will be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <h1>Contact me</h1>

      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <Button variant="outline-dark"
          className=""
          type="submit"
        >
          Send a message
        </Button>
        {/* <Button variant="outline-dark">Send a message</Button> */}
      </div>
    </form> 

    </div>
  )
}

export default Contact