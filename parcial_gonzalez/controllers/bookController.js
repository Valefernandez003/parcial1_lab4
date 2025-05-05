const Books = require('../models/book')

//GET
exports.getAll = async (req, res) => {
  const books = await Books.find();
  res.json(books);
};

//Books por Id
exports.getById = async(req,res) => {
  const book = await book.findById(req.params.id);
  res.json(book);
}

//POST
exports.create = async (req,res) => {
const newBook = new Books(req.body);
const saved = await newBook.save();
res.status(201).json(saved);
}

//PUT por Id

exports.update = async (req,res) =>{
const update = await Books.findByIdAndUpdate(req.params.id, req.body, {new:true});
res.json(update);
};

//DELETE

exports.delete = async (req,res) => {
  await Books.findByIdAndDelete(req.params.id);
  res.status(204).end();
}

//validaciones
exports.validation = async (req,res) => {
  const bookExists = await Books.findById(bookId);  
  if (!bookExists) {  
    return res.status(404).json({ message: 'El libro no existe.' });  
  }  
}
