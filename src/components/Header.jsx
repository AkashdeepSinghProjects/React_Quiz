import logo from "../assets/CerebralCraze-logos.jpeg";
export default function Header() {
  return (
    <header>
      <img src={logo} className=" rounded-full h-48 w-48 mt-3 mx-auto" />
    </header>
  );
}
