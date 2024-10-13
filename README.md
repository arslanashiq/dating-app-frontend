# Vite React App

This project is a basic React template built with **Vite**, featuring integrations with **MUI**, **Redux Toolkit**, and **React Router DOM**. It includes essential configurations for state management, routing, notifications, and theme switching.

## Features

- **Vite**: Fast development and build tool optimized for modern web projects.
- **Material-UI (MUI)**: Provides a responsive design with pre-built components and customizable themes (Light/Dark mode).
- **Redux Toolkit**: For efficient state management. The store includes:
  - **UserSlice**: Manages authentication-related state.
  - **CommonSlice**: Manages common states like theme mode, sidebar drawer visibility, and the global loading state.
- **React Router DOM**: Set up for both public and private routes, with layouts for authenticated and unauthenticated users.
- **Notistack Snackbar**: Easily display notifications across the app using MUI's Snackbar system.

## Project Structure

The app follows a structured layout to ensure scalability:

- **Redux Store**: The store is already configured with two slices:
  - **UserSlice**: Handles authentication logic, storing information related to the logged-in user.
  - **CommonSlice**: Contains common app-level states, such as:
    - **Theme Mode**: Whether the app is in dark or light mode.
    - **Sidebar Drawer State**: Tracks whether the sidebar is open or closed.
    - **Loading State**: Controls whether the app is in a loading state, during which all interactions and events are disabled until loading completes.
- **Routing**: Public routes are accessible by all users, while private routes require authentication. Layouts are configured accordingly for each route type.
- **Notistack**: Configured to handle stackable snackbars for notifications.
- **MUI Themes**: Both light and dark themes are integrated, allowing users to toggle between modes.

## Loading State Behavior

When the app is in a loading state (tracked via the `CommonSlice`), all user interactions and events are disabled until the app exits the loading state. This ensures a seamless user experience by preventing actions while the app is still initializing or performing critical tasks.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/arslanashiq/basic-react-template.git

   ```

2. Install the dependencies:

   ```bash
   npm install

   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
