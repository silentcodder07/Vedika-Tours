# Vedika Tours & Travels - Product Requirements Document

## Original Problem Statement
Build a super clean and simple website for Vedika Tours & Travels, a Panvel-based travel service offering car rentals, tour packages, airport transfers, and corporate travel across Maharashtra.

## User Personas
1. **Family Travelers** - Looking for safe, comfortable vehicles for temple tours and family trips
2. **Pilgrimage Seekers** - Interested in Maharashtra Dev Darshan and religious tours
3. **Corporate Clients** - Need reliable transportation for business travel
4. **Airport Travelers** - Require timely pickup and drop services

## Core Requirements (Static)
1. Conversion-focused design with multiple CTAs
2. Bilingual support (English + Marathi)
3. Mobile-responsive layout
4. WhatsApp and Call integration for instant booking
5. Tour packages showcase with pricing
6. Fleet display with vehicle details
7. Customer testimonials and Google ratings
8. Contact form for inquiries
9. Gallery of travel experiences

## What's Been Implemented (Dec 2025)

### Frontend Components ✅
- **Header** - Sticky navigation with logo, menu, Call Now, and WhatsApp buttons
- **Hero Section** - Full-screen with highway background, company name (bilingual), rating badge, CTAs
- **Highlights** - 4-card grid showing 4.9 rating, 200+ trips, Panvel based, 24x7 service
- **Services** - 4 service cards: Car Rental, Tour Packages, Airport Transfer, Corporate Travel
- **Tours** - 4 tour packages with images, pricing (₹8,999-₹15,999), destinations, duration
- **Fleet** - 4 vehicles: Swift, Dzire, Innova, Tempo Traveller with specs
- **Testimonials** - Carousel with 5 customer reviews and Google 4.9 rating display
- **Gallery** - 8-image grid with lightbox view
- **About** - Company story and 5 key highlights
- **Contact** - Form (name, phone, pickup, drop, date, message) + contact info
- **CTA Section** - Full-width orange banner with Call/WhatsApp buttons
- **Footer** - Company info, quick links, contact details
- **Mobile Floating CTA** - Sticky bottom bar with Call/WhatsApp (mobile only)

### Mock Data Structure ✅
Location: `/app/frontend/src/mock.js`
- Company details (name, phone, email, address, ratings)
- 4 highlights
- 4 services
- 4 tour packages
- 4 fleet vehicles
- 5 testimonials
- 8 gallery images
- About section content

### Contact Form ✅
- Stores submissions to `localStorage` (mock backend)
- Fields: name, phone, pickupLocation, dropLocation, date, message
- Toast notification on successful submission

## API Contracts (To Be Implemented)

### Backend Endpoints Needed

#### 1. Booking Inquiry API
```
POST /api/bookings
Body: {
  name: string,
  phone: string,
  pickupLocation: string,
  dropLocation: string,
  date: string,
  message: string
}
Response: { success: boolean, bookingId: string }
```

#### 2. Get All Bookings (Admin)
```
GET /api/bookings
Response: [{ id, name, phone, pickupLocation, dropLocation, date, message, timestamp }]
```

#### 3. Tour Packages API
```
GET /api/tours
Response: [{ id, title, destinations, duration, price, image, description }]
```

#### 4. Fleet API
```
GET /api/fleet
Response: [{ id, name, type, seating, image, description }]
```

## Prioritized Backlog

### P0 - Critical (Next Phase)
- [ ] Backend API development with MongoDB
- [ ] Replace mock.js data with real API calls
- [ ] Admin dashboard to view booking inquiries
- [ ] Email notification system for new bookings

### P1 - High Priority
- [ ] WhatsApp API integration for automated booking confirmations
- [ ] Live availability calendar for tours and vehicles
- [ ] SMS notifications for booking confirmations
- [ ] Payment gateway integration (Stripe/Razorpay)

### P2 - Nice to Have
- [ ] Customer login and booking history
- [ ] Real-time vehicle tracking
- [ ] Multi-language support (add more regional languages)
- [ ] Blog section for travel tips and destination guides
- [ ] Social media integration and sharing
- [ ] SEO optimization and meta tags

## Technical Stack
- **Frontend**: React, TailwindCSS, Shadcn UI, Axios
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Deployment**: Emergent Platform

## Next Immediate Tasks
1. Design MongoDB schemas for bookings, tours, fleet, testimonials
2. Build FastAPI endpoints for CRUD operations
3. Integrate frontend with backend APIs
4. Test end-to-end booking flow
5. Add admin authentication and dashboard
