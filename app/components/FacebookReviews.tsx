"use client";

import { useEffect, useState } from "react";

type Review = {
  created_time: string;
  recommendation_type: string;
  review_text: string;
};

export default function FacebookReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch("/api/facebook-reviews");

        if (!response.ok) {
          throw new Error("Failed to load reviews");
        }

        const data = await response.json();

        setReviews(data.data || []);
      } catch {
        setError("Could not load Facebook reviews.");
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-500">
        Loading Facebook reviews...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Recommended
            </span>

            <span className="text-sm text-gray-500">
              {new Date(review.created_time).toLocaleDateString()}
            </span>
          </div>

          <p className="text-gray-700">
            {review.review_text}
          </p>
        </div>
      ))}
    </div>
  );
}