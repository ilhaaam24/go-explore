import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Destinations",
    href: "#",
  },
  {
    name: "Hotels",
    href: "#",
  },
  {
    name: "Flights",
    href: "#",
  },
  {
    name: "Bookings",
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
  {
    name: "Sign up",
    href: "#",
  },
];

export function Navbar() {
  return (
    <nav className=" absolute top-8 z-10 left-0 right-0 px-40">
      <div className="flex justify-between items-center h-10">
        <div className="text-2xl font-bold text-blue-600">
          <img src="./assets/images/logo.png" alt="logo" className=" h-10" />
        </div>
        <ul className="flex  gap-16">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={`hover:text-blue-600 font-open-sans font-semibold ${item.name === "Sign up" ? "border rounded-md py-2 px-5" : ""}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
