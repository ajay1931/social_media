# Social Media Application
This is a simple Social Media Application built using React.js. It features a side navigation bar, a home page to display posts and a content creation page where users can add new posts. The application utilizes React Context API for state management and React Router for navigation.

## Features 

### Dynamic Post Management

**Add New Posts:**

- Users can add new posts by filling in a form with a title, content and optional hashtags.

**Your Posts:**

- View only the posts created by the logged-in user.

**Delete Posts:**

- Posts can be deleted from both the Home page and Your Posts page.

**Like/React to Posts:**

- Posts can be liked by users, and the like count is updated in real-time.

### User Authentication

**Sign Up & Login:**

- Users can create a new account or log in with their credentials (email and password).

**Local Storage Authentication:**

- User credentials (email and password) are stored in the browser's local storage to keep the user logged in even after the page reloads.

**User-specific Data:**

- Each user’s posts are stored separately and retrieved using local storage when logged in.

### Navigation

**Sidebar Navigation:**

- A collapsible sidebar for quick navigation between the Home and Create Content pages.

**Active Tab Highlighting:**

- The active tab is highlighted with a different background color and blur effect for a better user experience.

**Responsive Design**

- The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

- Components are styled using Bootstrap and custom CSS to maintain a consistent UI.
  
### Local Storage Integration

**User Authentication:**

- User data (email and password) is stored in local storage for persistent login. The application checks localStorage for user credentials when logging in.

**Post Storage:**

- Posts created by users are saved in local storage under the posts key. Each post includes details such as title, content and hashtags.

**Real-time Updates:**

- Likes and post counts are managed in real-time by updating the data in local storage.

### Live Demo

- You can try the app live here: https://social-media-2529.netlify.app
