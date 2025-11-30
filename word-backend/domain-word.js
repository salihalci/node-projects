const {Schema, model} = require("mongoose");

const WordSchema = new Schema({
  turkish: {
    type: String,
    required: true,
    trim: true
  },
  english: {
    type: String,
    required: true,
    trim: true
  },
  pictureURL: {
    type: String,  // you can store a URL
    required: false
  },
  pictureBase64: {
    type: String,  // you can store a URL
    required: false
  }
});

const WordModel = model("words", WordSchema);

const getWordModel = () => {
    return WordModel;
}
exports.getWordModel = getWordModel;