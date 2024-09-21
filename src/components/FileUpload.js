import React, { Fragment, useState } from "react";
import axios from "axios";
import ShowFiles from "./ShowFiles";
import Message from "./Message";


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [message, setMessage] = useState(null);
  const [Success, setSuccess] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3001/api/upload", formData , {
        headers: {
          "Content-Type": "multipart/form-data"
      }
    });
    

     console.log(res.data);
     setUploadedFiles(res.data);
     setSuccess(true);
     setMessage("Yayyyyyy");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      {message ? <Message message={message} /> : null}
      <form className="px-5" action="" onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block w-100"
          value={"Upload"}
        />
      </form>
      {Success ? <ShowFiles uploadedFiles={uploadedFiles} /> : null}
    </div>
  );
};

export default FileUpload;
