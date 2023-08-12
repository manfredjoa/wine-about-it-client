import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function Layout(props) {
  return (
    <div className="flex flex-col grow">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
