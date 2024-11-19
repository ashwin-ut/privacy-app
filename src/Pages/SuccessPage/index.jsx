import image from "../../assets/image/image.png"
import { FaRegCheckCircle } from "react-icons/fa";

const SignInPage = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="max-w-md w-full px-8 text-center flex flex-col justify-center items-center">
                    <FaRegCheckCircle className=" mb-3 text-6xl text-[#0048b2]" />
                    <h2 className="text-5xl font-bold mb-3 text-[#0048b2]">Success !</h2>
                    <p className="text-gray-400 my-6 text-sm">An email has been sent to your email. Please check for an email for the OTP.</p>
                    <button
                        type="submit"
                        className="w-40 px-3 py-2 bg-[#6B77B3] text-white font-medium rounded-full hover:bg-[#0048b2] transition"
                    >
                        Continue
                    </button>
                </div>

            </div>

            {/* Right Section with Image */}
            <div className="flex-1">
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SignInPage;
