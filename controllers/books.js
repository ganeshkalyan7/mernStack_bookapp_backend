const booksmodel = require("../model/booksSchems");

exports.createBooks = async (req, res, next) => {
  try {
    const newBook = await booksmodel.create(req.body);
    res.status(201).json({ newBook });
  } catch (err) {
    console.log(err);
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const data = await booksmodel.find();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
exports.updatebooks = async (req, res, next) => {
  try {
    const updateData = await booksmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ updateData });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteBooks = async (req, res, next) => {
  try {
    await booksmodel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "deleted data successfully" });
  } catch (err) {
    console.log(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const getData = await booksmodel.findById(req.params.id);
    res.status(200).json({ getData });
  } catch (err) {
    console.log(err);
  }
};
