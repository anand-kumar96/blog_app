const express = require("express");
const multer  = require('multer')
const app = express();
const cors = require("cors")
const blogRoutes = require('./routes/blogRoutes')

app.use(express.json());
app.use(cors());
// Specify the route for serving static files
app.use('/src/uploads', express.static('src/uploads')); 
app.use('/', blogRoutes)


/// uploading image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}${file.originalname}`)
    }
  })

  const upload = multer({ storage: storage })

  app.post('/uploadImage', upload.single('file'), function (req, res, next) {
  const updatedFilePath = req.file.path.replace(/\\/g, '/'); // Replace backslashes with forward slashes in the file path
  req.file.path = updatedFilePath; // Update the path in the file object
  res.send(req.file);
});

const PORT = 5000; // Use the environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
    

