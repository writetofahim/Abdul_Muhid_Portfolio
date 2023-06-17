import React from "react";
import { IoMdQuote } from "react-icons/io";
import Testimonial1 from "../../assets/image/Testimonial-Desk-01.png";
import Testimonial2 from "../../assets/image/Testimonial-Desk-02.png";
import Testimonial3 from "../../assets/image/Testimonial-Desk-03.png";

const reviews = [
  {
    id: 1,
    name: "Julia Colins",
    designation: "Former Director",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    image: Testimonial1,
  },
  {
    id: 2,
    name: "Chase Adam",
    designation: "Co-Founder Coach",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    image: Testimonial2,
  },
  {
    id: 3,
    name: "Scott Bromfied",
    designation: "Co-Founder Shake",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.",
    image: Testimonial3,
  },
];

function ReviewCard({ review }) {
  return (
    <div className="bg-white shadow-lg p-6 flex items-center space-x-4 border-l-4 border-ascent-300 bg-no-repeat bg relative">
      <div className="w-3/5">
        <IoMdQuote className="text-5xl text-ascent-300 rotate-180" />
        <div className="flex-1">
          <p className="text-gray-600">{review.comment}</p>
          <h3 className="text-lg font-semibold mt-5">{review.name}</h3>
          <p className="text-sm text-ascent-300 ">{review.designation}</p>
        </div>
      </div>
      <div className="w-2/5">
        <div
          className="bg-no-repeat h-full absolute top-0 right-0 z-50 flex-1 w-full bg-right-top bg-cover"
          style={{
            backgroundImage: `url(${review.image})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function ClientReviewSection() {
  return (
    <div className="container mx-auto py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
