import type { QuickReply } from "./types"

export const initialMessages = [
  {
    id: "welcome",
    content:
      "Hello! I'm Doctor AI, your personal medical assistant. I can help answer your health questions and provide general medical information. What's your name?",
    role: "bot" as const,
    timestamp: new Date(),
  },
]

export const commonSymptoms: QuickReply[] = [
  { text: "Headache", value: "I have a headache" },
  { text: "Fever", value: "I have a fever" },
  { text: "Cough", value: "I have a cough" },
  { text: "Sore throat", value: "I have a sore throat" },
  { text: "Stomach pain", value: "I have stomach pain" },
]

export const commonQuestions: QuickReply[] = [
  { text: "Cold remedies", value: "What are some remedies for a common cold?" },
  { text: "Flu vs. Cold", value: "How can I tell if I have the flu or just a cold?" },
  { text: "Allergies", value: "How do I manage seasonal allergies?" },
  { text: "Sleep Issues", value: "I have trouble sleeping, what can I do?" },
  { text: "Back Pain", value: "What can help with back pain?" },
]

interface Response {
  keywords: string[]
  response: string
  followUp?: string
  quickReplies?: QuickReply[]
}

export const botResponses: Response[] = [
  {
    keywords: ["headache", "head", "pain in my head", "head pain", "migraine"],
    response:
      "Headaches can be caused by many factors including stress, dehydration, lack of sleep, or underlying conditions. Try resting in a dark, quiet room, staying hydrated, and taking over-the-counter pain relievers if needed.",
    followUp: "How long have you been experiencing this headache?",
    quickReplies: [
      { text: "Less than a day", value: "My headache started less than a day ago" },
      { text: "1-3 days", value: "I've had this headache for 1-3 days" },
      { text: "Several days", value: "I've had this headache for several days" },
      { text: "Recurring", value: "I get these headaches regularly" },
    ],
  },
  {
    keywords: ["fever", "temperature", "feeling hot", "chills"],
    response:
      "Fever is often a sign that your body is fighting an infection. Rest, stay hydrated, and take over-the-counter fever reducers if needed. Monitor your temperature regularly.",
    followUp: "What other symptoms are you experiencing along with the fever?",
    quickReplies: [
      { text: "Cough", value: "I also have a cough with my fever" },
      { text: "Sore throat", value: "I also have a sore throat with my fever" },
      { text: "Body aches", value: "I also have body aches with my fever" },
      { text: "No other symptoms", value: "I don't have any other symptoms besides fever" },
    ],
  },
  {
    keywords: ["cough", "coughing", "chest congestion"],
    response:
      "Coughs can be due to various causes including viral infections, allergies, or irritants. Stay hydrated, use honey (if over 1 year old), consider cough drops, and use a humidifier for dry air.",
    followUp: "Is your cough dry or does it produce phlegm/mucus?",
    quickReplies: [
      { text: "Dry cough", value: "I have a dry cough" },
      { text: "Productive cough", value: "My cough produces phlegm/mucus" },
      { text: "Sometimes dry, sometimes not", value: "My cough varies between dry and productive" },
    ],
  },
  {
    keywords: ["sore throat", "throat pain", "strep", "throat hurts"],
    response:
      "Sore throats are commonly caused by viral infections, but can also be due to bacterial infections like strep throat. Gargle with salt water, stay hydrated, use throat lozenges, and rest your voice.",
    followUp: "Do you have any other symptoms like fever or difficulty swallowing?",
    quickReplies: [
      { text: "Yes, with fever", value: "Yes, I have a fever with my sore throat" },
      { text: "Yes, trouble swallowing", value: "Yes, I have trouble swallowing" },
      { text: "Both", value: "Yes, I have both fever and trouble swallowing" },
      { text: "No other symptoms", value: "No, just the sore throat" },
    ],
  },
  {
    keywords: ["stomach", "belly", "abdominal", "tummy", "digestive", "nausea", "vomiting"],
    response:
      "Stomach pain can be caused by indigestion, gas, stomach viruses, or more serious conditions. Try eating bland foods, staying hydrated, and avoiding spicy or fatty foods until you feel better.",
    followUp: "Where exactly is the pain located and is it constant or intermittent?",
    quickReplies: [
      { text: "Upper abdomen", value: "The pain is in my upper abdomen" },
      { text: "Lower abdomen", value: "The pain is in my lower abdomen" },
      { text: "All over", value: "The pain is all over my abdomen" },
      { text: "Comes and goes", value: "The pain comes and goes" },
    ],
  },
  {
    keywords: ["cold remedies", "common cold", "treat cold"],
    response:
      "For a common cold, rest, stay hydrated, use over-the-counter cold medications to relieve symptoms, try saline nasal spray, and use a humidifier to add moisture to the air. Most colds resolve within 7-10 days.",
    quickReplies: [
      { text: "Cold vs. Flu", value: "How can I tell if I have a cold or the flu?" },
      { text: "When to see a doctor", value: "When should I see a doctor for a cold?" },
      { text: "Prevention tips", value: "How can I prevent catching a cold?" },
    ],
  },
  {
    keywords: ["flu", "cold vs flu", "influenza"],
    response:
      "Flu symptoms tend to be more severe than cold symptoms and come on suddenly. Flu often includes fever, body aches, extreme tiredness, and dry cough. Colds typically cause runny/stuffy nose, sneezing, and mild fatigue.",
    quickReplies: [
      { text: "Flu treatment", value: "How do I treat the flu?" },
      { text: "Flu prevention", value: "How can I prevent getting the flu?" },
      { text: "When to seek help", value: "When should I seek medical help for the flu?" },
    ],
  },
  {
    keywords: ["allerg", "hayfever", "seasonal", "pollen"],
    response:
      "For seasonal allergies, try over-the-counter antihistamines, keep windows closed during high pollen days, shower after being outdoors, use air purifiers indoors, and try nasal irrigation with saline solution.",
    quickReplies: [
      { text: "Allergy medications", value: "What medications work best for allergies?" },
      { text: "Food allergies", value: "How are food allergies different from seasonal allergies?" },
      { text: "Allergy testing", value: "Should I get tested for allergies?" },
    ],
  },
  {
    keywords: ["sleep", "insomnia", "trouble sleeping", "can't sleep"],
    response:
      "For better sleep, maintain a regular sleep schedule, create a restful environment, limit daytime naps, stay physically active, manage stress, and limit caffeine and electronics before bedtime.",
    quickReplies: [
      { text: "Sleep aids", value: "Are sleep aids or supplements helpful?" },
      { text: "Sleep disorders", value: "What are common sleep disorders?" },
      { text: "Sleep hygiene tips", value: "What is good sleep hygiene?" },
    ],
  },
  {
    keywords: ["back pain", "backache", "pain in my back", "spine"],
    response:
      "For back pain relief, try over-the-counter pain relievers, apply heat or ice, stay active but avoid movements that increase pain, and consider physical therapy exercises that strengthen core muscles.",
    quickReplies: [
      { text: "Prevention tips", value: "How can I prevent back pain?" },
      { text: "When to see a doctor", value: "When should I see a doctor for back pain?" },
      { text: "Exercises for back pain", value: "What exercises help with back pain?" },
    ],
  },
  {
    keywords: ["medication", "medicine", "drug", "prescription", "pill", "tablet"],
    response:
      "I can provide general information about medications, but for specific advice about prescriptions, dosages, or interactions, please consult your doctor or pharmacist. They can provide personalized guidance for your situation.",
    quickReplies: [
      { text: "Side effects", value: "How can I manage medication side effects?" },
      { text: "Multiple medications", value: "What should I know about taking multiple medications?" },
      { text: "Browse medical store", value: "I'd like to browse the online medical store" },
    ],
  },
  {
    keywords: ["doctor", "physician", "appointment", "medical professional", "clinic", "hospital"],
    response:
      "While I can provide general health information, it's important to consult with a healthcare professional for personalized medical advice, diagnosis, and treatment. Regular check-ups are important for preventive care.",
    quickReplies: [
      { text: "Telehealth options", value: "What are telehealth options?" },
      { text: "Finding specialists", value: "How do I find the right specialist?" },
      { text: "Preparing for appointments", value: "How should I prepare for a doctor appointment?" },
    ],
  },
  {
    keywords: ["exercise", "workout", "physical activity", "fitness"],
    response:
      "Regular physical activity is important for overall health. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus muscle-strengthening activities twice a week.",
    quickReplies: [
      { text: "Starting exercise", value: "How do I start exercising safely?" },
      { text: "Exercise benefits", value: "What are the health benefits of regular exercise?" },
      { text: "Home workout tips", value: "What are some effective home workout options?" },
    ],
  },
  {
    keywords: ["diet", "nutrition", "food", "eating", "healthy eating"],
    response:
      "A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, added sugars, and excessive sodium. Stay hydrated and practice portion control for overall health.",
    quickReplies: [
      { text: "Weight management", value: "How can diet help with weight management?" },
      { text: "Special dietary needs", value: "What should I know about special diets like keto or vegan?" },
      { text: "Nutrition for conditions", value: "How does nutrition affect chronic conditions?" },
    ],
  },
  {
    keywords: ["stress", "anxiety", "mental health", "depression"],
    response:
      "Managing stress and mental health is important. Try techniques like deep breathing, meditation, regular exercise, adequate sleep, connecting with others, and limiting sources of stress when possible.",
    quickReplies: [
      { text: "Finding support", value: "How do I find mental health support?" },
      { text: "Anxiety management", value: "What are techniques for managing anxiety?" },
      { text: "Mindfulness practices", value: "How can mindfulness help with stress?" },
    ],
  },
]

export const fallbackResponses = [
  "I don't have specific information about that, but I'd be happy to help with common health questions about symptoms, conditions, or general wellness advice.",
  "I'm not able to provide specific information on that topic. Is there something else I can help you with, like information about common symptoms or general health advice?",
  "I'm sorry, but I don't have enough information to answer that question accurately. I can help with general health questions about common symptoms and conditions instead.",
  "That's beyond my current capabilities. I can assist with general health inquiries like managing common symptoms, healthy lifestyle tips, or basic medical information.",
]
