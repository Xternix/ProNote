const express = require('express');

// Routes
const indexRouter = require('./routes/index');
const notesRouter = require('./routes/api/notes');


const app = express();

app.use('/', indexRouter);
app.use('/notes', notesRouter);
/** 
    app.use('/folders', foldersRouter); crud
    If you want collapsible bullet points or hierarchical organization.
        POST /notes/:id/children → Add a child note to a parent note
        GET /notes/:id/children → Get all child notes under a parent
        PUT /notes/:id/move → Move a note under another parent
        PUT /notes/:id/reorder → Change order of child notes
    For multi-user note editing and sharing.
        POST /notes/:id/share → Share a note with another user
        GET /notes/shared → Get notes shared with the user
        DELETE /notes/:id/unshare → Revoke shared access
    For cloud synchronization and offline access.
        POST /sync → Sync notes with the server
        GET /sync/changes → Get incremental updates
        POST /sync/conflicts → Resolve sync conflicts
    


*/



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));