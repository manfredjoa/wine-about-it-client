import SignIn from "../components/SignIn";
import LinkToRegistration from "./LinkToRegistrationPage";
import Layout from "../layouts/Layout";

export default function SignInPage() {
  return (
    <div className="flex w-screen justify-evenly">
      <div className="grid grid-cols-2 gap-4 place-content-center h-50">
        <SignIn />
        <LinkToRegistration />
      </div>
    </div>
  );
}
