const {getWordModel} = require("./domain-word");

const WordModel = getWordModel();

const getWordById = (id) => {
    return WordModel.findOne({_id: id}, {});
}

const getAllWords = (pageNo = 0, pageSize = 10) => {
    const skip = pageNo * pageSize;
    const limit = pageSize;
    return WordModel.find({}, { photo: 0 }, {skip, limit});
}

const createWord = (newWord) => {
    const word = new WordModel(newWord);
    return word.save();
}
/*
const updateEmployee = (employee) => {
    let updatedEmployee = {}
    for (let field in employee) {
        if (isUpdatableField(field))
            updatedEmployee[field] = employee[field];
    }
    return EmployeeModel.findOneAndUpdate(
        {_id: employee._id},
        {$set: updatedEmployee}
    )
}
*/
const removeWord = (id) => {
    return WordModel.findOneAndDelete({_id: id});
}

exports.getWordById = getWordById;
exports.removeWord = removeWord;
exports.createWord = createWord;
exports.getAllWords = getAllWords;
