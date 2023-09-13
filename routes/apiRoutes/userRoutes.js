const router = require('express').Router();

// The code snippets below import several user controller functions from the userController.js file.
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUserById,
  addFriend,
  deleteFriend,
  
} = require('../../controllers/userController');

// The code below is for GET and POST requests for all users
// Route: /api/users
router.route('/').get(getAllUsers).post(createUser);

// The code snippets below are used for GET user by ID, UPDATE user by id, and DELETE user by id.
// Route: /api/users/:userid
router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUserById);

// Code snippet to Posy and Delete friends
// Route: /api/users/:userid/friends/:friendId  
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;