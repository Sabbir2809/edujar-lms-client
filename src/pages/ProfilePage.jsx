<<<<<<< HEAD
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
=======
import ProfileDetails from "../components/account/ProfileDetails.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const ProfilePage = () => {
  return (
    <div>
      <MainLayout>
        <ProfileDetails />
      </MainLayout>
    </div>
  );
};

export default ProfilePage;
>>>>>>> 63a5040a4c26d85bfdf7b80715fc77d777a35740
