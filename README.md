# Tutorial: ChatBot

This project is a **simple chatbot application** where you can *chat with an AI assistant* named EDITH. It lets you type messages and EDITH will reply in a friendly, concise manner, making conversations feel natural. All your messages and EDITH's responses are displayed clearly, keeping the conversation history easy to follow.


## Visual Overview

```mermaid
flowchart TD
    A0["React Component Architecture
"]
    A1["Chat State Management
"]
    A2["AI Model Interaction
"]
    A3["AI Persona and Rules (Prompt Engineering)
"]
    A4["User Input & Sending Messages
"]
    A5["Message Display & Formatting
"]
    A6["Frontend Build & Development Setup (Vite)
"]
    A0 -- "Manages state" --> A1
    A1 -- "Provides messages" --> A5
    A4 -- "Updates state" --> A1
    A4 -- "Initiates AI request" --> A2
    A2 -- "Adds AI response" --> A1
    A3 -- "Defines AI prompt" --> A2
    A0 -- "Implements UI" --> A4
    A0 -- "Renders component" --> A5
    A6 -- "Builds & runs" --> A0
```

## Chapters

1. Frontend Build & Development Setup (Vite)
2. React Component Architecture
3. User Input & Sending Messages
4. Chat State Management
5. Message Display & Formatting
6. AI Model Interaction
7. AI Persona and Rules (Prompt Engineering)


---


