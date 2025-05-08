import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingBag, UserCheck, Activity, ArrowRight } from "lucide-react"

export function ServiceCards() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-slate-600">
            Explore our main services designed to provide comprehensive healthcare solutions at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Medical Chatbot Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-violet-600 to-indigo-600 relative">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Medical Chatbot</h3>
                </div>
                <p className="text-white/90">Get instant medical advice from our AI-powered assistant</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">24/7 availability for immediate assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Personalized health information and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Medical information verified by healthcare professionals</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                Try Medical Chatbot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Online Medical Store Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-600 relative">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Online Medical Store</h3>
                </div>
                <p className="text-white/90">Purchase medications and healthcare products online</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Wide range of prescription and OTC medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Fast doorstep delivery with tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Verified products with quality assurance</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                Browse Medical Store
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Doctor Recommendation Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-emerald-600 to-teal-600 relative">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Doctor Recommendation</h3>
                </div>
                <p className="text-white/90">Find the right specialist for your health needs</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">AI-powered matching based on your symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Filter by location, specialty, and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Verified credentials and patient reviews</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                Find a Doctor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Symptom Analysis Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-orange-600 to-amber-600 relative">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Symptom Analysis</h3>
                </div>
                <p className="text-white/90">Analyze your symptoms and get preliminary guidance</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Advanced AI analysis of your symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Potential conditions and recommended next steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-slate-700">Not a diagnosis but a helpful starting point</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                Analyze Symptoms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
