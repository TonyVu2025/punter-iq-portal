import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-950 to-purple-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul>
              <li className="hover:text-yellow-400 cursor-pointer">
                Iassic Bulbs
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Filament Lamps
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                360° Illumination
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Golden Filament
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Reflector Lamps
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                LED Tubes
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Special Applications
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Decorative
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Dim-to-Warm
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul>
              <li className="hover:text-yellow-400 cursor-pointer">
                Iassic Bulbs
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                {" "}
                Filament Lamps
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                360° Illumination
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Golden Filament
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Reflector Lamps
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                LED Tubes
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Special Applications
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Decorative
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Dim-to-Warm
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Upcoming Races</h3>
            <ul>
              <li className="hover:text-yellow-400 cursor-pointer">Bulkhead</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Downlight
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Damp Proof Batten
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Indoor Batten
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">High Bay</li>
              <li className="hover:text-yellow-400 cursor-pointer">Panel</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Track Lighting
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Under Cabinet
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Wall Lamp
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Popular Races</h3>
            <ul>
              <li className="hover:text-yellow-400 cursor-pointer">Exit Box</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Exit Sign
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Emergency Module
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Recessed Downlight
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Slim Bulkhead
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Surface Mounted
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Twinspot</li>
            </ul>
          </div>
        </div>
        <div className="pt-20 text-center flex flex-col sm:flex-row">
          <div className="flex flex-col justify-between sm:justify-around items-center w-full sm:w-5/12 py-1 mb-6 sm:mb-0">
            <a href="/" className="">
              <Image
                src="/img/footerLogo.png"
                className="mx-auto sm:mx-10"
                alt="LastLeg Logo"
                width={200}
                height={40}
              />
            </a>
            <div className="flex justify-center sm:justify-start gap-2 mt-4 sm:mt-0 sm:mx-10">
              <a href="#">
                <FaFacebookF
                  size={35}
                  className="p-2 rounded-full bg-[#2E1E6B] hover:bg-Blue_Main_Official_1 text-white"
                />
              </a>
              <a href="#">
                <FaInstagram
                  size={35}
                  className="p-2 rounded-full bg-[#2E1E6B] hover:bg-Blue_Main_Official_1 text-white"
                />
              </a>
              <a href="#">
                <FaTwitter
                  size={35}
                  className="p-2 rounded-full bg-[#2E1E6B] hover:bg-Blue_Main_Official_1 text-white"
                />
              </a>
              <a href="#">
                <FaYoutube
                  size={35}
                  className="p-2 rounded-full bg-[#2E1E6B] hover:bg-Blue_Main_Official_1 text-white"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start w-full sm:w-7/12">
            <p className="text-start">
              Chances are you re about to lose. For free and confidential
              support call 1800 858 858 or visit{" "}
              <a
                href="https://www.gamblinghelponline.org.au"
                className="underline"
              >
                gamblinghelponline.org.au
              </a>
              . LastLeg® Sports is Licensed and regulated by the Northern
              Territory Racing Commission. View our Rules, Terms and Conditions.
              For South Australian residents, LastLeg® is fully compliant with
              the South Australian Gambling Codes of Practice. If you need any
              further assistance, please contact{" "}
              <a href="mailto:support@LastLeg.com.au" className="underline">
                support@LastLeg.com.au
              </a>
              .
            </p>
            <p className="text-sm mt-4">
              © Lastleg® Sports Interactive Pty Ltd. 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
