import { useState } from "react";
import image from "../../assets/image/image.png";

const SignInPage = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock check for existing username
        const existingUsernames = ["user1", "admin", "testuser"];
        if (existingUsernames.includes(username)) {
            setError("This username is already taken. Please choose a different one.");
        } else {
            setError("");
            // Proceed with form submission
            console.log("Username submitted:", username);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="max-w-md w-full px-8">
                    <h2 className="text-3xl font-bold mb-3 text-[#0048b2]">Username</h2>
                    <p className="text-gray-400 mb-6 text-sm">Choose a username to get started.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-left">
                            {error && (
                                <p className="text-red-500 text-sm mb-2">{error}</p>
                            )}
                            <input
                                type="text"
                                id="uname"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className={`mt-1 block w-80 px-4 py-2 border rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${error ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter your username"
                            />
                        </div>

                        <p className="my-5 text-sm text-gray-400  w-80">
                            Tip: To maintain privacy policy, do not include anything that reveals your identity.
                        </p>

                        <button
                            type="submit"
                            className="w-40 px-4 py-2 bg-[#6B77B3] text-white font-medium rounded-full hover:bg-[#0048b2] transition"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Section with Image */}
            <div className="hidden md:flex flex-1">
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
