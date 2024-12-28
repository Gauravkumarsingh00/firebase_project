const express = require('express');
const { addDoc, getDocs } = require('firebase/firestore');
const Users = require('./config'); // Firestore 'Users' collection reference

const router = express.Router();

// POST endpoint to handle form submission and add user data to Firestore
router.post('/create', async (req, res) => {
  try {
    const { name, age, role } = req.body; // Extract data from the form

    // Add the user data to the Firestore 'Users' collection
    await addDoc(Users, { name, age, role });

    // Send a success response
    // res.status(200).send({ msg: 'User added successfully' });
    res.redirect('/users');
  } catch (error) {
    // Handle any errors during the database operation
    console.error('Error adding user:', error);
    res.status(500).send({ msg: 'Error adding user', error: error.message });
  }
});

// GET endpoint to retrieve all users from Firestore and send to template
router.get('/users', async (req, res) => {
  try {
    const querySnapshot = await getDocs(Users); // Get all documents from the 'Users' collection
    const usersList = [];

    // Loop through all documents and push the data to usersList
    querySnapshot.forEach((doc) => {
      usersList.push({ id: doc.id, ...doc.data() });
    });

    // Render the users list on the users.ejs page
    res.render('users', { users: usersList });
  } catch (error) {
    // Handle any errors during the database operation
    console.error('Error retrieving users:', error);
    res
      .status(500)
      .send({ msg: 'Error retrieving users', error: error.message });
  }
});

// Export the router
module.exports = router;
