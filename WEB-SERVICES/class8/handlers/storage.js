const fs = require("fs");

const { makeId } = require("../pkg/strings");
//upload
//download

//0 0 0 0 0 0 0 0
//    .... 2^3  2^2  2^1 2^0

//1 byte = 8 bits
//1 kilobyte KB = 1024 bytes
//1 megabyte MB = 1024 kilobytes
//1 gigabyte GB = 1024 megabytes

const MAX_FILESIZE = 1048576; //1024 * 1024 = 1MB
const ALLOWED_FILETYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/pjpeg",
  "image/gif",
];

const upload = async (req, res) => {
  //install express-fileupload
  //get req.files from request and watch out on naming the key
  //check the file size
  //check if file type is allowed
  //write file into directory
  //close the request by moving the file in some directory that we use as storage
  console.log(req.files);
  //<input name="document" type="file" /> //The name field is our key for the req.files.[key]

  if (MAX_FILESIZE < req.files.document.size) {
    return res.status(400).send("File exceeds max file size!");
  }
  if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
    return res.status(400).send("File type not allowed!");
  }
  const userDir = `user_${req.auth.id}`; //vangel_ietesuihfuidshfuishuisdhfyuisdhfui/three_photo.jpg
  const userDirPath = `${__dirname}/../uploads/${userDir}`; //uploads/vangel_ietesuihfuidshfuishuisdhfyuisdhfui

  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath);
  }

  const fileName = `${makeId(6)}_${req.files.document.name}`; //unique name of file
  const filePath = `${userDirPath}/${fileName}`; //uploads/vangel_ietesuihfuidshfuishuisdhfyuisdhfui/123456_tree_photo.jpg

  req.files.document.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    return res.status(201).send({ file_name: fileName });
  });
};

const download = async (req, res) => {
  //get the user directory by res.auth.id and check if the directory exists
  //does the file exist
  //download file from res.download
  const userDir = `user_${req.auth.id}`;
  const userDirPath = `${__dirname}/../uploads/${userDir}`;
  const filePath = `${userDirPath}/${req.params.filename}`;
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.download(filePath);
};


const listFiles = async (req, res) => {
  const userDir = `user_${req.auth.id}`; // user directory name
  const userDirPath = `${__dirname}/../uploads/${userDir}`; // user directory path

  try {
    //array - read the contents of the user's directory //read all files
    const files = fs.readdirSync(userDirPath);
    
    // gi izminvame site elementi od nizata 
    const fileDetails = files.map((file) => {
      const filePath = `${userDirPath}/${file}`;
      const stats = fs.statSync(filePath); // gi prezemame site fajlovi
      return {
        name: file,
        size: stats.size,
      };
    });

    return res.status(200).send(fileDetails);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
}

  const removeFile = async (req, res) => {
  const userDir = `user_${req.auth.id}`; //directory
  const userDirPath = `${__dirname}/../uploads/${userDir}`; // directory path
  const fileName = req.params.filename; //file to delete
  const filePath = `${userDirPath}/${fileName}`; // path to file
  //console.log(filePath);

  // check if file exsist
  if (!fs.existsSync (filePath)) {
    return res.status(404).send("File not found");
  }
  try {
    // delete the file
    fs.unlinkSync(filePath);// argument file path  // removes the file from the file system
   
    const files = fs.readdir(userDirPath);
    if (files.length === 0) {
     fs.rmdirSync(userDirPath);
    }

    return res.status(200).send("File deleted successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  upload,
  download,
  removeFile,
  listFiles
};