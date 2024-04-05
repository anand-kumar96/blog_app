### create two folder frontend and backend and now run: npm create vite@latest write project name: frontend
###   cd frontend => npm install => npm run dev

## Tailwind setup : goto framework guide and then follow vite proccedure
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

--> then replace tailwind.config.js with
    http```
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```
--> then replace index.css
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
==>go to this page and setup: https://tailwindcss.com/docs/guides/vite

### NOW install some package
npm i react-router-dom react-icons

### using browser component as BrowserRouter 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>/> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

### install dateformat and react-quill => for text area=> for uses go to github


### for backend
npm i init multer nodemon pg 

change start script : nodemon index.js

now create a blogapp database in pg admin
// creating blogs table
CREATE TABLE blogs(
id SERIAL PRIMARY KEY,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
title VARCHAR(200) NOT NULL,
url VARCHAR(200) NOT NULL,
description TEXT
);
### upload image code => see multer package
### sql query never uses "" double qoutation
Insert dummy data

### 
npm i axios

npmi i cors
npm i html-react-parser