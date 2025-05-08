import { Star } from "lucide-react"
import Image from "next/image"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Doctor AI helped me find the right specialist when I was experiencing unusual symptoms. The recommendation was spot-on and I got the treatment I needed quickly.",
      author: "Sarah Johnson",
      role: "Marketing Executive",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "The medical chatbot provided immediate guidance when my child had a high fever at 2 AM. It was reassuring to get professional advice instantly.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "I love the convenience of ordering my regular medications through the app. The reminders and automatic refills have made managing my chronic condition so much easier.",
      author: "Emma Rodriguez",
      role: "Teacher",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-slate-600">
            Discover how Doctor AI has transformed healthcare experiences for people like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100 relative"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.6 16H0.8L6.4 0H11.2L5.6 16ZM14.4 16H9.6L15.2 0H20L14.4 16Z" fill="white" />
                </svg>
              </div>

              <div className="flex mb-4 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-200 mr-4">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
