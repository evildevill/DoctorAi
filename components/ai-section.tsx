import { Button } from "@/components/ui/button"
import { Brain, Zap, Shield, Sparkles } from "lucide-react"

export function AISection() {
  return (
    <section id="ai" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-6">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              AI-Powered Healthcare
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced AI Technology <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Powering Your Healthcare
              </span>
            </h2>

            <p className="text-slate-600 mb-8">
              Our platform leverages cutting-edge artificial intelligence to provide personalized healthcare solutions.
              Doctor AI combines natural language processing, machine learning, and medical knowledge to deliver
              accurate and helpful guidance.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Neural Networks</h3>
                  <p className="text-slate-600">
                    Trained on vast medical datasets to understand symptoms, conditions, and treatments with high
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Real-time Processing</h3>
                  <p className="text-slate-600">
                    Instant analysis of your symptoms and medical queries for immediate assistance when you need it
                    most.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Privacy-Focused</h3>
                  <p className="text-slate-600">
                    Your health data is encrypted and protected with state-of-the-art security measures and HIPAA
                    compliance.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
              Learn More About Our Technology
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-200/30 to-indigo-200/30 blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden border border-indigo-800 p-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500"></div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="h-5 w-5 text-indigo-400" />
                    <h4 className="text-white font-medium">AI Health Analysis</h4>
                  </div>
                  <div className="h-2 w-full bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-indigo-300">
                    <span>Processing...</span>
                    <span>75%</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex flex-col">
                  <div className="text-indigo-300 text-sm mb-1">Heart Rate</div>
                  <div className="text-white text-2xl font-bold">72 BPM</div>
                  <div className="mt-auto">
                    <svg className="w-full h-10" viewBox="0 0 100 20">
                      <path
                        d="M0,10 Q5,0 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10"
                        fill="none"
                        stroke="rgba(129, 140, 248, 0.5)"
                        strokeWidth="1"
                      />
                      <path
                        d="M0,10 Q5,5 10,10 T20,15 T30,5 T40,10 T50,5 T60,10 T70,15 T80,5 T90,10 T100,10"
                        fill="none"
                        stroke="rgb(129, 140, 248)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex flex-col">
                  <div className="text-indigo-300 text-sm mb-1">Sleep Quality</div>
                  <div className="text-white text-2xl font-bold">86%</div>
                  <div className="mt-auto flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full ${i <= 4 ? "bg-indigo-500" : "bg-indigo-900/50"}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mb-4">
                <h4 className="text-white font-medium mb-3">Symptom Analysis Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">Common Cold</span>
                    <span className="text-indigo-200">78%</span>
                  </div>
                  <div className="h-1.5 w-full bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">Seasonal Allergies</span>
                    <span className="text-indigo-200">45%</span>
                  </div>
                  <div className="h-1.5 w-full bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200">Sinusitis</span>
                    <span className="text-indigo-200">23%</span>
                  </div>
                  <div className="h-1.5 w-full bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full w-[23%] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                  View Detailed Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
