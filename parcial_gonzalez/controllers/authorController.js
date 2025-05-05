const Author = require('../models/author')
//GET
exports.getAll = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
};
//Get por Id
exports.getById = async(req,res) => {
  const author = await author.findById(req.params.id);
  res.json(author);
}

//POST
exports.create = async (req,res) => {
const newAuthor = new Author(req.body);
const saved = await newAuthor.save();
res.status(201).json(saved);
}
//PUT
exports.update = async (req,res) =>{
const update = await Author.findByIdAndUpdate(req.params.id, req.body, {new:true});
res.json(update);
};
//DELETE
exports.delete = async (req,res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.status(204).end();
}

//PUT/authors/:id/addBook/:bookId:

exports.addBook = async (req, res) => {
  const { id, bookId } = req.params;
  const author = await Author.findById(id);
  author.books.push(bookId);
  await author.save();
  res.json(author);
};

//validaciones

exports.dontFindAuthor =async (req,res) => {
  const author = await Author.findById(id);  
  if (!author) {  
    return res.status(404).json({ message: 'El autor no existe.' });  
  }  
  
  if (!author.Libros.includes(bookId)) {  
    author.Libros.push(bookId);  
    await author.save();  
  }  
}
