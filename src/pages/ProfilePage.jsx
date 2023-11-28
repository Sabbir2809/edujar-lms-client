import React from 'react';
import  ProfileDetails from '../components/ProfileDetails';
import MainLayout from "../layout/MainLayout.jsx";

const ProfilePage = () => {
    return (
        <div>


            <MainLayout>
                <ProfileDetails/>
            </MainLayout>

        </div>
    );
};

export default ProfilePage;