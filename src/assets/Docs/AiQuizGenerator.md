
# AI Powered Quiz Application

## Overview

This project allows users to create quizzes using Gemini AI, answer questions, and review their performance. It utilizes React, Chakra UI, Clerk for authentication, and React Query for data fetching.

## Key Features

1. **User Authentication**: Users can sign in via Clerk.
2. **Quiz Creation**: Users can create quizzes using Gemini AI.
3. **Quiz Taking**: Users can answer quiz questions and navigate through them.
4. **Review**: After submission, users can review their answers and scores.

## Setup Instructions

### 1. Install Dependencies

Ensure you have Node.js installed. Then run:

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory and configure your environment variables for Clerk and any API keys required for Gemini AI.

### 3. Start the Application

Run the application with:

```bash
npm run dev
```

Access the application at `http://localhost:5173`.

## Component Breakdown

### 1. **Authentication**

- **SignIn Component**: Users are prompted to sign in using Clerk.
  
### 2. **Quiz Creation**

- Users interact with an interface to create quizzes using Gemini AI.
- Quiz data is sent to the server, which generates questions and options.

### 3. **Quiz Taking**

- **Quiz Component**:
  - Fetches quiz data using `useQuery`.
  - Displays questions and options for users to select.
  - Navigates through questions with "Next" and "Previous" buttons.
  - Submits answers on the last question.

### 4. **Review Component**

- After submission, users are directed to the Review page.
- Displays the quiz title, description, score, and correct answers.
- Each question shows whether the user's answer was correct and includes explanations.

## Functionality Overview

### Creating Quizzes

1. Users can access a quiz creation interface.
2. Input details and generate questions using Gemini AI.
3. Save the quiz for later use.

### Taking Quizzes

1. Users select a quiz to take.
2. Questions are displayed one at a time.
3. Users can select answers and navigate between questions.
4. On submission, answers are sent to the server.

### Reviewing Quizzes

1. Users can view their scores and feedback after completing a quiz.
2. The review displays correct answers and explanations for better understanding.

## Code Structure

- **ApiFunctions.js**: Contains functions for API calls like `getQuiz`, `postAnswer`, and `getReview`.
- **Quiz Component**: Handles quiz display and answer submission.
- **Review Component**: Displays the results of the quiz taken.

## Error Handling

- Redirects users to the dashboard if an error occurs during data fetching.
- Loading indicators are shown while data is being fetched.

## Conclusion

This project provides a seamless way for users to create and take quizzes powered by AI. Ensure to test each feature thoroughly and handle any edge cases as needed.
