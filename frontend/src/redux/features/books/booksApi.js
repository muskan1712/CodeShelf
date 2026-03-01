// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' ;
// // import getBaseUrl from '../../../utils/baseURL';
// // // import { create } from '../../../../../backend/src/books/book.model';
// // // import { UpdateBook } from '../../../../../backend/src/books/book.controller';
// // const baseQuery = fetchBaseQuery({
// //      baseUrl: `${getBaseUrl()}/api/books`, 
// //      credentials: 'include' , 
// //      prepareHeaders: (headers) =>  {
// //         const token = localStorage.getItem('token') ; 
// //         if(token)
// //         {
// //              headers.set('Authorization' , `Bearer ${token}`);
// //         }
// //         return headers ; 
// //      }
// // })
// // const booksApi = createApi({
// //     reducerPath: 'booksApi', 
// //     baseQuery ,
// //     tagTypes: ['Books'],
// //     endpoints : (builder) => ({
// //          fetchAllBooks: builder.query({
// //             query: () => "/", 
// //             providesTags: ["Books"]
// //          }), 
// //          fetchBooksById: builder.query({
// //             query: (id) => `/${id}`, 
// //             providesTags: (results , error, id) => [{type: "Books" , id}]
// //          }), 
// //          addBook: builder.mutation({
// //              query: (newBook) => ({
// //                 url: `/create-book`, 
// //                 method: "POST" , 
// //                 body: newBook
// //              }),
// //              invalidatesTags: ["Books"]
// //          }), 
// //          UpdateBook: builder.mutation({
// //               query: ({id , ...rest}) => ({
// //                 url: `/edit/${id}` , 
// //                 method: "PUT" , 
// //                 body: rest, 
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 }
// //               }), 
// //                invalidatesTags: ["Books"]
// //          }), 
// //          deleteBook: builder.mutation({
// //             query: (id) => ({
// //                 url: `/${id}`, 
// //                 method: "DELETE" , 
// //             }), 
// //             invalidatesTags: ["Books"]
// //          })
// //     })
// // })
// // export const {useFetchAllBooksQuery, useFetchBooksByIdQuery, useAddBookMutation,
// //     useUpdateBookMutation, useDeleteBookMutation
// // } = booksApi;
// // export default booksApi;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import getBaseUrl from '../../../utils/baseURL'

// const  baseQuery = fetchBaseQuery({
//     baseUrl: `${getBaseUrl()}/api/books`,
//     credentials: 'include',
//     prepareHeaders: (Headers) => {
//         const token =  localStorage.getItem('token');
//         if(token) {
//             Headers.set('Authorization', `Bearer ${token}`);
//         }
//         return Headers;
//     }
// })

// const booksApi = createApi({
//     reducerPath: 'booksApi',
//     baseQuery,
//     tagTypes: ['Books'],
//     endpoints: (builder) =>({
//         fetchAllBooks: builder.query({
//             query: () => "/",
//             providesTags: ["Books"]
//         }),
//         fetchBookById: builder.query({
//             query: (id) => `/${id}`,
//             providesTags: (result, error, id) => [{ type: "Books", id }],
//         }),
//         addBook: builder.mutation({
//             query: (newBook) => ({
//                 url: `/create-book`,
//                 method: "POST",
//                 body: newBook
//             }),
//             invalidatesTags: ["Books"]
//         }),
//         updateBook: builder.mutation({
//             query: ({id, ...rest}) => ({
//                 url: `/edit/${id}`,
//                 method: "PUT",
//                 body: rest,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }),
//             invalidatesTags: ["Books"]
//         }),
//         deleteBook: builder.mutation({
//             query: (id) => ({
//                 url: `/${id}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Books"]
//         })
//     })
// })

// export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksApi;
// export default booksApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: "/" }), // 🔥 frontend root
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "books.json",   // 🔥 fetch from public folder
        })
    })
});

export const { useFetchAllBooksQuery } = booksApi;
export default booksApi;
