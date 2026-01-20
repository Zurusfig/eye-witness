'use client';

import { IPhoneMockup } from "react-device-mockup";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <IPhoneMockup
                screenWidth={400}
                screenType="island"
                transparentNavBar={true}
                statusbarColor="#000000"
            >
                <div className="relative h-full w-full bg-black flex flex-col items-center justify-center p-8">
                    <h1 className="text-white text-4xl font-bold mb-8">Profile</h1>
                    <p className="text-gray-400 text-center mb-8">User profile and settings will be displayed here</p>
                    
                    <Link href="/user-page">
                        <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </IPhoneMockup>
        </div>
    );
}
