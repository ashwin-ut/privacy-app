import image from "../../assets/image/image.png"

const SignInPage = () => {
    const handleResendOTP = async () => {
        try {
            const response = await fetch('/api/resend-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: 'yourPhoneNumber' }), // Replace with actual data
            });
            const data = await response.json();
            if (data.success) {
                alert('OTP sent successfully!');
            } else {
                alert('Failed to resend OTP.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="max-w-md w-full px-8 text-center">
                    <h2 className="text-2xl font-bold mb-7 text-[#0048b2]">Enter the OTP</h2>
                    <form>
                        <div className="mb-4 flex justify-center">
                            <input
                                type="number"
                                id="otp"
                                required
                                className="mt-1 block w-60 px-4 py-2 border border-gray-300 rounded-full text-center shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your 6 digit OTP"
                            />
                        </div>
                        <p className="text-sm my-2 text-gray-400">
                            Didn&apos;t receive an opt?
                        </p>
                        <p className="text-sm text-[#3869b3] cursor-pointer hover:text-indigo-500" onClick={handleResendOTP}>
                            Resend the otp
                        </p>

                        <button
                            type="submit"
                            className="w-32 py-2 bg-[#6B77B3] text-white font-medium rounded-full hover:bg-[#0048b2] transition my-4"
                        >
                            Continue
                        </button>
                    </form>

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
