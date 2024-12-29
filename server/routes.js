const express = require('express');
const { addDoc, getDocs } = require('firebase/firestore');
const Users = require('./config');

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { name, age, role } = req.body;

    await addDoc(Users, { name, age, role });

    res.redirect('/api/users');
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send({ msg: 'Error adding user', error: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const querySnapshot = await getDocs(Users);
    const usersList = [];

    querySnapshot.forEach((doc) => {
      usersList.push({ id: doc.id, ...doc.data() });
    });

    res.render('users', { users: usersList });
  } catch (error) {
    console.error('Error retrieving users:', error);
    res
      .status(500)
      .send({ msg: 'Error retrieving users', error: error.message });
  }
});

module.exports = router;
