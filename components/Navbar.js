import Image from "next/image";

// Import Images/icons
import profile from "../assets/profile.svg";

const Navbar = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="max-w-4xl m-auto p-5">
          <div className="flex items-center gap-5">
            <Image src={profile} alt="profile" />
            <div>
              <p className="text-xs">Good Morning</p>
              <p className="font-bold text-base">Fellas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
