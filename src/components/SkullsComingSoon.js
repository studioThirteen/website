
import React from "react";
import { useNavigate } from "react-router-dom";

const SkullsComingSoon = () => {

    let navigate = useNavigate();

    const goSkulls = () => navigate("/Skulls");

    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="/assets/web/skullsAnimated.gif" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Funky Skulls
                        <br class="hidden lg:inline-block" />Coming Soon
                    </h1>
                    <p class="mb-8 leading-relaxed">by Alex S Design</p>
                </div>
            </div>
        </section>

    );
};

export default SkullsComingSoon