
"use client"
// src/useDzUpload.tsx

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios, { AxiosResponse } from 'axios';
import { FiUpload, FiUploadCloud } from 'react-icons/fi';


interface FileUploadProps {
    acceptedFileExtensions?: string[];
    apiEndpoint?: string
}

const useDzUpload = (acceptedFileExtensions: string[] = [], apiEndpoint: string = "") => {
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null);
    const [filepath, setFilePath] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        // Check if the file extension is allowed
        if (acceptedFileExtensions.length > 0) {
            const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
            if (!acceptedFileExtensions!.includes(fileExtension)) {
                console.error('Invalid file type. Please upload a valid file.');
                setError('Invalid file type. Please upload a valid file.')
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
                setFilePath(response.data.filename)
                // Reset the progress and success message after a delay (e.g., 3 seconds)
                setTimeout(() => {
                    setUploadProgress(null);
                    setUploadSuccess(null);
                }, 3000);
            } else {
                setUploadSuccess(false);
                setError("Something went wrong ...")
            }
        } catch (error: any) {
            console.error('Error uploading file:', error);
            setError('Error uploading file: ' + error.message)
            setUploadSuccess(false);
        }
    }, [acceptedFileExtensions,apiEndpoint]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const uploadField = (
        <div className='w-full min-h-300'>
            <div
                {...getRootProps()}
                className={`h-full bg-gray-200 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center ${isDragActive ? 'bg-gray-300' : ''
                    }`}
            >
                <input {...getInputProps()} className='block py-30'/>
                {isDragActive ? (
                    <>
                        <FiUpload className="block mx-auto text-3xl" />
                        <p>
                            Drop the files here... </p>
                    </>
                ) : (<>                    <FiUploadCloud className="block mx-auto text-3xl" />

                    <p>
                        Drag n drop some files here, or click to select files</p>
                </>
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



    return {
        error,
        filepath,
        uploadField,
        success: uploadSuccess
    }
};

export default useDzUpload;




