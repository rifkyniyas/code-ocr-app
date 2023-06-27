export const readImageFile = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(new Error("Failed to read the image file."));
    };

    reader.readAsDataURL(image);
  });
};
