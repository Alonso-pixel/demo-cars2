import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function Header() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-white bg-black shadow-sm">
      {/* <nav className="flex justify-center mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full sm:justify-between"> */}
      <div className="flex flex-col sm:flex-row justify-start gap-1 sm:gap-5 text-sm font-bold leading-4 max-md:flex-wrap">
        <div className="self-center">
          <Link href={"/"}>
            <Image
              src="/Autos_tlalpan2.png"
              alt="Logo"
              className="rounded p-5"
              width={250}
              height={250}
            />
          </Link>
        </div>

        <div className="flex flex-col self-center md:flex-row px-2 py-px my-auto sm:gap-4">
          <Link className="text-center" href={"/"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              INICIO
            </Button>
          </Link>
          <Link className="text-center" href={"/technical"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              FICHAS TÉCNICAS
            </Button>
          </Link>
          <Link className="text-center" href={"/sell"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              VÉNDENOS TU COCHE
            </Button>
          </Link>

          <Link className="text-center" href={"/about"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              NOSOTROS
            </Button>
          </Link>
        </div>
        <div className="flex gap-0 self-center mt-4 text-xs sm:ml-auto leading-4 whitespace-nowrap">
          <Link
            href={
              "https://www.google.com/maps/place/Autos+Certificados+Tlalpan/@19.3376187,-99.1428236,15z/data=!4m2!3m1!1s0x0:0x7899d5e7cfd3cc88?sa=X&ved=1t:2428&ictx=111"
            }
            className="flex flex-col px-2 self-center"
          >
            <img
              loading="lazy"
              src={navItems[1]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Ubicación</div>
          </Link>
          <Link
            href={"https://www.facebook.com/autostlalpan/"}
            className="flex flex-col px-2"
          >
            <img
              loading="lazy"
              src={navItems[2]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Redes</div>
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
}

export default Header;
