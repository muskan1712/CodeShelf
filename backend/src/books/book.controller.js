const Book = require("./book.model") ;
const postABook = async (req , res) => {
     try{
      const newBook = await Book({...req.body}) ;
      await newBook.save() ;
      res.status(200).send({message: "Data posted successfully", book: newBook}) ;
   } catch (error)
   {
        console.log("Error creating book" , error) ;
        res.status(500).send({message: "Failed to create Book"}) ;
   }
}
//get all books 
const getAllBooks = async (req , res) => {
      try{
            const books = await Book.find().sort({createdAt: -1}) ;
            res.status(200).send(books) ;
      }catch(error)
      {
                console.log("Error fetching data" , error) ;
              res.status(500).send({message: "Failed to fetch data"}) ;
      }
}
const getSingleBook = async (req , res) => {
      try{
            const {id} = req.params ;
            const book = await Book.findById(id);
            if(!book)
            {
                res.status(404).send({message: "Resource not found ! "}) ;
            }
            res.status(200).send(book) ;
      }catch(error)
      {
                console.error("Error fetching data" , error) ;
              res.status(500).send({message: "Failed to fetch data"}) ;
      }
}

//update a book 
const UpdateBook = async (req , res) => {
      try{
          const {id} = req.params ;
          const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new: true}) ;
          if(!updatedBook)
          {
               res.status(404).send({message: "Resource is not found"}) ;
          } 
          res.status(200).send({
            message: "Resource updated successfully" , 
            book: updatedBook
          }) ;
      }catch(error)
      {
            console.error("Error updating data" , error) ;
            res.status(500).send({message: "Failed to update data"}) ;
      }
}
const deleteABook =async (req ,res) => {
     try{
        const {id} = req.params ; 
        const deletedBook = await Book.findByIdAndDelete(id) ;
        if(!deletedBook)
        {
             res.status(404).send({message: "Data is not Found!"}) ;
        }
        res.status(200).send({
            message: "Book deleted successfully" , 
            book : deletedBook 
        })
     }catch(error)
     {
        console.log("Error deleting the data" , error) ;
        res.status(500).send({message: "Failed to delete the data"}) ;
     } 
}
module.exports = {
  postABook , 
  getAllBooks , 
  getSingleBook , 
  UpdateBook , 
  deleteABook
}