"use client";
import Header from "@/components/header";
import Image from "next/image";

import React from "react";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];
// import backgroundImage from "@/Automars_bg.jpg";

function About() {
  let isSmallDevice = true;
  if (typeof window !== "undefined") {
    isSmallDevice = window.innerWidth <= 800;
  }
  const mainClasses = "flex flex-col bg-cover bg-no-repeat justify-center"; // past classes: h-[35vh] sm:h-[80vh].
  //NOTA: Aquí estaba creciendo porque le puse h-[35vh] sm:h-[80vh]
  const totalClasses = isSmallDevice ? " small-device-background" : "";
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div
        className={mainClasses + totalClasses}
        style={{ backgroundImage: `url(/autostlalpan-bg.jpg)` }}
      >
        <div className="mt-10 md:mt-28">
          <p className="font-sans text-xl  text-center sm:text-2xl font-bold sm:text-gray-100 self-center shrink-0 sm:shrink sm:mb-12">
            En{" "}
            <span className="font-extrabold text-red-600">
              Autos Certificados Tlalpan
            </span>{" "}
            le brindamos la mejor experiencia en la compra de autos
            certificados. Contamos con un amplio catálogo. También compramos tu
            auto al mejor precio. Somos la mejor agencia multimarca de México.
            Contamos con 20 años de servicio. Atención, calidad y precio nos
            respaldan.
          </p>
        </div>
        <div className="flex flex-wrap self-center justify-center sm:mb-28">
          <Image
            src="/Ford_logo_flat.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Mercedes-Benz_logo_2.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Nissan_2020_logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Peugeot_Logo.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Renault_2021.svg"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
          <Image
            src="/Chevrolet.png"
            alt="Ford"
            className="pr-2"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
