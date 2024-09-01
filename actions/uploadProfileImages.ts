"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export const uploadProfilImages = async (image: string) => {
  const results: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { tags: ["watch-store"], folder: "watch-store" },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        },
      )
      .end(image);
  });

  return { imageUrl: results.secure_url };
};
