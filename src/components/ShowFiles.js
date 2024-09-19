import React from 'react'

const ShowFiles = ({uploadedFiles}) => {
  return (
    <div className='container mt-4'>
      <h1 className='text-center' >{uploadedFiles.filename}</h1>
      <img style={{width: '100%'}} src={uploadedFiles.filePath} alt="" />
    </div>
  )
}

export default ShowFiles
