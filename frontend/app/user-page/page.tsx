'use client';

import { IPhoneMockup } from "react-device-mockup";
import Link from "next/link";
import Image from "next/image";

export default function UserPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <IPhoneMockup
                screenWidth={400}
                screenType="island"
                transparentNavBar={true}
                statusbarColor="#000000"
            >
                <div className="relative h-full w-full bg-black overflow-hidden flex flex-col">
                    {/* Top Icons */}
                    <div className="absolute top-16 left-4 z-10">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-500">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="absolute top-16 right-4 z-10">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-500">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col pt-14 pb-2 px-3">
                        {/* Location Header */}
                        <div className="location-header flex items-center justify-center gap-2 px-4 py-2 rounded-full">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span className="text-white text-base font-bold tracking-wide">SAMYAN MITRTOWN</span>
                        </div>

                        {/* Safety Rating */}
                        <div className="mt-3">
                            <div className="safety-rating-card rounded-3xl p-4 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-white text-lg font-bold">Safety Rating</h2>
                                    <button className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full">
                                        <span className="text-white text-sm">i</span>
                                    </button>
                                </div>
                                <div className="flex justify-center gap-1 mb-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <svg key={star} className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                </div>
                                <p className="text-white text-center text-sm font-medium">(14 Reviews)</p>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="mt-3">
                            <div className="map-container rounded-3xl overflow-hidden relative">
                                <Image 
                                    src="https://maps.googleapis.com/maps/api/staticmap?center=13.7348,100.5305&zoom=15&size=600x400&markers=color:purple%7C13.7348,100.5305&key=YOUR_API_KEY"
                                    alt="Samyan Mitrtown Map"
                                    width={600}
                                    height={400}
                                    className="w-full h-40 object-cover"
                                    unoptimized
                                />
                                <div className="absolute bottom-0 left-0 right-0 safe-haven-badge p-2">
                                    <div className="flex items-center justify-center gap-2 text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                                        </svg>
                                        <span className="text-lg font-bold">4</span>
                                        <span className="text-base font-medium">Safe Haven Nearby</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Panic Button */}
                        <div className="flex justify-center py-4 flex-shrink-0">
                            <Link href="/stealth-mode">
                                <button className="panic-button relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden transition-transform hover:scale-105 active:scale-95">
                                    <div className="absolute inset-0 opacity-10 noise-texture"></div>
                                    <span className="text-white text-4xl font-bold tracking-wider relative z-10 text-center leading-tight" style={{fontFamily: 'serif'}}>
                                        PANIC<br/>BUTTON
                                    </span>
                                </button>
                            </Link>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="mt-auto pb-2">
                            <div className="bottom-nav rounded-full py-3 px-6">
                                <div className="flex justify-around items-center">
                                    {/* Home - Active (100% opacity) */}
                                    <Link href="/user-page">
                                        <button className="nav-icon nav-icon-active">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                            </svg>
                                        </button>
                                    </Link>

                                    {/* Map */}
                                    <Link href="/map-view">
                                        <button className="nav-icon nav-icon-inactive">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                                            </svg>
                                        </button>
                                    </Link>

                                    {/* Shield/Safety */}
                                    <Link href="/safety-info">
                                        <button className="nav-icon nav-icon-inactive">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                                            </svg>
                                        </button>
                                    </Link>

                                    {/* Profile */}
                                    <Link href="/profile">
                                        <button className="nav-icon nav-icon-inactive">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IPhoneMockup>
        </div>
    );
}
