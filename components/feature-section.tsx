import { MessageSquare, ShoppingBag, UserCheck, Activity, LayoutDashboard, Brain } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Medical Chatbot",
      description: "Get instant medical advice and information from our AI-powered chatbot, available 24/7.",
      color: "from-violet-600 to-indigo-600",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      title: "Online Medical Store",
      description: "Browse and purchase medications with doorstep delivery and verified quality.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Doctor Recommendation",
      description: "Find the right specialist based on your symptoms, location, and preferences.",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      title: "Symptom Analysis",
      description: "Describe your symptoms and receive preliminary analysis and guidance.",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-white" />,
      title: "Unified Dashboard",
      description: "Access all your health information in one intuitive interface.",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI-Powered Insights",
      description: "Benefit from advanced AI algorithms that provide personalized health recommendations.",
      color: "from-purple-600 to-fuchsia-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Healthcare Solutions</h2>
          <p className="text-slate-600">
            Doctor AI combines cutting-edge technology with medical expertise to provide you with a complete healthcare
            management experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
