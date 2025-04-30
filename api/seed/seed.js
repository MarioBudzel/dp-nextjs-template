const fs = require("fs");
const path = require("path");

const deleteAllNewFiles = () => {
  const folderPath = path.join(process.cwd(), "uploads/userData");
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading the directory!");
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file!");
        }
      });
    });
  });
};

module.exports = deleteAllNewFiles;
