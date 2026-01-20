'use client';

import { IPhoneMockup } from "react-device-mockup";
import Link from "next/link";

export default function StealthMode() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <IPhoneMockup
                screenWidth={400}
                screenType="island"
                transparentNavBar={true}
                statusbarColor="#000000"
            >
                <div className="relative h-full w-full bg-black flex flex-col items-center justify-center p-8">
                    <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto mb-6">
                            <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16v2h2v-2h-2zm0-6v4h2v-4h-2z"/>
                            </svg>
                        </div>
                        
                        <h1 className="text-white text-5xl font-bold mb-4">STEALTH MODE</h1>
                        
                        <p className="text-gray-400 text-xl mb-8">
                            Emergency protocol activated
                        </p>
                        
                        <div className="bg-red-900/30 border-2 border-red-500 rounded-2xl p-6 mb-8">
                            <p className="text-white text-lg">
                                Stealth mode functionality will be implemented here.
                                <br/><br/>
                                This will include emergency contacts, location sharing, and discreet alert features.
                            </p>
                        </div>
                        
                        <Link href="/user-page">
                            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-full font-bold text-xl hover:opacity-90 transition-opacity">
                                Return to Safety
                            </button>
                        </Link>
                    </div>
                </div>
            </IPhoneMockup>
        </div>
    );
}
