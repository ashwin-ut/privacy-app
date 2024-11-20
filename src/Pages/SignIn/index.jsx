import image from "../../assets/image/image.png"

const SignInPage = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="max-w-md w-full px-8">
                    <h2 className="text-3xl font-bold mb-3 text-[#0048b2]">Sign In</h2>
                    <p className="text-gray-400 mb-6 text-sm">Sign in to stay connected.</p>
                    <form>
                        <div className="mb-4 text-left">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-[#0048b2] px-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="mt-1 block w-80 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <p className="my-7 text-sm text-gray-400">
                            By signing in, you accept our Terms of Service and acknowledge the
                            Privacy Policy.
                        </p>

                        <button
                            type="submit"
                            className="w-40 px-4 py-2 bg-[#6B77B3] text-white font-medium rounded-full hover:bg-[#0048b2] transition"
                        >
                            Sign In
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
