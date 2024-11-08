exports.getRandomNumber = () => {
  const minCeiled = Math.ceil(1111111111);
  const maxFloored = Math.floor(9999999999);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];
// const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

// // Get the extension of the uploaded file
// const file_extension = image.originalname.slice(
//     ((image.originalname.lastIndexOf('.') - 1) >>> 0) + 2
// );

// // Check if the uploaded file is allowed
// if (!array_of_allowed_files.includes(file_extension) || !array_of_allowed_file_types.includes(image.memetype)) {
//   throw Error('Invalid file');
// }

// // Allowed file size in mb
// const allowed_file_size = 2;
// if ((image.size / (1024 * 1024)) > allowed_file_size) {                  
//   throw Error('File too large');
// }