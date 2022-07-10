import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function UploadImgHlp({ title = '' }) {
  const [file, setFile] = useState("")

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (e) => {
        setFile(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': []
    },
  })

  return (
    <div className='dfc gap-4 h-[inherit]'>
      <div className='text-xl text-center font-medium'>{title}</div>

      <div
        className='dc w-full h-10 p-8 bg-white rounded-xl shadow-sm'
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag and drop image file here, or click to select image</p>
      </div>

      <div className='flex-1 border rounded'>
        {
          file &&
          <img className='w-full object-cover rounded' src={file} alt="uploaded" />
        }
      </div>
    </div>
  )
}

export default UploadImgHlp