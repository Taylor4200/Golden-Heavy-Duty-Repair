import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "John Davis",
    role: "Owner-Operator",
    initials: "JD",
    rating: 5,
    content: "When my truck broke down on I-95, Reliable Truck Repair was there within an hour. Their mobile mechanic fixed the issue right there on the shoulder. Saved me thousands in towing fees and lost time."
  },
  {
    name: "Sarah Miller",
    role: "Fleet Manager, JB Logistics",
    initials: "SM",
    rating: 5,
    content: "As a fleet manager, I need partners I can trust. Reliable Truck Repair handles all our maintenance and repair needs. Their preventative maintenance program has reduced our breakdowns by 60%."
  },
  {
    name: "Robert Johnson",
    role: "Small Fleet Owner",
    initials: "RJ",
    rating: 4.5,
    content: "I've been taking my trucks to Reliable for over 5 years. Their pricing is fair, the work is quality, and they always explain exactly what needs to be done. No surprise charges ever."
  }
];

export default function TestimonialsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex">
              {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                <Star key={i} className="fill-current" />
              ))}
              {testimonial.rating % 1 !== 0 && (
                <StarHalf className="fill-current" />
              )}
            </div>
            <span className="ml-2 text-gray-600">{testimonial.rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              {testimonial.initials}
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
