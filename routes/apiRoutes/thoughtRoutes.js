const router = require('express').Router();

// The code snippets below import the thought controller functions from the thoughtController.js file.
const {
    getAllThoughts,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// The code is used for the GET and POST requests for all thoughts
// Route: /api/thoughts 
router.route('/').get(getAllThoughts).post(createThought);

// The code snippets below are used for the GET, PUT, and DELETE requests for a single thought by its id.
// Route: /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughts)
    .put(updateThought)
    .delete(deleteThought);

// The code below is used for "POST" request and a reaction to a thought process.
// Route: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;