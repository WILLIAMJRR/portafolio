// import React, { useState } from 'react';
// //ARRAWS
// import arrawr from '../assets/icon/arrowRI.svg';
// import arrawl from '../assets/icon/arrowLE.svg';
// // certificades
// import img1 from '../assets/img/react.png';
// import img2 from '../assets/img/javascrips openboot.png';

// const Carrusel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [img1, img2];

//   const handleClickNext = () => {
//     const newIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   const handleClickPrev = () => {
//     const newIndex = (currentIndex + images.length - 1) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <section className='section flex flex-col'>
//       <div className='container mx-auto mt-8'>
//         <h2 className='h2 text-accent'>certificade.</h2>
//         <div
//           id='default-carousel'
//           className='relative flex flex-col justify-center w-full h-[40rem] '
//         >
//           {/* <!-- Carousel wrapper --> */}
//           <div className=' h-56  overflow-hidden rounded-lg lg:h-[35rem]'>
//             {/* <!-- Item 1 --> */}
//             <div className=' flex items-center duration-700 ease-in-out'>
//               <img
//                 src={images[currentIndex]}
//                 className='absolute block w-[40rem] h-[15rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:h-[30rem]'
//                 alt='...'
//               />
//             </div>
//           </div>

//           {/* <!-- Slider controls --> */}
//           <button
//             type='button'
//             className='btn absolute top-50 left-2 lg:left-[10rem] z-30 flex items-center justify-center h-10 w-10 px-4 cursor-pointer group focus:outline-none'
//             onClick={handleClickPrev}
//           >
//             <img src={arrawl} alt='' />
//             {/* Previous button */}
//           </button>

//           <button
//             type='button'
//             className='absolute btn  top-50 right-2 lg:right-[10rem] z-30 flex items-center justify-center h-10 w-10 px-4 cursor-pointer group focus:outline-none'
//             onClick={handleClickNext}
//           >
//             <img className='text-8xl' src={arrawr} alt='' />

//             {/* Next button */}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carrusel;
