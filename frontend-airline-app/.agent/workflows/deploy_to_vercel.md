---
description: How to deploy the Airline App to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your Vite + React application to Vercel.

## Prerequisites
-   A Vercel account (sign up at [vercel.com](https://vercel.com)).
-   The Vercel CLI installed (optional, but recommended for manual deploys) OR a GitHub repository connected to Vercel.

## Option 1: Deploy via GitHub (Recommended)
1.  **Push your code** to a GitHub repository.
2.  Go to your **Vercel Dashboard**.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  **Configure Project**:
    -   **Framework Preset**: Vercel should automatically detect `Vite`.
    -   **Root Directory**: Ensure it points to `frontend-airline-app` (if that's your repo root, leave it; if it's a subfolder, select it).
    -   **Build Command**: `vite build` (Default)
    -   **Output Directory**: `dist` (Default)
    -   **Install Command**: `npm install` (Default)
6.  Click **Deploy**.

## Option 2: Deploy via CLI (Manual)
1.  Open your terminal in the project folder: `c:\Users\SHREYAS URADE\Desktop\Project Folder\Airline\frontend-airline-app`
2.  Install Vercel CLI globally (if not already installed):
    ```bash
    npm i -g vercel
    ```
3.  Run the deploy command:
    ```bash
    vercel
    ```
4.  Follow the prompts:
    -   Set up and deploy? **Y**
    -   Which scope? (Select your account)
    -   Link to existing project? **N**
    -   Project name? (Press Enter for default)
    -   In which directory is your code located? `./` (Press Enter)
    -   Want to modify these settings? **N** (Vercel auto-detects Vite settings correctly)
5.  Wait for the deployment to finish. You will get a `Production: [URL]` link.

## Important Note on Routing
I have created a `vercel.json` file in your project root. This file is crucial for React Router to work correctly (so that refreshing a page like `/login` doesn't give a 404 error). Ensure this file is included in your deployment.
