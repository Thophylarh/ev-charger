import React from "react";
import profileCamera from "../../../assets/svg/profileCamera.svg";
import sampleProfile from "../../../assets/images/samplePicture.png";
import profileIcon from "../../../assets/svg/profile-icon.svg"
import LocationIcon from "../../../assets/svg/profileLocation.svg"
import Password from "../../../assets/svg/password-key.svg"
import Email from "../../../assets/svg/email-bell.svg"
import Logout from  "../../../assets/svg/profile-logout.svg"

const Profile = () => {
  return (
    <section className="pt-[1.5rem] w-[90%] mx-auto">

      <section >

        <div className="flex justify-center">

            <div  className="p-[1px] border-2 border-[#6DDCFF]  rounded-full">
          <img src={sampleProfile} alt="Profile picture" className="w-[5.625rem] h-[5.625rem]" />
          </div>

          <img src={profileCamera} alt="change profile picture" className="mt-[4rem]"  />

        </div>
      </section>

      <section className="text-center mt-[1rem]">

        <h1 className="font-bold text-base text-[#101828]">Olaitan Akinlade</h1>

        <h4 className="text-[#667085] font-normal text-[12px]">olaitan.akinlade@email.com</h4>

      </section>

      <section className="mt-[1.25rem]">
        <h3>MY ACCOUNT</h3>

        <div className="flex mt-[1.5rem] mb-[1rem]">
            <img src={profileIcon} alt="profile data" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">Profile Data</h5>
           
        </div>
        <hr></hr>    

        <div className="flex mt-[1.5rem] mb-[1rem]">
            <img src={LocationIcon} alt="location" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">My locations</h5>
           
        </div>
        <hr></hr> 
        
      </section>

      <section className="mt-[1.25rem]">
        <h3>SECURITY & NOTIFICATIONS</h3>

        <div className="flex  mt-[1.5rem] mb-[1rem]">
            <img src={Password} alt="profile data" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">Change password</h5>
           
        </div>
        <hr></hr>    

        <div className="flex  mt-[1.5rem] mb-[1rem]">
            <img src={Email} alt="location" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">Email notifications</h5>
           
        </div>
        <hr></hr> 
        
      </section>

      <section className="mt-[1.25rem]">
        <h3>PREFRENCE</h3>

        <div className="flex  mt-[1.5rem] mb-[1rem]">
            <img src={profileIcon} alt="profile data" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">Language</h5>
           
        </div>
        <hr></hr>    

        <div className="flex  mt-[1.5rem] mb-[1rem]">
            <img src={Logout} alt="location" />
            <h5 className="font-medium text-sm text-[#EB3540] ml-[1.25rem]">Logout</h5>
           
        </div>
        <hr></hr> 
        
      </section>
      
    </section>
  );
};

export default Profile;
