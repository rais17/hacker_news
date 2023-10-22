# Hacker News App with React

This is a Hacker News web application built using ReactJS, allowing users to search for news articles by providing a query. The search results are displayed on the user interface, with additional features and techniques incorporated into the project.

## Features

- **Search Functionality**: Users can search for news articles by entering a query.

- **Suggestion Feature**: As the user types a query, suggestions related to the query are shown. This feature is powered by debouncing.

- **Caching**: Search results are cached in the Redux store to improve performance and reduce redundant API calls.

- **Redux**: State management is handled using Redux to efficiently manage and share data across components.

- **React Router DOM**: Used for routing, enabling seamless navigation between search results and article details.

- **Custom Hooks**: Custom hooks are employed to encapsulate and reuse functionality across components.

- **API Integration**: The application integrates with external APIs to fetch news articles and display them to the user.

- **Shimmer Effect**: Shimmer loading effect is used to enhance the user experience while data is being fetched.

- **Nested Comments**: When a user clicks on a news post, they are redirected to a details page where comments are displayed in a nested format.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/rais17/hacker_news.git

2. Navigate to the project directory:
   cd hacker_news

3. Install the required dependencies using npm:
   npm install

4. Start the development server:
   npm start

5. Open your web browser and access the application at http://localhost:3000.

## Usage

1. **Enter a search query** in the provided input field.

2. **As you type**, the application will provide **suggestions related to your query**, utilizing debouncing for a smoother user experience.

3. **Click on a suggestion** to view the corresponding news articles.

4. **Click on a news article** to see the full details, including nested comments.



   

