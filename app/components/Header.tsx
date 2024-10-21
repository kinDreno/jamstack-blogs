import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="bg-slate-800 p-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <Link className="text-white text-2xl font-bold" href={"/"}>
            My Blogs
          </Link>
          <ul className="flex space-x-3">
            {[
              ["/api/auth/signin", "Log In"],
              ["/blogs", "Blogs"],
            ].map(([href, name], index) => {
              return (
                <li key={index}>
                  <Link
                    className="duration-500 text-white hover:underline"
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
