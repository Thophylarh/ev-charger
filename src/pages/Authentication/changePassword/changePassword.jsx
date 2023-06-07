import react, {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router";

const ChangePassword = () => {
    const Navigate = useNavigate();
    const [password, setPassWord] = useState("")
    const [password1, setPassword1] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isvalid, setIsvalid] =  useState(false)
    

    const validate = () =>{
        if (password1 === confirmPassword){
            setIsvalid(true)
            setPassWord(password1)
            
            
        }else{
            setIsvalid(false)
            setPassWord("")
        }
    }

    const token = localStorage.getItem("user-token")
    const id = localStorage.getItem("id")
    const url = "https://evapi.estations.com";
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(url + "/Companies/update-password", {id, password}, 
        {
            headers: {'Authorization': `Bearer ${token}`, "Content-Type": "application/json" },
            withCredentials: false,
          }
        ).then(
            Navigate("/station")
        ).catch((err) =>{
            console.log(err)
        }
            )
    }

    return ( <div className="grid place-items-center h-screen">
        <h1 className="text-black font-medium text-4xl mt-[3rem] pb-[0.75rem]">Change Password </h1>
        <form onSubmit={handleSubmit}>
          <label>Enter new password</label>
          <input type="password"
           placeholder="Enter password" 
           value={password1}
           onChange={(e)=>setPassword1(e.target.value)}  
          className="mt-1 p-3 bg-white border 
                   shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"
                         required/>

          <label>Confirm Password</label>
          <input type="password" 
          placeholder="Confirm password"  
          value={confirmPassword} 
          onChange={(e)=>{
            setConfirmPassword(e.target.value)
           
        }}
        onBlur={ validate}
        
          className="mt-1 p-3 bg-white border 
                   shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"required />

                        {isvalid?  null : <p>doesnt match</p>}

                <button
              type="submit"
              className="mt-8 p-4 flex w-96 text- 
                 center text-white rounded-md text- 
                  normal text-xs 
                  font-semibold tracking-widest text- 
                   white uppercase transition ease-in- 
                    out bg-gray-900 border border- 
                     transparent active:bg-gray-900 
                      false justify-center 
                       hover:scale-105 duration-300"
            >
             Change password
            </button>
        </form>
    </div> );
}
 
export default ChangePassword;