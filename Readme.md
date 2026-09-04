# 🌐 VernacAI

### AI-Powered Multilingual Learning Assistant

VernacAI is an AI-powered educational platform designed to make learning more accessible by allowing students to understand concepts in their **preferred Indian language**.

The project is developed as a prototype for **Smart India Hackathon (SIH) – Problem Statement 42**.

---

## 🎯 Problem

Many students understand complex educational concepts better in their mother tongue, but most digital educational resources are primarily available in English.

Traditional translation tools often provide literal translations without adapting explanations to a student's learning level.

---

## 💡 Our Solution

VernacAI provides an AI-powered learning environment where students can:

- 🎓 Ask questions to an AI tutor
- 🌐 Learn concepts in Indian regional languages
- 📖 Translate educational content
- 📤 Upload documents and educational videos
- 📷 Scan text and objects using a camera
- 🧠 Receive simplified AI explanations
- 🔊 Listen to explanations using text-to-speech
- 📝 Practice through quizzes
- 📊 Track learning progress

The goal is not just **translation**, but **understanding**.

---

## ✨ Features

### 🎓 AI Tutor

Students can ask questions and receive simplified explanations.

Example:

> "Explain photosynthesis in Hindi like I'm a beginner."

---

### 🌐 Multilingual Learning

VernacAI supports multiple Indian languages, including:

- English
- हिन्दी (Hindi)
- ਪੰਜਾਬੀ (Punjabi)
- বাংলা (Bengali)
- मराठी (Marathi)
- தமிழ் (Tamil)
- తెలుగు (Telugu)

More languages can be added in future versions.

---

### 📤 Document & Video Translation

Students can upload educational:

- PDF
- DOC
- DOCX
- TXT
- MP4
- MOV
- WEBM

The planned AI pipeline extracts educational content and translates it into the student's preferred language.

---

### 📷 Scan & Learn

The Camera module allows students to capture an image and eventually:

1. Capture an image
2. Detect text or objects
3. Identify the content using AI
4. Translate the result
5. Generate a simplified explanation
6. Provide audio output

---

### 🔊 Voice Learning

The platform includes a text-to-speech interface so students can listen to explanations.

---

### 📝 Quiz

The planned Quiz module will generate language-friendly questions based on the student's learning content.

---

### 📊 Progress

The Progress module is designed to track learning activity and provide personalized learning insights.

---

## 🛠️ Technology Stack

### Frontend

- React.js
- JavaScript / JSX
- HTML5
- CSS3

### Development Tool

- Vite

### Planned Backend

- Python / Node.js
- REST API

### Planned AI Components

- Large Language Model (LLM)
- OCR
- Computer Vision
- Speech-to-Text
- Text-to-Speech
- Translation

---

## 🏗️ System Architecture

```text
                    ┌─────────────────┐
                    │     Student     │
                    └────────┬────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │  VernacAI Frontend  │
                  │    React + Vite     │
                  └──────────┬──────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
       🎓 Tutor           📤 Upload          📷 Camera
          │                  │                  │
          └──────────────────┼──────────────────┘
                             ▼
                    ┌─────────────────┐
                    │     Backend     │
                    │   REST API      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    AI Engine    │
                    ├─────────────────┤
                    │ LLM             │
                    │ OCR             │
                    │ Vision          │
                    │ Translation     │
                    │ Speech          │
                    └────────┬────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Simplified Response │
                  │ in Selected Language│
                  └──────────┬──────────┘
                             │
                             ▼
                       🔊 Student