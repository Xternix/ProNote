exports.createNote = async (req, res, next) => {
    res.send('Hello from Notes route: Create a new note');
}

exports.getNotes = async (req, res, next) => {
    res.send ('Hello from Notes route!');
}

exports.getNoteById = async (req, res, next) => {
    res.send(`Hello from Notes route: Get note with ID: ${req.params.id}`)
}

exports.updateNote = async (req, res, next) => {
    res.send(`Hello from Notes route: Update note with ID: ${req.params.id}`)
}

exports.deleteNote = async (req, res, next) => {
    res.send(`Hello from Notes route: Delete note with ID: ${req.params.id}`)
}