const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  try {
    const response = await cloudinary.video("giphy_nz4u8x", {
      resource_type: "image",
    });
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
