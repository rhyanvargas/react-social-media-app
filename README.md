# React Social Media

This is a Real-time Instagram Clone built with the following stack:

- React (JavaScript library)
- Material UI (UI component library)
- Apollo (manage global App State)
- GraphQL (data management library)
  -Hasura (GraphQL API as a service)

  ## Patterns and Concepts used

  1. Controlled Components : input `values` are using `state` as single source of truth:

     **Note: the `value` attribute uses the `postTitle state` for the single-source of truth reference**

  ```
  <!-- CreatePost.js -->

  <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Add Title"
          value={postTitle}
        />
  ```

  2. React Hooks

  - `useEffect()` - Performs side effects when dependencies change (and when mounted):

  ```
  <!-- App.js -->

  useEffect(() => {
    document.title = user
      ? `${user}'s Feed`
      : `Please Login | Social Media App`;
  }, [user]);
  ```

  - `useRef()` - clear image value after submitting a post:

  ```
  <!-- CreatePost.js -->

  imageInputRef.current.value = "";
  ```

  - `useCallback()` - prevent re-creation(un-necessarily) of call back functions when passed down (memoized):

  ```
  <!-- App.js -->

  const handleAddPost = useCallback((newPost) => {
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    },
    [posts]
  );
  ```

  3. Passing Down CallBack Functions

  ```
  <!-- App.js -->

    // Callback Function
    const handleAddPost = (newPost) => setPosts((prevPosts) => [newPost, ...prevPosts]);

    // Pass down callback function
    <CreatePost user={user} handleAddPost={handleAddPost} />

  <!-- CreatePost.js -->

    const handleFormSubmit = (event) => {

    // Callback function is called
    handleAddPost(postCreated);

    ...
  };
  ```

  4. ES6 Object Destructuring

  - Object Spread Operator

    - Declarative Passing of props properties:

    ```
    <!-- PostList.js -->

    <Post {...currPost}>

    <!-- Post.js -->

    Post({name,image,title})
    ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
