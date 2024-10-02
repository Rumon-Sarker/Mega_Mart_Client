
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate();

    const { googleLogin } = useContext(AuthContext);

    const handaleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                if (result?.user)
                    toast.success("Login Success", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",

                    });
                navigate('/')
            })
    }
    return (
        <button
            onClick={handaleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center mx-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
            <FcGoogle className="text-xl mr-2" />  Sign in with Google
        </button>
    );
};

export default SocialLogin;