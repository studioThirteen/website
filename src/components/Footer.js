import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to='/Home' id='logo'>
          <img
            src="../assets/web/footerLogo-1x.png"
            alt="studioThirteen"
          />
        </Link>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 studioThirteen —
          <a href="https://twitter.com/studio13io" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@studio13io</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg src="/openseaNegative.svg" />
          </a>
          <a class="ml-3 text-gray-500">
            <FiGithub />
          </a>
          <a class="ml-3 text-gray-500">
            <RiDiscordLine />
          </a>
          <a class="ml-3 text-gray-500">
            <FiTwitter />
          </a>
          <a class="ml-3 text-gray-500">
            <FaInstagram />
          </a>
        </span>
      </div>
    </footer>
  )
};

