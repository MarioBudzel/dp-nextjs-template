const express = require("express");
const { uploadFiles } = require("../controllers/fileController");

const router = express.Router();

router.post("/upload", uploadFiles);

/* router.get("/getRecent", getRecentFiles);
router.get("/getAll", getAllFiles);
router.get("/downloadSingle/:fileId", downloadSingle);
router.get("/downloadFolder/:folderId", downloadAllByFolder); */

module.exports = router;
