<div align="center">

<h1 align="center">CareHub - Healthcare Patient Management System<h1>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [Upcoming Features](#more)


## <a name="introduction">🤖 Introduction</a>

CareHub is a comprehensive healthcare patient management system designed to streamline the patient-doctor interaction. Built with Next.js, TypeScript, and TailwindCSS, this application allows patients to register, book, and manage appointments, while administrators can confirm, reschedule, or cancel appointments. It also features Twilio SMS notifications to enhance patient communication.


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Appwrite for backend storage and file uploads
- Twilio Account for SMS notifications
- TailwindCSS

## <a name="features">🔋 Features</a>

👉 **Register as a Patient**: Users can sign up and create a personal profile as a patient.

👉 **Book a New Appointment with Doctor**:  Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 **Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

👉 **Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 **Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

👉 **Send SMS on Appointment Confirmation**: Patients receive SMS notifications to confirm their appointment details.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

👉 **File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.

A
and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Salem388/
cd CareHub
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
APPWRITE_PROJECT_ID=your_appwrite_project_id
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
NEXT_PUBLIC_TWILIO_PHONE=your_twilio_phone_number
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
  Note: The styles for this gradient grid background is heavily inspired by the creator of this amazing site (https://dub.sh) – all credits go to them! 
*/

.main {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 120px 24px 160px 24px;
  pointer-events: none;
}

.main:before {
  background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%);
  position: absolute;
  content: "";
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
}

.main:after {
  content: "";
  background-image: url("/assets/images/grid.svg");
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.4;
  filter: invert(1);
}

.gradient {
  height: fit-content;
  z-index: 3;
  width: 100%;
  max-width: 640px;
  background-image: radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ),
    radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  filter: blur(100px) saturate(150%);
  top: 80px;
  opacity: 0.15;
}

@media screen and (max-width: 640px) {
  .main {
    padding: 0;
  }
}

/* Tailwind Styles */

.app {
  @apply relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6;
}

.black_btn {
  @apply rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center;
}

.outline_btn {
  @apply rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center;
}

.head_text {
  @apply mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl;
}

.orange_gradient {
  @apply bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent;
}

.green_gradient {
  @apply bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent;
}

.blue_gradient {
  @apply bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent;
}

.desc {
  @apply mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl;
}

.search_input {
  @apply block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0;
}

.copy_btn {
  @apply w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer;
}

.glassmorphism {
  @apply rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5;
}

.prompt_layout {
  @apply space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3;
}

/* Feed Component */
.feed {
  @apply mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2;
}

/* Form Component */
.form_textarea {
  @apply w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0;
}

.form_input {
  @apply w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0;
}

/* Nav Component */
.logo_text {
  @apply max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide;
}

.dropdown {
  @apply absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end;
}

.dropdown_link {
  @apply text-sm font-inter text-gray-700 hover:text-gray-500 font-medium;
}

/* PromptCard Component */
.prompt_card {
  @apply flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit;
}

.flex-center {
  @apply flex justify-center items-center;
}

.flex-start {
  @apply flex justify-start items-start;
}

.flex-end {
  @apply flex justify-end items-center;
}

.flex-between {
  @apply flex justify-between items-center;
}
```

</details>

<details>
<summary><code>jsconfig.json</code></summary>

```json
{
  "compilerOptions": {
    "paths": {
      "@*": ["./*"]
    }
  }
}
```

</details>

<details>
<summary><code>route.js</code></summary>

```javascript
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
}
```

</details>

<details>
<summary><code>user.js</code></summary>

```javascript
username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
```

</details>

## <a name="links">🔗 Links</a>

Assets used in the project can be found [here](https://drive.google.com/file/d/1yGvWFeSaH1_-aiQ1gejT23lqz5979RKB/view?usp=sharing)

## <a name="more">🚀 Upcoming Features</a>

- Doctor Profiles: View detailed doctor profiles and their specialties.
- Appointment History: Patients can view past appointments and access medical records.
- Medical Records Management: Implement a feature for uploading, managing, and sharing medical records with healthcare providers.
- Appointment Search: Advanced search options for finding available appointment slots by doctor or specialty.


#
