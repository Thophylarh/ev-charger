import react, {useState, useEffect} from "react"
import axios from "../../../lib/axiosInterceptor";
import { Navigate, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Show from "../../../assets/svg/showEye.svg";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import backArrow from "../../../assets/svg/backArrow+Circle.svg";


const ChangePassword = () => {
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();

	let id = searchParams.get("id");

    const [showPassword, setShowPassword] = useState(false);

	

	const [inputType, setInputType] = useState("password");



    const [isLoading, setIsLoading] = useState(false);

	

    
	const [password1, setPassWord] = useState()

    

    useEffect(() => {
		showPassword ? setInputType("text") : setInputType("password");
	  }, [showPassword]);

	 
  
	  const handleSubmit = (e) =>{
		e.preventDefault();

		const data = {
			id: id,
			password: password1
		}

		setIsLoading(true)
		

		axios.post("/Customers/change-password", data ).then((res)=>{
			setIsLoading(false)
			navigate({
				pathname: "/profile",
				search: `?customerId=${id}`,
			  });
			  toast.success("password updated successfully");
		  }

		  )
	  }

	  
  const ReturnToProfile = () => {
    navigate({
      pathname: "/profile",
      search: `?customerId=${id}`,
    });
  };

    return (<section>
        <section className="w-[90%] mx-auto ">

		<div onClick={ReturnToProfile} className="mt-[12px] mb-[24px]">
        <img src={backArrow} alt="back to profile " />
      </div>

        <form onSubmit={handleSubmit}>
           
						<div className="mb-[12px]">
							<label className="block text-grey-700 text-[14px] font-semibold mb-[8px]">
								Password:
							</label>
							<div>
								<div className="flex justify-end">
									<img src={Show} className="eye"
									 onClick={() => {
										setShowPassword((showPassword) => !showPassword);
										
									  }}
									></img>
								</div>
								<input
									type={inputType}
									name="password"
									value={password1}
									placeholder="Enter your password"
									className="border p-[14px] rounded-lg w-[100%]"
									onChange={(event)=>{setPassWord(event.target.value)}}
								/>
							</div>

							
							
							
						</div>
						
						<div>
						<button 
						className={`border py-[16px] w-[100%] bg-black rounded-lg text-white 
						 ${
							isLoading
							  ? "bg-slate-500 cursor-not-allowed"
							  : "bg-black cursor-pointer"
						  }`
						 }
						disabled={isLoading ? true : false}>
							{isLoading ? (
                      <ClipLoader color="white" size={15} />
                    ) : (
                      "change Password"
                    )}
							
						</button>
						
					</div>
        </form>
        </section>
    </section> );
}
 
export default ChangePassword;