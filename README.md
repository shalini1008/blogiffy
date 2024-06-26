
# Blogiffy
WebPage for everyone how want share out their problem not only problem , but anything person can light his/her heart.

## Prerequisites
To get started, ensure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Appwrite

## Setup Guide

### 1. Install Required Packages
Begin by installing all the necessary packages. This includes dependencies for both frontend and backend operations.

```bash
npm install
```

### 2. Setup Environment Variables
- Create a `.env` file in the root of your project. 
- Add the environment variables to the .env file in Root of project from the .env.sample replacing the placeholders with your actual Appwrite project details:

### 3. Configure Appwrite
To get Appwrite up and running, follow these steps:

1. **Appwrite URL**: Locate and set the `appwriteUrl` environment variable.
2. **Database ID**: Create a database ID in Appwrite.
3. **Collection ID**: Create a collection ID within the database. Configure the collection to specify who can perform CRUD operations.
4. **Bucket ID**: Create a bucket ID for storage needs.

### 4. Authentication Settings
Set up authentication services on Appwrite to manage user logins, signups, and other related operations. This can also be adapted for other databases like Firebase or MongoDB.

### 5. Frontend Structure
The frontend is structured using separate components for each UI element, ensuring a modular and maintainable codebase.


## - What I've learned:

- [Appwrite](https://appwrite.io/)

- Creating custom hooks
- [TinyMCE](https://www.tiny.cloud/)
- How to use [Redux](https://redux-toolkit.js.org/)
- How to use [React Hook Form](https://react-hook-form.com/) 
- CRUD Operations
- [React Router](https://reactrouter.com/en/main) 
- Authenticating users with Appwrite, including form validation and storing data of users in database including images 
- And much more...
  
 
# What I have use
# Backend
Appwrite
# Fronted
React.js,
Tailwind for CSS,
Redux-ToolKit

## Project Structure

- src/components: Contains reusable React components.
- src/pages: Includes individual pages/components for different routes.
- src/store: Manages the Redux store configuration.
- src/App.jsx: Main component rendering the application layout.
- src/index.css: Stylesheet for the application.
- src/main.jsx: Entry point of the application.

  ## - Dependencies 
 
 `React` &nbsp; `JavaScript` &nbsp; `Appwrite` &nbsp; `TailwindCSS` &nbsp; `Build tool: Vite` 
 
# Demo Image
![Screenshot 2024-05-23 225947](https://github.com/shalini1008/blogiffy/assets/122449558/a8930798-7d99-46a7-adc4-cb123f47c280)
![Screenshot 2024-05-23 230841](https://github.com/shalini1008/blogiffy/assets/122449558/a261007a-9c7c-4705-9c03-808339396501)
![Screenshot 2024-05-23 230801](https://github.com/shalini1008/blogiffy/assets/122449558/12e20a1c-7cd1-418f-97d9-fd3df86793a3)
![Screenshot 2024-05-23 230742](https://github.com/shalini1008/blogiffy/assets/122449558/30b666ef-c1f9-4e60-9c23-ace7b9fc8251)
