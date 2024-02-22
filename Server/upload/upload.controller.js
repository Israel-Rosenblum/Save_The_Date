const cloudinary = require("cloudinary").v2;

const cloud_name = "dzvdihcc0";
const api_key = 937648654551483;
;
const api_secret = "ox8hUmw6qLWvY8_wCuzzxzUD-9s";


cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

function uploadImage(image) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        resolve(result.secure_url);
      } else {
        console.log(error.message + " failed to upload");
        reject({ message: error.message });
      }
    });
  });
};

module.exports = {
  uploadImage
};
