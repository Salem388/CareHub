# CareHub - Healthcare Patient Management System

CareHub is a comprehensive **healthcare patient management system** designed to streamline the patient-doctor interaction. Built with **Next.js**, **TypeScript**, and **TailwindCSS**, this application allows patients to register, book, and manage appointments, while administrators can confirm, reschedule, or cancel appointments. It also features **Twilio SMS notifications** to enhance patient communication.

---

## 📋 Table of Contents
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Features Breakdown](#features-breakdown)
- [Upcoming Features](#upcoming-features)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🏥 Key Features

- **Patient Registration**: Patients can create accounts, complete profiles, and securely log in to manage their medical appointments.
- **Appointment Booking**: Patients can browse available doctors, select convenient appointment times, and book them with ease.
- **Admin Dashboard**: Admin users have access to a dedicated dashboard for viewing, scheduling, confirming, and canceling appointments.
- **SMS Notifications**: Integrated with Twilio to send real-time SMS notifications to patients, confirming their appointment details.
- **Responsive Design**: Fully optimized for all screen sizes, providing a seamless experience on mobile, tablet, and desktop devices.
- **Secure File Uploads**: Patients can upload and store files, such as medical records, using **Appwrite Storage**.
- **Error Tracking**: Sentry integration for real-time performance monitoring and error reporting, ensuring a reliable application.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, TailwindCSS, ShadCN
- **Backend**: Appwrite (for storage and APIs)
- **Authentication**: NextAuth (for secure user authentication with Google OAuth support)
- **Notifications**: Twilio API (for sending SMS notifications)
- **Performance Monitoring**: Sentry (for error tracking and performance optimization)
- **Testing**: Jest, React Testing Library

---

## 📦 Installation and Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Appwrite** for backend storage and file uploads
- **Twilio Account** for SMS notifications
- **MongoDB** or other backend services if required

### Clone the Repository

git clone https://github.com/username/carehub.git
cd carehub

npm install
or

bash
Copy code
yarn install
Environment Variables
Create a .env.local file in the root directory and add the following environment variables:


NEXTAUTH_URL=http://localhost:3000
APPWRITE_PROJECT_ID=your_appwrite_project_id
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
NEXT_PUBLIC_TWILIO_PHONE=your_twilio_phone_number
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
Run the Application
bash

npm run dev
The app will now be running at http://localhost:3000.

## 🧑‍💻 Usage Guide

### Patient Side
Register and Login: Patients can register by providing basic information and log in via Google OAuth or email/password.
Book Appointments: Browse available time slots and book appointments with selected doctors.
View Appointments: Users can view their upcoming and past appointments on the patient dashboard.
Receive Notifications: Once an appointment is confirmed, patients receive an SMS with the appointment details.

### Admin Side
Admin Dashboard: Admin users have access to a dashboard where they can view all upcoming and past appointments.
Confirm/Schedule Appointments: Admins can confirm and update appointment schedules.
Cancel Appointments: Admins can cancel appointments, which triggers an SMS notification to inform patients.
File Management: Admins can upload, manage, and delete patient files.
 
 ## 🛠️ Project Structure
bash
Copy code
carehub/
├── components/         # Reusable UI components (e.g., buttons, forms)
│   ├── PatientForm.tsx # Patient registration form component
│   ├── Appointment.tsx # Appointment scheduling component
├── pages/              # Next.js page-based routing
│   ├── index.tsx       # Home page
│   ├── admin/          # Admin dashboard pages
│   ├── patient/        # Patient-facing pages
├── styles/             # TailwindCSS global styles
├── utils/              # Utility functions (e.g., API handlers)
├── public/             # Static assets (e.g., images, icons)
├── .env.local          # Environment variables
├── README.md           # Project documentation
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration


## 📊 API Endpoints
Here's a quick overview of the API endpoints used in this project:

### Patient Endpoints
POST /api/patient/register: Register a new patient
GET /api/patient/appointments: Fetch all appointments for a patient

### Admin Endpoints
GET /api/admin/appointments: Fetch all appointments for admin view
POST /api/admin/confirm: Confirm an appointment
POST /api/admin/cancel: Cancel an appointment
POST /api/admin/reschedule: Reschedule an appointment


## 📈 Features Breakdown

Frontend

Built with Next.js for server-side rendering and API integration.
TailwindCSS ensures a clean, responsive, and accessible UI.
Followed the Glassmorphism design trend for modern UI aesthetics.
Authentication

Implemented NextAuth for secure user authentication using Google OAuth, with token-based session management.
SMS Notifications

Integrated Twilio API on the frontend to send appointment confirmation SMS to patients.
Admin Dashboard

Created a responsive admin dashboard using ShadCN components and TypeScript for type safety and scalable code.
Performance Monitoring

Configured Sentry for error tracking and performance monitoring, ensuring real-time alerts on issues.
File Upload

Used Appwrite Storage for secure file uploads, allowing users to attach medical documents.


## 🚀 Upcoming Features
Doctor Profiles: View detailed doctor profiles and their specialties.
Appointment History: Patients can view past appointments and access medical records.
Medical Records Management: Implement a feature for uploading, managing, and sharing medical records with healthcare providers.
Appointment Search: Advanced search options for finding available appointment slots by doctor or specialty.



