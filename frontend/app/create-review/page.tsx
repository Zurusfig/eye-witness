'use client';

import { IPhoneMockup } from "react-device-mockup";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function CreateReviewContent() {
    const searchParams = useSearchParams();
    const location = searchParams.get('location') || 'Unknown Location';
    
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [summary, setSummary] = useState('');
    const [fullReview, setFullReview] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the review to your backend
        console.log('Submitting review:', {
            location,
            rating,
            summary,
            fullReview
        });
        alert('Review submitted successfully!');
        // Redirect back to map view
        window.location.href = '/map-view';
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <IPhoneMockup
                screenWidth={400}
                screenType="island"
                transparentNavBar={true}
                statusbarColor="#000000"
            >
                <div className="relative h-full w-full bg-black overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 pt-16 pb-4">
                        <Link href="/map-view">
                            <button className="w-8 h-8 flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                        </Link>
                        <h1 className="text-white text-xl font-bold">Create Review</h1>
                        <div className="w-8"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Location Display */}
                            <div className="location-header rounded-2xl p-4">
                                <div className="flex items-center gap-2 justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    <span className="text-white text-base font-bold">{location}</span>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="form-section rounded-2xl p-5">
                                <label className="block text-white text-sm font-semibold mb-3">
                                    Safety Rating *
                                </label>
                                <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="transition-transform hover:scale-110"
                                        >
                                            <svg 
                                                className="w-10 h-10 text-white" 
                                                fill={star <= (hoveredRating || rating) ? "currentColor" : "none"}
                                                stroke="currentColor"
                                                strokeWidth={star <= (hoveredRating || rating) ? "0" : "2"}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="form-section rounded-2xl p-5">
                                <label className="block text-white text-sm font-semibold mb-3">
                                    Review Summary *
                                </label>
                                <input
                                    type="text"
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                    placeholder="Brief summary of your experience"
                                    maxLength={60}
                                    required
                                    className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                />
                                <p className="text-white text-xs opacity-60 mt-2">
                                    {summary.length}/60 characters
                                </p>
                            </div>

                            {/* Full Review */}
                            <div className="form-section rounded-2xl p-5">
                                <label className="block text-white text-sm font-semibold mb-3">
                                    Full Review *
                                </label>
                                <textarea
                                    value={fullReview}
                                    onChange={(e) => setFullReview(e.target.value)}
                                    placeholder="Share your detailed experience about safety, lighting, accessibility, etc."
                                    required
                                    rows={6}
                                    maxLength={500}
                                    className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
                                />
                                <p className="text-white text-xs opacity-60 mt-2">
                                    {fullReview.length}/500 characters
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!rating || !summary || !fullReview}
                                className="submit-button w-full py-4 rounded-full text-white font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </IPhoneMockup>
        </div>
    );
}

export default function CreateReview() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-black">
                <div className="text-white">Loading...</div>
            </div>
        }>
            <CreateReviewContent />
        </Suspense>
    );
}
