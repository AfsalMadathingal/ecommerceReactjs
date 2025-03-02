# E-commerce App

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/AfsalMadathingal/ecommerceReactjs
    ```

2. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

3. Install the frontend dependencies:

    ```bash
    npm install
    ```

4. Build the frontend:

    ```bash
    npm run build
    ```

5. Navigate to the backend folder:

    ```bash
    cd ../backend
    ```

6. Install the backend dependencies:

    ```bash
    npm install
    ```

7. Start the backend server:

    ```bash
    npm start
    ```

    The server will run on the port specified in the `.env` file. If you want to change the port, you can update it in the `.env` file.

    if you changed the port in the `.env` file, you need to change the VITE_API_URL="http://localhost:3000/api/v1" in the frontend's `.env` file.

### Running the App

1. Open your browser and go to:

    ```bash
    http://localhost:<YOUR_PORT>/
    ```

    You should see the home page of the e-commerce app. Initially, the product list will be empty.

### Admin Panel

To add products, you need to login to the admin panel:

1. Open your MongoDB database and navigate to the `ecommerce` database. Inside this database, create a collection called `admin`.

2. Insert the following document into the `admin` collection:

Note
If you do not open the home page in your browser at least once, the database may not be created by default.

    ```json
    {
        "adminId": "1234",
        "password": "$2a$10$2sqCYv47JvaksBjlPyMTBeP.t9GHULa4qSWOvZKt094v0/CZ.9O3K"
    }
    ```

3. Open your browser and go to:

    ```bash
    http://localhost:<YOUR_PORT>/admin/login/
    ```

4. On the login page, use the following credentials:

    - **Admin ID**: 1234
    - **Password**: 12345

Note if you have any problems logging in, you can use https://bcrypt-generator.com/ to generate a password and paste it in the password field.

5. After logging in, you will see the product management options. Add some products through the admin panel.

6. Once you have added products, open:

    ```bash
    http://localhost:<YOUR_PORT>/
    ```

    You should now be able to see the products you added on the home page.

### Support

If you have any questions or need further assistance, feel free to ask.

---