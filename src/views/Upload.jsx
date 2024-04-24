import { useState } from 'react';

const Upload = () => {

  const [file] = useState(null);
  console.log("file: ", file);

  const handleFileChange = (e) => {
    event.preventDefault();
    console.log("file: ", e.target.files[0]);
  }

  return <>
    <form onSubmit={handleFileChange}>
      <input type="text" placeholder='Name' />
      <input type="file" />
      <button type="submit">Upload</button>
    </form>
  </>
};

export default Upload;
