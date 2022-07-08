# Technologies Used

1. ReactJS for frontend implementation.
2. Material ui (https://mui.com/) library for creating interactive UI.
3. Typescript for type checking.
4. Axios for api integration.

# Installation & Setup

1. Machine should have node & npm.
2. Clone the repository.
3. Install dependencies using `npm install`.
4. Start app server using `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Features & Functionalities implemented

1. Displays the list of items by fetching the data from an api in the '/home' page.
2. Modularity: Implement create, edit and show details features.
3. Implemented pagination with mui to split the large number of records into multiple chunks.
4. Implemented common form for create and edit item, to prevent the code quality/optimization.
5. When click on any item it will redirect to view the item details page '/details/${id}', where we have edit & delete icon to update the item.
6. On Delete: implemented confirmation pop up to confirm before delete.
7. Add mui loader in apis when the api is in pending state [GET, POST, PUT, DELETE].
8. Add mui snackbar to show any sucess and error messages after api execution.
