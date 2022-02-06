import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

const ContactForm = () => {
    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Have a project in mind?</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We can help</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-np-invisible="1" data-np-checked="1" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-np-invisible="1" data-np-checked="1" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <span class="inline-flex">
                                <a class="text-gray-500">
                                    <svg src="/openseaNegative.svg" />
                                </a>
                                <a class="ml-4 text-gray-500">
                                    <FiGithub />
                                </a>
                                <a class="ml-4 text-gray-500">
                                    <RiDiscordLine />
                                </a>
                                <a class="ml-4 text-gray-500">
                                    <FiTwitter />
                                </a>
                                <a class="ml-4 text-gray-500">
                                    <FaInstagram />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactForm;