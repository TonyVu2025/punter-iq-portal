"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer/Footer";
import { FooterMenu } from "@/components/Footer/FooterMenu";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 bg-Subtle_dark">
        <SideBar />
        <main className="flex-1 overflow-x-auto">{children}</main>
      </div>
      <Footer />
      <FooterMenu />

      <Toaster />
    </div>
  );
};

export default Layout;
