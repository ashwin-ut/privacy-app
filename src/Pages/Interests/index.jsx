import { useState } from "react";
import image from "../../assets/image/image.png";

const InterestsPage = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const interests = [
        "Sports", "Science", "Fiction", "Politics", "Gaming", "Music", "Art", "Technology", "Travel", "Food",
        "Movies", "Books", "History", "Nature", "Photography", "Fitness", "Cooking", "Fashion", "Education",
        "Health", "Adventure", "Lifestyle", "Spirituality", "Business", "Finance"
    ];

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="max-w-md w-full px-8 py-10 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-2 text-[#0048b2]">Interests</h2>
                    <p className="text-gray-400 mb-6 text-sm">Choose the topics you&apos;d like to see.</p>
                    <div
                        className="grid grid-cols-3 gap-4 mb-6 overflow-y-scroll hide-scrollbar"
                        style={{ maxHeight: "300px" }} // Limit height and allow scrolling
                    >
                        {interests.map((interest) => (
                            <button
                                key={interest}
                                onClick={() => toggleInterest(interest)}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedInterests.includes(interest)
                                    ? "bg-[#0048b2] text-white"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>

                    <button
                        className={`w-full px-4 py-2 text-white font-medium rounded-full ${selectedInterests.length >= 3 ? "bg-[#0048b2]" : "bg-[#808aba]"
                            }`}
                        disabled={selectedInterests.length < 3}
                    >
                        {selectedInterests.length >= 3 ? "Continue" : "Select at least 3 to continue"}
                    </button>
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

export default InterestsPage;
