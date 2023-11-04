const Books = require('../Model/book');

// get Books
exports.getBooks = async (req, res)=>{
    try {
        const data = await Books.find();
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message});
    }
}

// post Book
exports.postBooks = async (req, res)=>{
    try {
        const data = await Books.create(req.body);
        return res.json({errors: false, data: data});
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message});
    }
}

// put or update Book 
exports.putBooks = async (req, res)=>{
    try {
        const data = await Books.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json({errors: false, data: data});
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message});
    }
}

// delete Book
exports.deleteBooks = async (req, res)=>{
    try {
       const data = await Books.findByIdAndDelete(req.params.id);
       return res.json({ errors: false, data: data }); 
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message});
    }
}
