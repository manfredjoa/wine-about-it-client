import LinkToRegistration from "../components/LinkToRegistration";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

export default function LinkToRegistrationPage() {
  return (
    <Layout>
      <Link to="/registration">
        <LinkToRegistration />
      </Link>
    </Layout>
  );
}
