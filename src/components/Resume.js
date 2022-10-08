import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';

import url from './PDF/Bree_Van_Eerden_PDF_2022.pdf';
  
export default function Resume() {
      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div>
      <h1>Resume</h1>
      
      <div className="resume">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="./Bree_Van_Eerden_PDF_2022.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }




// import { images, imageNames } from '../Images'
// // import Button from 'react-bootstrap/Button';
// // import Skills from './Skills'

// function Resume() {

//   return (
//     <div>
//       <h1>Resume</h1>

//       <div>test
//       <img src={images} alt="" />
//       <img src={images.TicTacToe} alt="" />
//       <img
//           className="d-block w-100"
//           src={images.other[11].image}
//           alt="First slide"
//         />
//       </div>

//       <img src={images} alt="" />

//       {/* <h2>Software Engineer / Full Stack Developer / Osteopath</h2>
//        <img src={images.other[8].image} alt="" />
//        <h2>Currently for hire</h2>
//        <Button href='/Contact' variant="outline-dark">Contact me here!</Button>
//        <Skills></Skills> */}

//     </div>
//   )
// }

// export default Resume