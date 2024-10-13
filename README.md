# Vite React App

This project is a basic React template built with **Vite**, featuring integrations with **MUI**, **Redux Toolkit**, and **React Router DOM**. It includes essential configurations for state management, routing, notifications, and theme switching.

## Features

- **Vite**: Fast development and build tool optimized for modern web projects.
- **Material-UI (MUI)**: Provides a responsive design with pre-built components and customizable themes (Light/Dark mode).
- **Redux Toolkit**: For efficient state management. The store includes:
  - **UserSlice**: Handles user-related state.
  - **CommonSlice**: Contains reusable or shared state across the app.
- **React Router DOM**: Set up for both public and private routes.
- **Notistack Snackbar**: Easily display notifications across the app using MUI's Snackbar system.

## Project Structure

The app follows a structured layout to ensure scalability:

- **Redux Store**: The store is already configured with two slices, `userSlice` and `commonSlice`.
- **Routing**: The routing is configured to handle public and private layouts. Public routes can be accessed by anyone, while private routes require user authentication.
- **Notistack**: Notification system using `Notistack` for displaying stackable snackbars.
- **MUI Themes**: Both light and dark themes are configured, allowing users to switch between modes seamlessly.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo.git

   ```

2. Install the dependencies:

   ````bash
   npm i

   1. Start the development server:
   ```bash
   npm run dev
   ````
