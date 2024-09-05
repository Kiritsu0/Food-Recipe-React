import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="p-5 bg-gray-200 mt-44">
      <div className="flex justify-between flex-col md:flex-row gap-10">
        <div className="space-y-7 self-center md:self-auto text-center ml-5">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="w-60"
          />
          <button className="border-4 border-red-300 text-sm hover:bg-red-300 hover:text-white w-52 py-2 px-7">
            NEWSLETTERS
          </button>
          <div className="space-y-5">
            <h2 className="text-sm text-start">Follow us</h2>
            <div className="flex gap-3">
              <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-purple-500 cursor-pointer" />
              <FaPinterest className="text-2xl hover:text-red-700 cursor-pointer" />
              <FaTiktok className="text-2xl hover:text-black cursor-pointer" />
              <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer" />
              <FaXTwitter className="text-2xl hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex md:gap-36 mr-5 flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              DINNERS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              MEALS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              INGREDIENTS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              OCCASIONS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              CUISINES
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              KITCHEN TIPS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              NEWS
            </a>
            <a
              href="/"
              className="font-bold text-black text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              FEATURES
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Anti-Racism Pledge
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Product Vetting
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Advertise
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Editorial Process
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Terms of Service
            </a>
            <a
              href="/"
              className="text-sm hover:underline decoration-red-500 underline-offset-4"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
      <hr className="my-5 border-2 border-red-300" />
      <div className="text-sm text-center">
        <p>Copyright &copy; FoodRecipe</p>
      </div>
    </div>
  );
}

export default Footer;
