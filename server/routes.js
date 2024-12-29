const express = require('express');
const {
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} = require('firebase/firestore');
const Users = require('./config');

const router = express.Router();

router.get('/', async (req, res) => {
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

router.get('/create', (req, res) => {
  res.render('userForm', { user: null });
});

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

router.get('/update-form/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userDocRef = doc(Users.firestore, 'Users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = { id: userId, ...userDoc.data() };

      res.render('userForm', { user: userData });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).send('Error loading user data');
  }
});

router.post('/update/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, age, role } = req.body;

  try {
    const userDocRef = doc(Users.firestore, 'Users', userId);

    await updateDoc(userDocRef, {
      name,
      age: parseInt(age, 10),
      role,
    });

    res.redirect('/api/users');
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).send('Failed to update user');
  }
});

router.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  try {
    console.log('Attempting to delete user with ID:', userId);

    const userDocRef = doc(Users.firestore, 'Users', userId);

    await deleteDoc(userDocRef);

    console.log('User deleted successfully');
    res.status(200).json({ message: 'User deleted successfully!' });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res
      .status(500)
      .json({ message: 'Failed to delete user.', error: error.message });
  }
});

module.exports = router;
