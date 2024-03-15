"use client"
import React, { useState } from 'react';

import ProfileSettings from './ProfileSettings';
import { useRouter } from 'next/navigation';
import { Typography } from '@/components';

// Define the shape of the form values
interface ProfileFormValues {
    fullName: string;
    email: string;
    idNumber: string;
    password: string;
    confirmPassword: string;
    businessName: string;
    businessCode: string;
    phone: string;
}

// Define the shape of the Profile component props
interface ProfileProps {
    user: ProfileFormValues; // User data to display
    onUpdateUser: (values: ProfileFormValues) => void; // Callback to update user data
    className?: string;
}


const Profile = ({
    user,
    onUpdateUser,
    className = '',
}: ProfileProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter()
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleRefresh = () => router.refresh()
    return (
        <>
            <div className='w-full'>
                <div className='w-full md:w-1/2 mx-3'>
                    <Typography variant='h3'>Profile Details</Typography>
                    <ProfileSettings handleRefresh={handleRefresh} />
                </div>
                <div className='w-full md:w-1/2'>

                </div>

            </div>
        </>
    );
};

export default Profile;
