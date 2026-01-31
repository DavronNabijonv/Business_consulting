'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MoveLeft, MoveRight } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way.',
    author: 'Robert P',
    title: 'Real Estate Investor',
  },
  {
    id: 2,
    quote: 'Exceptional service and outstanding results. The team went above and beyond to ensure our business goals were met with precision and excellence.',
    author: 'Sarah M',
    title: 'Business Owner',
  },
  {
    id: 3,
    quote: 'Professional, reliable, and highly responsive. Working with them was one of the best decisions for our company growth and development.',
    author: 'James T',
    title: 'Corporate Executive',
  },
  {
    id: 4,
    quote: 'Incredible expertise combined with genuine care for client success. They delivered results that exceeded all our expectations and timelines.',
    author: 'Maria L',
    title: 'Entrepreneur',
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div className="bg-[#f6f6f6] rounded-lg p-8 md:p-12 min-h-100 flex flex-col justify-between">
          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 flex-1 flex flex-col justify-center"
            >
              {/* Quote */}
              <p className="text-xl md:text-2xl font-semibold text-center text-black leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg md:text-xl font-semibold text-black">
                  — {testimonials[currentIndex].author}, {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-300">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 text-black"
              aria-label="Previous testimonial"
            >
              <MoveLeft  className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-black w-3 h-3'
                      : 'bg-gray-400 w-2 h-2 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 text-black"
              aria-label="Next testimonial"
            >
              <MoveRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
