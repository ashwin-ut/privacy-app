import OtpPage from "./Pages/OtpPage"
import SignIn from "./Pages/SignIn"
import SuccessPage from "./Pages/SuccessPage"
import UnamePage from "./Pages/Username"
import InterestsPage from "./Pages/Interests"

export default function App() {
  return (
    <>
      <SignIn />
      <SuccessPage />
      <OtpPage />
      <UnamePage />
      <InterestsPage />
    </>
  )
}