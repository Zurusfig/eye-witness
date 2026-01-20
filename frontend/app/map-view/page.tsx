'use client';

import { IPhoneMockup } from "react-device-mockup";
import Link from "next/link";
import Image from "next/image";

export default function MapView() {
    const location = "Samyan Mitrtown";
    const safetyRating = 4;
    const totalReviews = 14;

    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <IPhoneMockup
                screenWidth={400}
                screenType="island"
                transparentNavBar={true}
                statusbarColor="#000000"
            >
                <div className="relative h-full w-full bg-black overflow-hidden flex flex-col">
                    {/* Back Button */}
                    <div className="absolute top-16 left-4 z-20">
                        <Link href="/user-page">
                            <button className="w-8 h-8 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Map Background */}
                    <div className="absolute inset-0">
                        <Image 
                            src="https://maps.googleapis.com/maps/api/staticmap?center=13.7348,100.5305&zoom=15&size=600x800&markers=color:purple%7C13.7348,100.5305&key=YOUR_API_KEY"
                            alt="Samyan Mitrtown Map"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Location Header */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="location-header flex items-center justify-center gap-2 px-4 py-2 rounded-full">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span className="text-white text-base font-bold tracking-wide">SAMYAN MITRTOWN</span>
                        </div>
                    </div>

                    {/* Plus Button for Creating Review */}
                    <div className="absolute top-32 right-4 z-20">
                        <Link href={`/create-review?location=${encodeURIComponent(location)}`}>
                            <button className="create-review-button w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Bottom Sheet with Safety Rating */}
                    <div className="absolute bottom-0 left-0 right-0 z-10">
                        {/* Safety Rating Card */}
                        <div className="px-3 pb-3">
                            <div className="safety-rating-card rounded-3xl p-4 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-white text-xl font-bold">SAMYAN MITRTOWN</h2>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-white text-base font-semibold">Safety Rating</span>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                                        </svg>
                                        <span className="text-white text-base font-medium">4 Safe Havens Nearby</span>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg 
                                            key={star} 
                                            className="w-7 h-7 text-white" 
                                            fill={star <= safetyRating ? "currentColor" : "none"}
                                            stroke="currentColor"
                                            strokeWidth={star <= safetyRating ? "0" : "2"}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-white text-center text-sm font-medium">({totalReviews} Reviews)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </IPhoneMockup>
        </div>
    );
}
