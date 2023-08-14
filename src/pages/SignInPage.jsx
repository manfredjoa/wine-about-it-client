import SignIn from "../components/SignIn";
import LinkToRegistration from "../components/LinkToRegistration";

export default function SignInPage({}) {
  return (
    <div className="flex w-screen justify-evenly">
      <div className="grid grid-cols-2 gap-4 place-content-center h-50">
        <SignIn />
        <LinkToRegistration />
      </div>
    </div>
  );
}
