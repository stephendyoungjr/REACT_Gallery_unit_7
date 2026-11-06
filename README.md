# React Gallery App

An image gallery built with React, Vite, and React Router. It uses the Pixabay API to show photos for three default topics (Cats, Dogs, Birds) and for custom searches.

## Setup

1. Clone the repo and run `npm install`.
2. Create a free account at [pixabay.com](https://pixabay.com) and copy your API key from the [Photos Search docs](https://pixabay.com/api/docs/).
3. Create a file at `src/config.js` with this content:

   ```js
   const apiKey = 'YOUR_PIXABAY_API_KEY';
   export default apiKey;
   ```

   This file is listed in `.gitignore` so your key is never committed.
4. Run `npm run dev` and open the URL shown in the terminal.

## Routes

- `/` redirects to `/cats`
- `/cats`, `/dogs`, `/birds` are the default topics
- `/search/:query` shows search results

---# REACT_Gallery_unit_7
