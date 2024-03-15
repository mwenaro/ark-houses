"use client"

import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const ImageUploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    try {
      const data = new FormData()
      data.set('file', selectedFile)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
      let m = await res.json()
      alert("Image successfully uploade : " )
      console.log({m})
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    } finally {
      setSelectedFile(null);
    }




  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fileInput" className="block text-gray-700">
            Upload an Image
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        {selectedFile && (
          <div>
            <p className="text-green-500">File selected: {selectedFile.name}</p>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          <FiUpload className="inline-block mr-2" />
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
