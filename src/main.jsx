import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Workflow from "./Workflow.jsx";

const languages = ["English", "हिन्दी", "ਪੰਜਾਬੀ" , "मराठी" , "বাংলা", "தமிழ்", "తెలుగు"]; // Add more languages as needed 

const answers = { // Add more topics and languages as needed
  English: {
    "Binary Search": {
      title: "Binary Search — Simple Explanation",
      text:
        "Binary search finds an item in a sorted list by repeatedly checking the middle element and removing half of the remaining search space.",
      bullets: [
        "The array must be sorted.",
        "Check the middle element.",
        "Discard the half that cannot contain the answer.",
        "Repeat until the item is found."
      ]
    },

    "Photosynthesis": {
      title: "Photosynthesis — Simple Explanation",
      text:
        "Photosynthesis is the process by which green plants make their food using sunlight, water and carbon dioxide.",
      bullets: [
        "Plants use sunlight as energy.",
        "Plants take carbon dioxide from the air.",
        "Plants absorb water through their roots.",
        "Plants produce food and release oxygen."
      ]
    },
    "newtons first law": {
      title: "Newton's First Law of Motion — Simple Explanation",
      text:
        "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force.",
      bullets: [
        "An object at rest stays at rest.",
        "An object in motion stays in motion.",
        "A force is needed to change the object's state.",
        "This law is also known as the law of inertia."
      ]
    },
    "chain reaction": {
      title: "Chain Reaction — Simple Explanation",
      text:
        "A chain reaction is a process where the products of one reaction initiate further reactions, leading to a self-sustaining sequence.",
      bullets: [
        "One reaction triggers another.",
        "The process continues without external input.",
        "Common in nuclear reactions.",
        "Can be controlled or uncontrolled."
      ]
    },
    "AI": {
      title: "Artificial Intelligence — Simple Explanation",
      text:
        "Artificial Intelligence (AI) is a technology that enables computers and machines to perform tasks that normally require human intelligence.",
      bullets: [
        "AI can learn from data.",
        "AI can recognize patterns and make decisions.",
        "AI is used in applications like voice assistants, recommendation systems, and image recognition.",
        "AI can automate tasks and solve complex problems."
      ]
    }
  },

  "हिन्दी": {
    "Binary Search": {
      title: "बाइनरी सर्च — आसान भाषा में",
      text:
        "बाइनरी सर्च sorted list में किसी item को खोजने का तरीका है। हर बार बीच वाले element को देखकर search area का आधा हिस्सा हटा दिया जाता है।",
      bullets: [
        "Array का sorted होना जरूरी है।",
        "बीच वाला element देखें।",
        "जिस आधे हिस्से में answer नहीं हो सकता उसे हटा दें।",
        "Item मिलने तक दोहराएँ।"
      ]
    },

    "Photosynthesis": {
      title: "प्रकाश संश्लेषण — आसान भाषा में",
      text:
        "प्रकाश संश्लेषण वह प्रक्रिया है जिसमें हरे पौधे सूर्य के प्रकाश की मदद से अपना भोजन बनाते हैं।",
      bullets: [
        "पौधे सूर्य के प्रकाश का उपयोग करते हैं।",
        "पौधे हवा से carbon dioxide लेते हैं।",
        "पौधे जड़ों से पानी लेते हैं।",
        "पौधे भोजन बनाते हैं और oxygen छोड़ते हैं।"
      ]
    },
    "newtons first law": {
      title: "न्यूटन का पहला गति का नियम — आसान भाषा में",
      text:
        "न्यूटन का पहला नियम कहता है कि कोई वस्तु तब तक स्थिर रहेगी या समान गति से चलेगी जब तक उस पर कोई बाहरी बल कार्य नहीं करता।",
      bullets: [
        "एक वस्तु जो स्थिर है, वह स्थिर रहेगी।",
        "एक वस्तु जो गति में है, वह गति में रहेगी।",
        "वस्तु की स्थिति बदलने के लिए बल की आवश्यकता होती है।",
        "इस नियम को जड़त्व का नियम भी कहा जाता है।"
      ]
    },
    "chain reaction": {
      title: "श्रृंखला प्रतिक्रिया — आसान भाषा में",
      text:
        "श्रृंखला प्रतिक्रिया एक प्रक्रिया है जिसमें एक प्रतिक्रिया के उत्पाद आगे की प्रतिक्रियाओं को शुरू करते हैं, जिससे एक आत्म-स्थायी अनुक्रम बनता है।",
      bullets: [
        "एक प्रतिक्रिया दूसरी को ट्रिगर करती है।",
        "प्रक्रिया बाहरी इनपुट के बिना जारी रहती है।",
        "आम तौर पर नाभिकीय प्रतिक्रियाओं में होती है।",
        "इसे नियंत्रित या असंयमित किया जा सकता है।"
      ]
    },
    "AI": {
      title: "कृत्रिम बुद्धिमत्ता — सरल व्याख्या",
      text:
        "कृत्रिम बुद्धिमत्ता (AI) एक ऐसी तकनीक है जो कंप्यूटर और मशीनों को ऐसे कार्य करने में सक्षम बनाती है जिनके लिए सामान्यतः मानव बुद्धिमत्ता की आवश्यकता होती है।",
      bullets: [
        "AI डेटा से सीख सकता है।",
        "AI पैटर्न को पहचानकर निर्णय ले सकता है।",
        "AI का उपयोग वॉयस असिस्टेंट, सुझाव प्रणाली और छवि पहचान जैसी तकनीकों में किया जाता है।",
        "AI कार्यों को स्वचालित कर सकता है और जटिल समस्याओं को हल करने में मदद कर सकता है।"
      ]
    }
  },

  "ਪੰਜਾਬੀ": {
    "Binary Search": {
      title: "ਬਾਈਨਰੀ ਸਰਚ — ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ",
      text:
        "Binary Search sorted list ਵਿੱਚ ਕਿਸੇ item ਨੂੰ ਲੱਭਣ ਦਾ ਤਰੀਕਾ ਹੈ।",
      bullets: [
        "Array sorted ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
        "ਵਿਚਕਾਰਲਾ element check ਕਰੋ।",
        "ਗਲਤ half ਨੂੰ ਹਟਾਓ।",
        "Item ਮਿਲਣ ਤੱਕ repeat ਕਰੋ।"
      ]
    },

    "Photosynthesis": {
      title: "ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ — ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ",
      text:
        "ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਉਹ ਪ੍ਰਕਿਰਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰੇ ਪੌਦੇ ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਦੀ ਮਦਦ ਨਾਲ ਆਪਣਾ ਭੋਜਨ ਬਣਾਉਂਦੇ ਹਨ।",
      bullets: [
        "ਪੌਦੇ ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਵਰਤਦੇ ਹਨ।",
        "ਪੌਦੇ ਹਵਾ ਵਿੱਚੋਂ carbon dioxide ਲੈਂਦੇ ਹਨ।",
        "ਪੌਦੇ ਜੜ੍ਹਾਂ ਰਾਹੀਂ ਪਾਣੀ ਲੈਂਦੇ ਹਨ।",
        "ਪੌਦੇ oxygen ਛੱਡਦੇ ਹਨ।"
      ]
    },
    "newtons first law": {
      title: "ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਗਤੀ ਦਾ ਕਾਨੂੰਨ — ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ",
      text:
        "ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਕਾਨੂੰਨ ਕਹਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਵਸਤੂ ਤਦ ਤੱਕ ਸਥਿਰ ਰਹੇਗੀ ਜਾਂ ਇੱਕਸਾਰ ਗਤੀ ਨਾਲ ਚੱਲਦੀ ਰਹੇਗੀ ਜਦ ਤੱਕ ਉਸ 'ਤੇ ਕੋਈ ਬਾਹਰੀ ਬਲ ਲਾਗੂ ਨਹੀਂ ਹੁੰਦਾ।",
      bullets: [
        "ਇੱਕ ਵਸਤੂ ਜੋ ਸਥਿਰ ਹੈ, ਉਹ ਸਥਿਰ ਰਹੇਗੀ।",
        "ਇੱਕ ਵਸਤੂ ਜੋ ਗਤੀ ਵਿੱਚ ਹੈ, ਉਹ ਗਤੀ ਵਿੱਚ ਰਹੇਗੀ।",
        "ਵਸਤੂ ਦੀ ਸਥਿਤੀ ਬਦਲਣ ਲਈ ਬਲ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
        "ਇਸ ਕਾਨੂੰਨ ਨੂੰ ਜੜਤਵ ਦਾ ਕਾਨੂੰਨ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"
      ]
    },
    "chain reaction": {
      title: "ਚੇਨ ਰੀਐਕਸ਼ਨ — ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ",
      text:
        "ਚੇਨ ਰੀਐਕਸ਼ਨ ਇੱਕ ਪ੍ਰਕਿਰਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਇੱਕ ਰੀਐਕਸ਼ਨ ਦੇ ਉਤਪਾਦ ਅੱਗੇ ਦੀਆਂ ਰੀਐਕਸ਼ਨਾਂ ਨੂੰ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਇੱਕ ਸਵੈ-ਸਥਾਈ ਲੜੀ ਬਣਦੀ ਹੈ।",
      bullets: [
        "ਇੱਕ ਰੀਐਕਸ਼ਨ ਦੂਜੇ ਨੂੰ ਟ੍ਰਿਗਰ ਕਰਦਾ ਹੈ।",
        "ਪ੍ਰਕਿਰਿਆ ਬਾਹਰੀ ਇਨਪੁੱਟ ਦੇ ਬਿਨਾਂ ਜਾਰੀ ਰਹਿੰਦੀ ਹੈ।",
        "ਆਮ ਤੌਰ 'ਤੇ ਨਿਊਕਲੀਅਰ ਰੀਐਕਸ਼ਨਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ।",
        "ਇਸ ਨੂੰ ਨਿਯੰਤਰਿਤ ਜਾਂ ਅਣਨਿਯੰਤਰਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।"
      ]
    },
    "AI": {
      title: "ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ — ਸਰਲ ਵਿਆਖਿਆ",
      text:
        "ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ (AI) ਇੱਕ ਤਕਨਾਲੋਜੀ ਹੈ ਜੋ ਕੰਪਿਊਟਰਾਂ ਅਤੇ ਮਸ਼ੀਨਾਂ ਨੂੰ ਉਹ ਕੰਮ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦੀ ਹੈ ਜਿਨ੍ਹਾਂ ਲਈ ਆਮ ਤੌਰ 'ਤੇ ਮਨੁੱਖੀ ਬੁੱਧੀ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
      bullets: [
        "AI ਡਾਟਾ ਤੋਂ ਸਿੱਖ ਸਕਦੀ ਹੈ।",
        "AI ਪੈਟਰਨਾਂ ਨੂੰ ਪਛਾਣ ਕੇ ਫੈਸਲੇ ਲੈ ਸਕਦੀ ਹੈ।",
        "AI ਦੀ ਵਰਤੋਂ ਵੌਇਸ ਅਸਿਸਟੈਂਟ, ਸਿਫਾਰਸ਼ ਪ੍ਰਣਾਲੀਆਂ ਅਤੇ ਤਸਵੀਰਾਂ ਦੀ ਪਛਾਣ ਵਰਗੀਆਂ ਤਕਨਾਲੋਜੀਆਂ ਵਿੱਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        "AI ਕੰਮਾਂ ਨੂੰ ਸਵੈਚਾਲਿਤ ਕਰ ਸਕਦੀ ਹੈ ਅਤੇ ਗੁੰਝਲਦਾਰ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਹੱਲ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੀ ਹੈ।"
      ]
    }
  },

  "मराठी": {
    "Binary Search": {
      title: "बायनरी सर्च — सोप्या भाषेत",
      text:
        "बायनरी सर्च ही क्रमवारी लावलेल्या यादीमध्ये एखादा घटक शोधण्याची पद्धत आहे.",
      bullets: [
        "यादी क्रमवारीत असली पाहिजे.",
        "मधला घटक तपासा.",
        "चुकीचा अर्धा भाग काढून टाका.",
        "घटक सापडेपर्यंत पुन्हा करा."
      ]
    },

    "Photosynthesis": {
      title: "प्रकाश संश्लेषण — सोप्या भाषेत",
      text:
        "प्रकाश संश्लेषण ही प्रक्रिया आहे ज्यामध्ये हिरवी झाडे सूर्यप्रकाशाच्या मदतीने अन्न तयार करतात.",
      bullets: [
        "झाडे सूर्यप्रकाशाचा वापर करतात.",
        "झाडे कार्बन डायऑक्साइड घेतात.",
        "झाडे मुळांद्वारे पाणी घेतात.",
        "झाडे ऑक्सिजन सोडतात."
      ]
    },
    "newtons first law": {
      title: "न्यूटनचा पहिला गतीचा नियम — सोप्या भाषेत",
      text:
        "न्यूटनचा पहिला नियम सांगतो की एखादी वस्तू स्थिर राहील किंवा समान गतीने चालत राहील जोपर्यंत त्यावर बाह्य शक्ती लागू होत नाही.",
      bullets: [
        "स्थिर असलेली वस्तू स्थिर राहील.",
        "गतीमध्ये असलेली वस्तू गतीमध्ये राहील.",
        "वस्तूची स्थिती बदलण्यासाठी शक्ती आवश्यक आहे.",
        "हा नियम जडत्वाचा नियम म्हणूनही ओळखला जातो."
      ]
    },
    "chain reaction": {
      title: "श्रृंखला प्रतिक्रिया — आसान भाषा में",
      text:
        "श्रृंखला प्रतिक्रिया एक प्रक्रिया है जिसमें एक प्रतिक्रिया के उत्पाद आगे की प्रतिक्रियाओं को शुरू करते हैं, जिससे एक आत्म-स्थायी अनुक्रम बनता है।",
      bullets: [
        "एक प्रतिक्रिया दूसरी को ट्रिगर करती है।",
        "प्रक्रिया बाहरी इनपुट के बिना जारी रहती है।",
        "आम तौर पर नाभिकीय प्रतिक्रियाओं में होती है।",
        "इसे नियंत्रित या असंयमित किया जा सकता है।"
      ]
    },
        "AI": {
      title: "कृत्रिम बुद्धिमत्ता — सोपी व्याख्या",
      text:
        "कृत्रिम बुद्धिमत्ता (AI) हे एक तंत्रज्ञान आहे जे संगणक आणि मशीनना सामान्यतः मानवी बुद्धिमत्तेची आवश्यकता असलेली कामे करण्यास सक्षम बनवते.",
      bullets: [
        "AI डेटामधून शिकू शकते.",
        "AI नमुने ओळखून निर्णय घेऊ शकते.",
        "AI चा वापर व्हॉइस असिस्टंट, शिफारस प्रणाली आणि प्रतिमा ओळख यांसारख्या तंत्रज्ञानामध्ये केला जातो.",
        "AI कामे स्वयंचलित करू शकते आणि गुंतागुंतीच्या समस्या सोडवण्यास मदत करू शकते."
      ]
    }
  },

  "বাংলা": {
    "Binary Search": {
      title: "বাইনারি সার্চ — সহজ ভাষায়",
      text:
        "বাইনারি সার্চ একটি sorted list-এ একটি item খুঁজে বের করার পদ্ধতি।",
      bullets: [
        "Array-টি sorted হতে হবে।",
        "মধ্যবর্তী element পরীক্ষা করুন।",
        "যে অর্ধেক অংশে উত্তর থাকতে পারে না তা বাদ দিন।",
        "Item পাওয়া না পর্যন্ত পুনরাবৃত্তি করুন।"
      ]
    },

    "Photosynthesis": {
      title: "সালোকসংশ্লেষণ — সহজ ভাষায়",
      text:
        "সালোকসংশ্লেষণ হলো সেই প্রক্রিয়া যার মাধ্যমে সবুজ উদ্ভিদ সূর্যের আলো ব্যবহার করে খাদ্য তৈরি করে।",
      bullets: [
        "উদ্ভিদ সূর্যের আলো ব্যবহার করে।",
        "বাতাস থেকে কার্বন ডাইঅক্সাইড নেয়।",
        "শিকড়ের মাধ্যমে পানি গ্রহণ করে।",
        "খাদ্য তৈরি করে এবং অক্সিজেন ছাড়ে।"
      ]
    },
    "newtons first law": {
      title: "নিউটনের প্রথম গতি নিয়ম — সহজ ভাষায়",
      text:
        "নিউটনের প্রথম নিয়ম বলে যে একটি বস্তু স্থির থাকবে বা সমান গতিতে চলতে থাকবে যতক্ষণ না তার উপর বাহ্যিক শক্তি প্রয়োগ করা হয়।",
      bullets: [
        "একটি বস্তু যা স্থির, তা স্থির থাকবে।",
        "একটি বস্তু যা গতিতে আছে, তা গতিতে থাকবে।",
        "বস্তুটির অবস্থার পরিবর্তনের জন্য শক্তি প্রয়োজন।",
        "এই নিয়মটিকে জড়ত্বের নিয়মও বলা হয়।"
      ]
    },
    "chain reaction": {
      title: "চেইন রিয়্যাকশন — সহজ ভাষায়",
      text:
        "চেইন রিয়্যাকশন একটি প্রক্রিয়া যেখানে একটি প্রতিক্রিয়ার পণ্যগুলি আরও প্রতিক্রিয়াগুলি শুরু করে, যার ফলে একটি স্ব-সঞ্চালিত ক্রম তৈরি হয়।",
      bullets: [
        "একটি প্রতিক্রিয়া অন্যটিকে ট্রিগার করে।",
        "প্রক্রিয়াটি বাহ্যিক ইনপুট ছাড়াই চলতে থাকে।",
        "সাধারণত পারমাণবিক প্রতিক্রিয়ায় ঘটে।",
        "এটি নিয়ন্ত্রিত বা অ-নিয়ন্ত্রিত হতে পারে।"
      ]
    }, 
    "AI": {
      title: "কৃত্রিম বুদ্ধিমত্তা — সহজ ব্যাখ্যা",
      text:
        "কৃত্রিম বুদ্ধিমত্তা (AI) হলো এমন একটি প্রযুক্তি যা কম্পিউটার ও মেশিনকে এমন কাজ করতে সক্ষম করে, যেগুলোর জন্য সাধারণত মানুষের বুদ্ধিমত্তার প্রয়োজন হয়।",
      bullets: [
        "AI ডেটা থেকে শিখতে পারে।",
        "AI বিভিন্ন ধরণ বা প্যাটার্ন শনাক্ত করে সিদ্ধান্ত নিতে পারে।",
        "AI ভয়েস অ্যাসিস্ট্যান্ট, সুপারিশ ব্যবস্থা এবং ছবি শনাক্তকরণের মতো প্রযুক্তিতে ব্যবহৃত হয়।",
        "AI কাজ স্বয়ংক্রিয় করতে পারে এবং জটিল সমস্যা সমাধানে সাহায্য করতে পারে।"
      ]
    }
  },

  "தமிழ்": {
    "Binary Search": {
      title: "பைனரி தேடல் — எளிய விளக்கம்",
      text:
        "பைனரி தேடல் என்பது வரிசைப்படுத்தப்பட்ட பட்டியலில் ஒரு உருப்படியை கண்டுபிடிக்கும் முறையாகும்.",
      bullets: [
        "பட்டியல் வரிசைப்படுத்தப்பட்டிருக்க வேண்டும்.",
        "நடுவில் உள்ள உருப்படியை சரிபார்க்கவும்.",
        "தேவையில்லாத பாதியை நீக்கவும்.",
        "உருப்படி கிடைக்கும் வரை தொடரவும்."
      ]
    },

    "Photosynthesis": {
      title: "ஒளிச்சேர்க்கை — எளிய விளக்கம்",
      text:
        "ஒளிச்சேர்க்கை என்பது பச்சை தாவரங்கள் சூரிய ஒளியின் உதவியுடன் உணவை உருவாக்கும் செயல்முறையாகும்.",
      bullets: [
        "தாவரங்கள் சூரிய ஒளியை பயன்படுத்துகின்றன.",
        "காற்றிலிருந்து கார்பன் டை ஆக்சைடை எடுத்துக்கொள்கின்றன.",
        "வேர்கள் மூலம் தண்ணீரை எடுத்துக்கொள்கின்றன.",
        "உணவை உருவாக்கி ஆக்சிஜனை வெளியிடுகின்றன."
      ]
    },
    "newtons first law": {
      title: "নিউটনের প্রথম গতি নিয়ম — সহজ ভাষায়",
      text:
        "নিউটনের প্রথম নিয়ম বলে যে একটি বস্তু স্থির থাকবে বা সমান গতিতে চলতে থাকবে যতক্ষণ না তার উপর বাহ্যিক শক্তি প্রয়োগ করা হয়।",
      bullets: [
        "একটি বস্তু या स्थिर, ता स्थिर थाकबे।",
        "एकटि बस्तू या गतीमध्ये आछे, ता गतीमध्ये थाकबे।",
        "बस्तूची स्थिती बदलण्यासाठी शक्ती आवश्यक आहे。",
        "हा नियम जडत्वाचा नियम म्हणूनही ओळखला जातो。"
      ]
    },
    "chain reaction": {
      title: "চেইন রিয়্যাকশন — সহজ ভাষায়",
      text:
        "চেইন রিয়্যাকশন একটি প্রক্রিয়া যেখানে একটি প্রতিক্রিয়ার পণ্যগুলি আরও প্রতিক্রিয়াগুলি শুরু করে, যার ফলে একটি স্ব-সঞ্চালিত ক্রম তৈরি হয়।",
      bullets: [
        "একটি প্রতিক্রিয়া অন্যটিকে ট্রিগার করে।",
        "প্রক্রিয়াটি बाह्यिक इनपुट छाड़ाइ चलते थाके।",
        "सामान्यतः परमाण्विक प्रतिक्रिया में होती है।",
        "यह नियंत्रित या अनियंत्रित हो सकता है।"
      ]
    },
    "AI": {
      title: "செயற்கை நுண்ணறிவு — எளிய விளக்கம்",
      text:
        "செயற்கை நுண்ணறிவு (AI) என்பது பொதுவாக மனித நுண்ணறிவு தேவைப்படும் பணிகளை கணினிகளும் இயந்திரங்களும் செய்ய உதவும் ஒரு தொழில்நுட்பமாகும்.",
      bullets: [
        "AI தரவிலிருந்து கற்றுக்கொள்ள முடியும்.",
        "AI வடிவங்களை அடையாளம் கண்டு முடிவுகளை எடுக்க முடியும்.",
        "குரல் உதவியாளர்கள், பரிந்துரை அமைப்புகள் மற்றும் பட அங்கீகாரம் போன்ற தொழில்நுட்பங்களில் AI பயன்படுத்தப்படுகிறது.",
        "AI பணிகளை தானியக்கமாக்கி சிக்கலான பிரச்சினைகளைத் தீர்க்க உதவுகிறது."
      ]
    } 
  },

  "తెలుగు": {
    "Binary Search": {
      title: "బైనరీ సెర్చ్ — సులభమైన వివరణ",
      text:
        "బైనరీ సెర్చ్ అనేది sorted list లో ఒక అంశాన్ని కనుగొనే వేగవంతమైన పద్ధతి.",
      bullets: [
        "Array sorted గా ఉండాలి.",
        "మధ్యలో ఉన్న element ను చూడాలి.",
        "సరైన భాగాన్ని మాత్రమే కొనసాగించాలి.",
        "Item దొరికే వరకు పునరావృతం చేయాలి."
      ]
    },

    "Photosynthesis": {
      title: "కిరణజన్య సంయోగక్రియ — సులభమైన వివరణ",
      text:
        "కిరణజన్య సంయోగక్రియ అనేది మొక్కలు సూర్యకాంతి సహాయంతో తమ ఆహారాన్ని తయారు చేసుకునే ప్రక్రియ.",
      bullets: [
        "మొక్కలు సూర్యకాంతిని ఉపయోగిస్తాయి.",
        "గాలి నుండి కార్బన్ డయాక్సైడ్ తీసుకుంటాయి.",
        "వేర్ల ద్వారా నీటిని తీసుకుంటాయి.",
        "ఆహారాన్ని తయారు చేసి ఆక్సిజన్ విడుదల చేస్తాయి."
      ]
    },
    "newtons first law": {
      title: "న్యూటన్ యొక్క మొదటి చలన నియమం — సులభమైన వివరణ",
      text:
        "న్యూటన్ యొక్క మొదటి చలన నియమం ప్రకారం, ఒక వస్తువు స్థిరంగా లేదా సమానమైన వేగంతో కదిలిపోతుంది, దానిపై బాహ్య శక్తి ప్రభావితం కాకపోతే.",
      bullets: [
        "స్థిరంగా ఉన్న వస్తువు స్థిరంగా ఉంటుంది.",
        "కదిలే వస్తువు సమానమైన వేగంతో కదిలిపోతుంది.",
        "వస్తువు స్థితిని మార్చడానికి శక్తి అవసరం.",
        "ఈ నియమాన్ని జడత్వం యొక్క నియమం అని కూడా పిలుస్తారు."
      ]
    },
    "chain reaction": {
      title: "చైన్ రియాక్షన్ — సులభమైన వివరణ",
      text:
        "చైన్ రియాక్షన్ అనేది ఒక ప్రక్రియ, ఇందులో ఒక రియాక్షన్ ఉత్పత్తులు తదుపరి రియాక్షన్లను ప్రారంభిస్తాయి, ఫలితంగా స్వీయ-నిరంతర క్రమం ఏర్పడుతుంది.",
      bullets: [
        "ఒక రియాక్షన్ మరొకదాన్ని ప్రారంభిస్తుంది.",
        "ప్రక్రియ బాహ్య ఇన్‌పుట్ లేకుండా కొనసాగుతుంది.",
        "సాధారణంగా అణు రియాక్షన్లలో జరుగుతుంది.",
        "దాన్ని నియంత్రించవచ్చు లేదా నియంత్రించలేము."
      ]
    },
    "AI": {
      title: "కృత్రిమ మేధస్సు — సులభమైన వివరణ",
      text:
        "కృత్రిమ మేధస్సు (AI) అనేది కంప్యూటర్లు మరియు యంత్రాలు సాధారణంగా మానవ మేధస్సు అవసరమయ్యే పనులను చేయగలిగే సాంకేతికత.",
      bullets: [
        "AI డేటా నుండి నేర్చుకోవచ్చు.",
        "AI నమూనాలను గుర్తించి నిర్ణయాలు తీసుకోవచ్చు.",
        "AI వాయిస్ అసిస్టెంట్లు, సిఫార్సు వ్యవస్థలు మరియు చిత్రం గుర్తింపు వంటి అనువర్తనాలలో ఉపయోగించబడుతుంది.",
        "AI పనులను ఆటోమేటిక్ చేయగలదు మరియు సంక్లిష్ట సమస్యలను పరిష్కరించడంలో సహాయపడుతుంది."
      ]
    }
  }
};

function App() { // Main App component 
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [tab, setTab] = useState("Tutor");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState("हिन्दी");
  const [uploadMessage, setUploadMessage] = useState("");

  function askTutor(e) { // Function to handle question submission
  e.preventDefault();

  if (!question.trim()) return;

  const q = question.toLowerCase();

  let topic = null;

  if (q.includes("binary search") || q.includes("binary") ) {
    topic = "Binary Search";
  } 
  else if (
    q.includes("photosynthesis") ||
    q.includes("प्रकाश संश्लेषण") ||
    q.includes("सालोकसংশ्लेषण") ||
    q.includes("ஒளிச்சேர்க்கை") ||
    q.includes("కిరణజన్య")
  ) {
    topic = "Photosynthesis";
  }
  else if (
    q.includes("newton") ||
    q.includes("newton's first law") ||
    q.includes("first law of motion") ||
    q.includes("न्यूटन") ||
    q.includes("न्यूटन का पहला नियम") ||
    q.includes("ਪਹਿਲਾ ਨਿਯਮ")
  ) {
  topic = "newtons first law";
}
  else if (
    q.includes("chain reaction")||
    q.includes("chain")||
    q.includes("श्रृंखला प्रतिक्रिया") ||
    q.includes("ਚੇਨ ਰੀਐਕਸ਼ਨ") ||
    q.includes("চেইন রিয়্যাকশন") ||
    q.includes("చైన్ రియాక్షన్")
  ) {
  topic = "chain reaction";
}
  else if (/\bai\b/i.test(q)) {
  topic = "AI";
}
  

  if (topic && answers[language]?.[topic]) {
    setCurrentTopic(topic);
    setAnswer(answers[language][topic]);
  } else { // If topic not found, set a default answer
    setAnswer({
      title: "Topic not found",
      text: "I don't have an explanation for this topic yet.",
      bullets: [
        "Try asking about Binary Search.",
        "Try asking about Photosynthesis.",
        "Try asking about AI.",
        "Try asking about Newton's First Law.",
        "Try asking about Chain Reaction."
]
    });
  }
}
useEffect(() => { // Update answer when language or topic changes
  if (currentTopic && answers[language]?.[currentTopic]) {
    setAnswer(answers[language][currentTopic]);
  }
}, [language, currentTopic]);

  function speak(text) { // Function to handle text-to-speech
  alert("Voice feature will be connected to AI voice service in next stage of development.");
}

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="logo">V</div>

          <div>
            <strong>VernacAI</strong>
            <span>Learn without language barriers</span>
          </div>
        </div>

        <nav>
          {["Tutor", "Translate", "Quiz", "Progress", "Upload" , "Workflow"].map((item) => (
            <button
              key={item}
              className={
                tab === item
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => setTab(item)}
            >
              {item === "Tutor" && "⭐️"}
              {item === "Translate" && "🔎"}
              {item === "Quiz" && "✅"}
              {item === "Progress" && "📈"}
              {item === "Upload" && "📄"}
              {item === "Workflow" && "🛠️"}
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <small>TODAY'S PROGRESS</small>

          <strong>34%</strong>

          <div className="progress">
            <div></div>
          </div>

          <p>Keep learning for 12 more minutes.</p>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main">

        <header className="topbar">

          <div>
            <p className="eyebrow">
              AI-POWERED VERNACULAR LEARNING
            </p>

            <h1>
              Learn in the language that feels like home.
            </h1>

            <p className="subtitle">
              Ask, translate, simplify and practice with
              an AI learning companion.
            </p>
          </div>


          {/* LANGUAGE */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang}>
                {lang}
              </option>
            ))}
          </select>

        </header>


        {/* UPLOAD PAGE */}
        {tab === "Upload" && (
  <section className="upload-page">

    <div className="upload-header">

      <span className="pill">
        DOCUMENT & VIDEO TRANSLATOR
      </span>

      <h2>
        Upload your learning material
      </h2>

      <p>
        Upload a document or video and translate
        the content into your preferred language.
      </p>

    </div>

    <div className="upload-container">

      <label className="upload-area">

        <input
          type="file" 
          accept=".pdf,.doc,.docx,.txt,.mp4,.mov,.webm"
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              setUploadedFile(file);
              setUploadMessage("");
            }
          }}
        />

        <div className="upload-icon">
          📁
        </div>

        <h3>
          Upload your document or video
        </h3>

        <p>
          PDF, DOC, DOCX, TXT, MP4, MOV or WEBM
        </p>

        <span className="browse-button">
          Browse Files
        </span>

      </label>

      {uploadedFile && (
        <div className="file-preview">

          <div className="file-icon">
            {uploadedFile.type.startsWith("video/")
              ? "🎬"
              : "📄"}
          </div>

          <div className="file-info">

            <strong>
              {uploadedFile.name}
            </strong>

            <span>
              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </span>

          </div>

          <button
            className="remove-file"
            onClick={() => {
              setUploadedFile(null);
              setUploadMessage("");
            }}
          >
            ✕
          </button>

        </div>
      )}

      <div className="translation-options">

        <div>

          <label>
            Translate into
          </label>

          <select
            value={targetLanguage}
            onChange={(e) =>
              setTargetLanguage(e.target.value)
            }
          >
            <option>हिन्दी</option>
            <option>ਪੰਜਾਬੀ</option>
            <option>English</option>
            <option>বাংলা</option>
            <option>मराठी</option>
            <option>தமிழ்</option>
            <option>తెలుగు</option>
          </select>

        </div>

        <button
          className="primary translate-button"
          disabled={!uploadedFile}
          onClick={() => {

            if (!uploadedFile) return;

            setUploadMessage(
              `Your file is ready to translate into ${targetLanguage}.`
            );

          }}
        >
          Translate with AI →
        </button>

      </div>

      {uploadMessage && (
        <div className="upload-success">
          ✓ {uploadMessage}
        </div>
      )}

    </div>

  </section>
)} 
{tab === "Tutor" && (
  <>


            <section className="workspace">

              {/* QUESTION BOX */}
              <form
                className="ask-box"
                onSubmit={askTutor}
              >

                <label>
                  Ask your question
                </label>

                <textarea
                  value={question}
                  onChange={(e) =>
                    setQuestion(e.target.value)
                  }
                  placeholder="Example: Explain photosynthesis like I am 12 years old..."
                />

                <div className="ask-actions">

                  <button
                    type="button"
                    className="secondary"
                    onClick={() =>
                      speak(
                        question ||
                        "Please enter a question."
                      )
                    }
                  >
                    🎙 Speak
                  </button>

                  <button
                    type="submit"
                    className="primary"
                  >
                    Ask VernacAI →
                  </button>

                </div>

              </form>


              {/* ANSWER */}
              <div className="answer-box">

                {!answer ? (

                  <div className="empty">

                    <div className="empty-icon">
                      ✦
                    </div>

                    <h3>
                      Your explanation will appear here
                    </h3>

                    <p>
                      Ask a question to see the prototype
                      in action.
                    </p>

                  </div>

                ) : (

                  <>

                    <div className="answer-head">

                      <span className="pill">
                        AI EXPLANATION
                      </span>

                      <button
                        className="icon-btn"
                        onClick={() =>
                          speak(answer.text)
                        }
                      >
                        🔊
                      </button>

                    </div>


                    <h3>
                      {answer.title}
                    </h3>

                    <p>
                      {answer.text}
                    </p>


                    <ul>
                      {answer.bullets.map(
                        (bullet, index) => (
                          <li key={index}>
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>


                    <div className="confidence">
                      ✓ Simplified for your learning level
                    </div>

                  </>

                )}

              </div>

            </section>


            {/* FEATURES */}
            <section className="feature-grid">

              <div className="feature">
                <span>↔</span>

                <h3>
                  Real-time Translation
                </h3>

                <p>
                  Move between English, Hindi and Punjabi.
                </p>
              </div>


              <div className="feature">

                <span>⌁</span>

                <h3>
                  Simple Explanations
                </h3>

                <p>
                  Turn difficult notes into easy language.
                </p>

              </div>


              <div className="feature">

                <span>✓</span>

                <h3>
                  Practice & Quiz
                </h3>

                <p>
                  Generate questions to test understanding.
                </p>

              </div>

            </section>

          </>
        )}


        {/* OTHER PAGES */}
        {tab === "Workflow" && <Workflow />}
        {tab !== "Tutor" && tab !== "Upload" && tab !== "Workflow" && (
          <section className="placeholder">

            <div className="empty">

              <div className="empty-icon">
                ✦
              </div>

              <h3>
                {tab} page is under development
              </h3>

              <p>
                This feature will be available in the next stage of development.
              </p>

            </div>

          </section>
        )}

      </main>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);