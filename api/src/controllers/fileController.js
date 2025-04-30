const upload = require("../multer/multerConfig");

exports.uploadFiles = [
  upload.any(),
  async (req, res) => {
    const { files } = req;
    const file = files?.[0];
    const filePath = file.path;

    res.status(200).send({ filePath });
  },
];
