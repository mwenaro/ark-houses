
"use client"
// src/FileUpload.tsx

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios, { AxiosResponse } from 'axios';



interface FileUploadProps {
  acceptedFileExtensions?: string[];
  apiEndpoint?: string
}

const FileUpload: React.FC<FileUploadProps> = ({ acceptedFileExtensions, apiEndpoint }) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Check if the file extension is allowed
    if(acceptedFileExtensions){
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!acceptedFileExtensions!.includes(fileExtension)) {
      console.error('Invalid file type. Please upload a valid file.');
      setUploadSuccess(false);
      return;
    }
}
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response: AxiosResponse =
        await axios.post(apiEndpoint || '/api/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded / (progressEvent?.total || file.size)) * 100
            );
            setUploadProgress(percentCompleted);
          },
        });

      // Handle the server response here
      if (response.status === 200) {
        setUploadSuccess(true);
        
        console.log({response})
        // Reset the progress and success message after a delay (e.g., 3 seconds)
        setTimeout(() => {
          setUploadProgress(null);
          setUploadSuccess(null);
        }, 3000);
      } else {
        setUploadSuccess(false);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadSuccess(false);
    }
  },[acceptedFileExtensions,apiEndpoint]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`bg-gray-200 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center ${isDragActive ? 'bg-gray-300' : ''
          }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>

      {uploadProgress !== null && uploadSuccess === null && (
        <div className="mt-4">
          <p>Upload Progress: {uploadProgress}%</p>
          <div className="bg-blue-400 h-2 w-full">
            <div
              className="bg-blue-600 h-2"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {uploadSuccess === true && (
        <div className="mt-4 text-green-600">
          <p>Upload finished successfully! ✔️</p>
        </div>
      )}

      {uploadSuccess === false && (
        <div className="mt-4 text-red-600">
          <p>Upload failed. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
