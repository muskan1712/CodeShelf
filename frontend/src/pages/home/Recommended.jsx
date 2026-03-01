// import React , {useState, useEffect}from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import BookCard from '../books/BookCard';
// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// const Recommended = () => {
//      const {data , books = []} = useFetchAllBooksQuery() ;
//     console.log("API Response:", data)
//     return (
//         <div className = 'py-16'>
//             <h2 className='text-3xl font-semibold mb-6'> 
//                 Recommended for you
//             </h2>
//             <Swiper
//             slidesPerView={1}
//             spaceBetween={60}
//             navigation = {true}
//             breakpoints={{
//             640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//             },
//             768: {
//                 slidesPerView: 1,
//                 spaceBetween: 40,
//             },
//             1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 50,
//             },
//             1180: {
//                 slidesPerView: 2 , 
//                 spaceBetween: 50,
//             }
//             }}
//             modules={[Pagination, Navigation]}
//             className="mySwiper"
//         >
//         {
//             books.length > 0 && books.slice(0,10).map((book , index) => (
//             <SwiperSlide key = {index} >
//                 <BookCard book = {book}/>
//             </SwiperSlide>
//             //  <div>{book.title}</div>
                
//             ))
//         }
        
            
//         </Swiper>
//         </div>
//     )
// }
// export default Recommended ;

// // import React, { useEffect, useState } from 'react'
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // import required modules
// // import { Pagination, Navigation } from 'swiper/modules';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import BookCard from '../books/BookCard';
// // import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


// // const Recommended = () => {
   

// //     const {data: books = []} = useFetchAllBooksQuery();
// //   return (
// //     <div className='py-16'>
// //          <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>


// //          <Swiper
// //                 slidesPerView={1}
// //                 spaceBetween={30}
// //                 navigation={true}
// //                 breakpoints={{
// //                     640: {
// //                         slidesPerView: 1,
// //                         spaceBetween: 20,
// //                     },
// //                     768: {
// //                         slidesPerView: 2,
// //                         spaceBetween: 40,
// //                     },
// //                     1024: {
// //                         slidesPerView: 2,
// //                         spaceBetween: 50,
// //                     },
// //                     1180: {
// //                         slidesPerView: 3,
// //                         spaceBetween: 50,
// //                     }
// //                 }}
// //                 modules={[Pagination, Navigation]}
// //                 className="mySwiper"
// //             >

// //                 {
// //                    books.length > 0 && books.slice().map((book, index) => (
// //                         <SwiperSlide key={index}>
// //                             <BookCard  book={book} />
// //                         </SwiperSlide>
// //                     ))
// //                 }



// //             </Swiper>
// //     </div>
// //   )
// // }

// // export default Recommended
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommended = () => {
   

    const {data: books = []} = useFetchAllBooksQuery();
  return (
    <div className='py-16'>
         <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>


         <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
    </div>
  )
}

export default Recommended