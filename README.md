# 🏠 Real Estate App

A full-stack real estate web application where users can browse, favorite, and book property visits.

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Mantine UI
- React Query (TanStack)
- Auth0 (Authentication)
- React Router DOM

**Backend:**
- Node.js
- Express.js
- Prisma ORM
- MongoDB
- Auth0 (JWT Verification)

## ✨ Features

- 🔐 User Authentication via Auth0
- 🏡 Browse property listings
- ❤️ Add/remove properties to favourites
- 📅 Book property visits
- ❌ Cancel bookings
- 🗺️ Interactive map for each property
- 🔍 Search properties by city/state
- ➕ Add new property listings

## 📁 Project Structure
```
real-estate-app/
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── utils/
├── backend/          # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── index.js
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js
- MongoDB
- Auth0 Account

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```
DATABASE_URL=your_mongodb_url
AUTH0_AUDIENCE=your_auth0_audience
AUTH0_ISSUER_BASE_URL=your_auth0_domain
PORT=3000
```
```bash
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file:
```
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_AUDIENCE=your_auth0_audience
```
```bash
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/user/register | Register user |
| POST | /api/user/bookVisit/:id | Book a visit |
| POST | /api/user/allBookings | Get all bookings |
| POST | /api/user/cancelBooking/:id | Cancel a booking |
| POST | /api/user/toFav/:rid | Add/remove favourite |
| POST | /api/user/getAllFav | Get all favourites |

## 🌐 Live Demo
Coming soon...

## 👨‍💻 Author
Your Name - [GitHub](https://github.com/Aditya02678)

## 📄 License
MIT License