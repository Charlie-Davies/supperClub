const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for serving index.html (Home)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for serving menu.html (Menu)
app.get('/menu', (req, res) => {
  res.sendFile(__dirname + '/public/menu.html');
});

// Other routes for About FAQ, Contact (Placeholder routes)
app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.get('/faq', (req, res) => {
  res.send('FAQ Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
