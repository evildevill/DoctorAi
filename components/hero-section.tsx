"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Healthcare
              </span>{" "}
              Reimagined with AI
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              Experience the future of healthcare with Doctor AI. Get instant medical advice, find specialists, analyze
              symptoms, and access medications—all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-32 h-12 text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="absolute right-1 top-1 h-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                  onClick={() => alert("Thank you for your interest!")}
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-slate-700">24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-slate-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-slate-700">Expert Verified</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-200/30 to-indigo-200/30 blur-3xl"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <h3 className="text-xl font-bold">Doctor AI Assistant</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600 font-medium">Online</span>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      AI
                    </div>
                    <div className="bg-slate-100 rounded-lg rounded-tl-none p-3 text-sm">
                      Hello! I&apos;m your AI health assistant. How can I help you today?
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-indigo-100 rounded-lg rounded-tr-none p-3 text-sm">
                      I&apos;ve been having headaches and fatigue for the past week.
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 text-xs font-bold">
                      You
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      AI
                    </div>
                    <div className="bg-slate-100 rounded-lg rounded-tl-none p-3 text-sm">
                      I&apos;m sorry to hear that. Let me ask you a few questions to better understand your symptoms. How
                      severe are your headaches on a scale of 1-10?
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Input placeholder="Type your message..." className="pr-10" />
                  <Button
                    size="sm"
                    className="absolute right-1 top-1 h-6 w-6 p-0 bg-gradient-to-r from-violet-600 to-indigo-600"
                  >
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Symptom Analysis
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Find Doctor
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Medications
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
