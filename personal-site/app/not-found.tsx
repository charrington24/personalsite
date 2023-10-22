import Link from "next/link";
import cat from "../public/cat-power.gif";
import Image, { StaticImageData } from "next/image";

export default function NotFound() {
  return (
    <div className="global">
      <div className="my-16 h-[70vh]">
        <div className={`flex flex-col`}>
          <div className={`justify-center items-center`}>
            <main className="flex-1">
              <div className="flex justify-center items-center flex-col md:py-40 md:px-10 lg:px-40 px-4 py-10">
                <h2 className="md:text-5xl text-4xl mt-12 font-bold ">404: Page Not Found</h2>
                <Image className="rounded my-8 shadow-md" src={cat} alt={"cat playing with wires gif"}/>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
