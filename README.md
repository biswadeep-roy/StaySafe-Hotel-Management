# StaySafe Hotel Management

StaySafe Hotel Management is a comprehensive web application designed for efficient hotel management. This platform enables users to seamlessly explore available rooms, make bookings, and manage their accounts.


## Screenshot
![image](https://github.com/biswadeep-roy/StaySafe-Hotel-Management/assets/74821633/eb298b58-e890-41ef-8bc0-3d0de5aeec6f)



## Features

### 1. User Authentication

- **Registration and Login:** Users can securely register and log in to the system.
- **Password Security:** User passwords are encrypted for enhanced security.
- **Session Management:** The system ensures secure user sessions for a seamless experience.

### 2. Room Management

- **Room Details:** View all available rooms along with key details such as name, maximum capacity, phone number, type, and rent per day.
- **Room Booking:** Users can easily book available rooms for specific dates.
- **Detailed Room View:** Click on a room to access comprehensive details and initiate the booking process.

### 3. Booking System

- **Booking Calculation:** The system automatically calculates the total amount based on the rent per day and the selected booking duration.
- **Payment:** Users can conveniently pay for their bookings directly through the platform.

### 4. Responsive Design

- The application is developed with a responsive design to provide a consistent and user-friendly experience across various devices.

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - React Bootstrap
  - Ant Design (used for date picker)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (utilizing Mongoose)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/biswadeep-roy/StaySafe-Hotel-Management.git
   ```

Install Dependencies for server:

```bash
npm i
```
Install Dependencies for client:


```bash
cd StaySafe-Hotel-Management
cd Client
npm install
```

Start the Development Server for Server:

```bash
node ./server.js
```
Start the Development Server for Client:

```bash
npm start
```

### Open the Application:
Open your preferred web browser and visit http://localhost:3000.

### License

This project is licensed under the MIT License.
