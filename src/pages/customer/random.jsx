// import React, {useState, useEffect} from "react";
// import profileCamera from "../../../assets/svg/profileCamera.svg";
// import sampleProfile from "../../../assets/images/samplePicture.png";
// import profileIcon from "../../../assets/svg/profile-icon.svg"
// import LocationIcon from "../../../assets/svg/profileLocation.svg"
// import Password from "../../../assets/svg/password-key.svg"
// import Email from "../../../assets/svg/email-bell.svg"
// import Logout from  "../../../assets/svg/profile-logout.svg"
// import { Navigate, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import axios from "../../../lib/axiosInterceptor";
// import Loader from "../../../components/Loader";




const Profile = () => {
 
  const [isLoading, setIsLoading] = useState(false);
  const [CDetails, setCDetails] = useState();
  const [checked, setChecked] = useState(null);



  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  let customerId = searchParams.get("customerId");

  // //customer details
  const getDetails = () => {
    setIsLoading(true);
    axios.get(`/Customers/get-customer-by-id/${customerId}`).then((res) => {
      // setCDetails(res?.data?.customerDetails)

      
    });
  };

  // //handle checkbox

  // const handleCheck = () =>{
    
  //   setChecked(!checked);
  //   // ENotifications();
  
  // }

  // const emailN = !CDetails?.EmailNotificationStatus
  //   console.log(emailN)

 

  // //email permision

  // const ENotifications = () =>{
  //   setIsLoading(true)
    
   
  //   axios.post(`/Customers/update-email-notification?id=${customerId}&isEmailNotification=${emailN}`).then((res)=>{
  //     console.log(res)
  //     setTimeout(() => {
  //       setIsLoading(false);
        

  //     }, 2000);
    
  //   })
  // }

 
//   useEffect(() => {
//     getDetails();
//   }, []);
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

        <h1 className="font-bold text-base text-[#101828]">{CDetails?.Firstname} {CDetails?.Lastname}</h1>

        <h4 className="text-[#667085] font-normal text-[12px]"> {CDetails?.EmailAddress}</h4>

      </section>

      <section className="mt-[1.25rem]">
        <h3>MY ACCOUNT</h3>

        <div className="flex mt-[1.5rem] mb-[1rem]" onClick={Navigate({
				pathname: '/profileData',
				search: `?customerId=${customerId}`
			  })}>
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

        <div className="flex justify-between w-[100%]  mt-[1.5rem] mb-[1rem]">
          <div className="flex w-[80%]">
            <img src={Email} alt="location" />
            <h5 className="font-medium text-sm text-[#101828] ml-[1.25rem]">Email notifications</h5>
            </div>

         
            <div className="w-[20%]">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={CDetails?.EmailNotificationStatus === true}
                        className="sr-only peer"
                        name="toggle"
                        // onChange={handleCheck}
                      />

                      <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
                    </label>
                  </div>
                
           
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

        <div
         className="flex  mt-[1.5rem] mb-[1rem]" 
         onClick={() => {
							localStorage.clear("user-token");
							navigate({
								pathname: "/login",
							});
						}}>
            <img src={Logout} alt="location" />
            <h5 className="font-medium text-sm text-[#EB3540] ml-[1.25rem]">Logout</h5>
           
        </div>
        <hr></hr> 
        
      </section>
      
    </section>

    
);
};

export default Profile;
