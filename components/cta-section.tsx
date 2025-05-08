import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 mix-blend-overlay"></div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Healthcare Experience?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Join thousands of users who have simplified their healthcare journey with Doctor AI. Get started today
                  for free.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-300" />
                    <span className="text-white">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-300" />
                    <span className="text-white">Free basic plan available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-300" />
                    <span className="text-white">Cancel anytime</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-white font-medium mb-4">Choose Your Plan</div>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-white">Basic</div>
                      <div className="text-teal-300">Free</div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">Access to AI chatbot and symptom checker</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent text-white border-white/20 hover:bg-white/10"
                    >
                      Select Plan
                    </Button>
                  </div>

                  <div className="bg-white/20 rounded-lg p-4 border border-white/30 relative">
                    <div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-white">Premium</div>
                      <div className="text-teal-300">$9.99/mo</div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">
                      Full access to all features including doctor recommendations
                    </p>
                    <Button size="sm" className="w-full bg-white text-indigo-600 hover:bg-white/90">
                      Select Plan
                    </Button>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-white">Family</div>
                      <div className="text-teal-300">$19.99/mo</div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">Premium features for up to 5 family members</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent text-white border-white/20 hover:bg-white/10"
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
