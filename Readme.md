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

    ```json
    {
        "adminId": "1234",
        "password": "$2a$10$yAuEnEiocW3QR/ZqTp0.v.Xk99qtORj1NJxJJl.FNDIHtucptNNle"
    }
    ```

3. Open your browser and go to:

    ```bash
    http://localhost:<YOUR_PORT>/admin/login/
    ```

4. On the login page, use the following credentials:

    - **Admin ID**: 1234
    - **Password**: 12345

5. After logging in, you will see the product management options. Add some products through the admin panel.

6. Once you have added products, open:

    ```bash
    http://localhost:<YOUR_PORT>/
    ```

    You should now be able to see the products you added on the home page.

### Support

If you have any questions or need further assistance, feel free to ask.

---