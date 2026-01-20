import Image from "next/image";
import Link from "next/link";
import { IPhoneMockup } from "react-device-mockup";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <IPhoneMockup
          screenWidth={400}
          screenType="island"
          transparentNavBar={true}
          statusbarColor="#000000"
        >
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="mb-8 text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
              Eye Witness
            </h1>
            <Link href="user-page">
              <button className="rounded-md bg-zinc-900 px-6 py-3 text-lg font-medium text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 cursor-pointer">
                User Page
              </button>
            </Link>
          </div>
        </IPhoneMockup>
      </main>
    </div>
  );
}
