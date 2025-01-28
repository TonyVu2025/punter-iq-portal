"use client";
import React from "react";
import { FormGuidesDrawer } from "@/components/FormGuidesDrawer";
import Image from "next/image";
import useMainStore from "@/stores/mainStore";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaCaretDown } from "react-icons/fa";
import { MobileNav } from "./MobileNav";

const DesktopNav = () => {
  return (
    <div className="hidden items-center gap-4 space-x-3 md:space-x-0 lg:flex">
      <div className="flex items-center justify-between gap-4 rounded-lg lg:border">
        <div className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white lg:hidden">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000973435 8.75118C0.000973435 6.46166 0.000973435 4.17231 0.000973435 1.88311C0.000973435 0.745165 0.743704 0 1.88068 0C5.70109 0 9.52133 0 13.3414 0C14.2414 0 14.9398 0.524195 15.1379 1.35259C15.1746 1.51219 15.1924 1.67555 15.1909 1.83931C15.1939 5.6714 15.1939 9.50316 15.1909 13.3346C15.1909 14.0973 14.8167 14.6341 14.1635 14.9894C14.0564 15.0478 14.0218 15.1058 14.0175 15.224C14.0121 15.5331 14.0287 15.8495 13.9659 16.1488C13.8048 16.9378 13.1282 17.4824 12.3208 17.5218C12.2663 17.5218 12.2117 17.5248 12.1567 17.5248C8.72539 17.5228 5.29387 17.5218 1.86218 17.5218C0.967595 17.5218 0.269642 17.0108 0.0613264 16.1946C0.0201171 16.018 0.000827409 15.837 0.00389374 15.6558C0 13.3542 -0.000973435 11.0527 0.000973435 8.75118ZM1.1691 14.0764C1.45772 14.0564 1.72785 14.0218 1.99652 14.0214C5.76047 14.0181 9.52539 14.0173 13.2913 14.0189C13.7342 14.0189 14.0243 13.7415 14.0243 13.3171C14.0243 9.49213 14.0243 5.66702 14.0243 1.84174C14.0243 1.38276 13.8023 1.1652 13.3385 1.1652C11.6866 1.1652 10.0348 1.1652 8.38322 1.1652C8.31898 1.1652 8.25473 1.17056 8.17686 1.17445V1.40661C8.17686 2.65164 8.17442 3.89617 8.17686 5.14071C8.17686 5.40889 8.11699 5.63619 7.86292 5.76809C7.60886 5.89999 7.38594 5.82552 7.16546 5.67415C6.77024 5.40305 6.36627 5.14509 5.97057 4.87399C5.87614 4.80926 5.81043 4.80585 5.71455 4.87399C5.31252 5.15045 4.90433 5.42171 4.48997 5.68778C4.39122 5.75688 4.2789 5.80416 4.16046 5.8265C3.78082 5.8776 3.50534 5.60212 3.50534 5.18452C3.50534 3.92165 3.50534 2.65878 3.50534 1.39591V1.1652H3.31065C2.83075 1.1652 2.35101 1.1652 1.87143 1.1652C1.37984 1.1652 1.1691 1.37449 1.1691 1.86218C1.1691 5.87501 1.1691 9.88815 1.1691 13.9016V14.0764ZM12.845 15.1856H1.89917C1.83833 15.1856 1.77749 15.1856 1.71714 15.1856C1.63198 15.1892 1.54872 15.2118 1.47347 15.2518C1.39822 15.2918 1.3329 15.3482 1.28232 15.4168C1.23175 15.4854 1.1972 15.5645 1.18123 15.6482C1.16525 15.7319 1.16826 15.8182 1.19002 15.9006C1.26303 16.2077 1.48206 16.3537 1.86413 16.3537H12.1533C12.2072 16.3568 12.2611 16.3568 12.3149 16.3537C12.6016 16.323 12.808 16.143 12.8386 15.8597C12.8635 15.6431 12.845 15.4246 12.845 15.1856ZM4.68076 1.17445V4.12883C4.70072 4.12883 4.71483 4.13321 4.72262 4.12883C4.95625 3.976 5.18938 3.82268 5.42203 3.66888C5.75641 3.44742 5.93406 3.44791 6.27184 3.67228L6.99949 4.15608V1.17445H4.68076Z"
              fill="white"
            />
            <path
              d="M7.58136 9.33928C6.42249 9.33928 5.26361 9.34171 4.10425 9.33928C3.65209 9.33928 3.38683 8.96499 3.53479 8.54885C3.56302 8.4552 3.61757 8.37163 3.69196 8.30812C3.76635 8.24461 3.85743 8.20382 3.95434 8.19062C4.01401 8.18056 4.0744 8.17535 4.13492 8.17505C6.44098 8.17505 8.74689 8.17505 11.0526 8.17505C11.2994 8.17505 11.5097 8.23978 11.6284 8.47779C11.8377 8.89831 11.57 9.3383 11.093 9.34025C9.92393 9.3422 8.75289 9.33976 7.58136 9.33928Z"
              fill="white"
            />
            <path
              d="M5.8291 11.6814C5.24503 11.6814 4.66341 11.6857 4.08081 11.6814C3.65882 11.6775 3.40816 11.3572 3.49674 10.9513C3.51639 10.8421 3.57029 10.742 3.65062 10.6656C3.73096 10.5891 3.83355 10.5402 3.94355 10.5259C4.01554 10.5149 4.08829 10.5096 4.16111 10.5103C5.27245 10.5103 6.38347 10.5103 7.49416 10.5103C7.52433 10.5103 7.55451 10.5103 7.58517 10.5103C7.95995 10.5288 8.18043 10.7537 8.17508 11.107C8.16972 11.4506 7.94583 11.6721 7.57885 11.6775C7.1116 11.6848 6.64435 11.6775 6.17661 11.6775L5.8291 11.6814Z"
              fill="white"
            />
          </svg>

          <FaCaretDown className="absolute left-1/2 top-full -translate-x-1/2 text-white" />
        </div>

        <button
          type="button"
          className="relative flex rounded-full text-sm focus:ring-4 focus:ring-gray-300 md:me-0"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="rounded-full"
            src="/img/profile.png"
            alt="user photo"
            width={45}
            height={45}
          />

          <FaCaretDown className="absolute left-1/2 top-full -translate-x-1/2 text-white" />
        </button>

        <div className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white text-[19px] font-bold text-white lg:hidden">
          16
          <span className="absolute right-1.5 top-1 h-[24px] w-[24px] -translate-y-1/2 translate-x-1/2 rounded-full bg-action_ll2 text-center text-xs font-normal leading-[22px] text-white">
            9+
          </span>
        </div>

        <div className="hidden p-1 text-sm font-medium lg:flex">
          <span className="flex flex-col">
            <span className="text-[12px]">Hello Kane</span>
            <span className="text-[16px]">My Account</span>
          </span>
          <span className="flex items-center">
            <div className="mx-4 h-3 w-px bg-gray-200 dark:bg-gray-500"></div>
          </span>
          <span className="flex flex-col">
            <span className="text-[12px]">Balance</span>
            <span className="text-[16px]">VC199.99</span>
          </span>
        </div>
      </div>
      <div className="relative hidden rounded-lg border text-sm lg:flex">
        <div className="flex cursor-pointer flex-col items-center rounded-s-md bg-action_ll1 px-4 py-1 text-white">
          <span>Pending</span>
          <span className="text">15</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center rounded-e-md px-4 py-1 text-gray-500">
          <span>Bet Slip</span>
          <span>25</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={styles.navbar}>
        <MainNav />

        <div className="flex items-center justify-end space-x-2">
          <DesktopNav />

          {/* Mobile only */}
          <div className="flex items-center lg:hidden">
            <div className="pr-3 text-[12px]">
              <span className="text-2xs">Balance</span>
              <p>VC199.99</p>
            </div>

            <div className="flex whitespace-nowrap text-2xs">
              <Link
                href="#"
                className="inline-block rounded-l-lg bg-action_ll1 px-3 pb-1.5 pt-1.5 text-center text-white"
              >
                Pending
                <br /> <strong className="text-xs">15</strong>
              </Link>
              <Link
                href="#"
                className="inline-block rounded-r-lg border border-SubDark_Color_3 px-3 pb-1.5 pt-1.5 text-center"
              >
                Bet Slip <br /> <strong className="text-xs">25</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </header>
  );
};

const MainNav = () => {
  const isDrawerOpen = useMainStore((state) => state.isDrawerOpen);

  return (
    <div className="lg:mr-4 lg:flex">
      <div className="flex h-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/img/last-leg-logo.svg"
            alt="LastLeg Logo"
            width={130}
            height={40}
          />
        </a>
        <div
          className="hidden w-full px-5 md:order-1 md:w-auto lg:flex"
          id="navbar-user"
        >
          <ul className="m-[0.5px] mt-4 flex items-stretch rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:border-0 md:p-0 rtl:space-x-reverse">
            <li
              className={`flex items-center px-5 py-5 hover:bg-Subtle_dark hover:dark:bg-gray-900 lg:p-0 ${
                isDrawerOpen ? "bg-Subtle_dark text-pCustom" : ""
              }`}
            >
              <FormGuidesDrawer />
            </li>
            <li className="flex items-center">
              <div className="h-4 w-px bg-gray-200 hover:bg-Subtle_dark"></div>
            </li>
            <li className="flex items-center px-4 py-5 hover:bg-Subtle_dark hover:dark:bg-gray-900 xl:px-5">
              <a
                href="#"
                className="w-full rounded px-3 py-3 md:p-0 md:hover:bg-transparent"
              >
                Tips
              </a>
            </li>
            <li className="flex items-center">
              <div className="h-4 w-px bg-gray-200 dark:bg-gray-500"></div>
            </li>
            <li className="flex items-center px-4 py-5 hover:bg-Subtle_dark hover:dark:bg-gray-900 xl:px-5">
              <Link
                href="/social-feed"
                className="w-full rounded px-3 py-3 md:p-0 md:hover:bg-transparent"
              >
                Social Feed
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
