# Master MC Cleaning Services Website

A modern, responsive website for Master MC Cleaning Services featuring online booking, scheduling, and detailed residence information forms.

## Features

### 🏠 Core Pages & Sections
- **Hero Section**: Eye-catching landing page with call-to-action buttons
- **Services**: Comprehensive list of cleaning services offered
- **About**: Company information and why choose Master MC
- **Booking System**: Full-featured online booking with detailed forms
- **Contact**: Multiple contact methods and quick contact form

### 📅 Booking System Features
- **Personal Information Collection**: Name, email, phone
- **Property Details Form**:
  - Address
  - Property type (House, Apartment, Condo, Office, Commercial)
  - Square footage
  - Number of bedrooms and bathrooms
  - Pet information
- **Service Selection**:
  - Multiple service types (Standard, Deep, Move In/Out, Carpet, Window, Office, Custom)
  - Frequency options (One-time, Weekly, Bi-weekly, Monthly)
  - Preferred date and time slot selection
- **Additional Options**:
  - Cleaning supplies preferences
  - Property access information
  - Special instructions field

### 💰 Smart Features
- Price estimation calculator
- Form validation with helpful error messages
- Auto-save functionality (saves form progress every 30 seconds)
- Draft restoration on page reload
- Mobile-responsive design
- Smooth scrolling navigation
- Interactive animations

### 🎨 Design
- Brand colors from your logo (green color scheme)
- Modern, clean interface
- Fully responsive (works on desktop, tablet, and mobile)
- Professional typography
- Icon integration with Font Awesome
- Smooth transitions and hover effects

## Installation & Setup

### Quick Start
1. Save your logo image as `logo.png` in the project folder
2. Open `index.html` in a web browser
3. That's it! The website is ready to use.

### File Structure
```
MC-Cleaning/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── logo.png           # Your company logo (add this file)
└── README.md          # This file
```

### Adding Your Logo
Place your logo image in the project folder and name it `logo.png`. The navigation bar will automatically display it.

## Customization

### Update Contact Information
Edit these sections in `index.html`:
- Phone: Search for `(555) 123-4567` and replace
- Email: Search for `info@mastermccleaning.com` and replace
- Hours: Search for "Mon-Fri: 8AM-6PM" and update as needed

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-green: #2d5016;
    --secondary-green: #4a7c2a;
    --light-green: #6ba83e;
}
```

### Add/Remove Services
Edit the services section in `index.html` around line 75. Each service is contained in a `<div class="service-card">`.

### Modify Pricing
Update the `basePrices` object in `script.js` (around line 180) to change service pricing for the estimate calculator.

## Features Usage

### Form Auto-Save
- Forms automatically save progress every 30 seconds
- Saved to browser's localStorage
- Automatically restored if user returns to the page
- Cleared upon successful submission

### Price Estimator
- Click "Estimate Price" button in booking form
- Requires: service type, bedrooms, and bathrooms
- Provides preliminary pricing estimate
- Accounts for frequency discounts

### Mobile Menu
- Hamburger menu automatically appears on mobile devices
- Click to expand/collapse navigation
- Smooth scrolling to sections

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no framework dependencies)
- Font Awesome 6.4.0 (for icons)
- localStorage API (for form auto-save)

## Production Deployment

### Before Going Live:
1. **Replace demo content** with real information
2. **Add backend integration** for form submissions
3. **Set up email notifications** for booking requests
4. **Add Google Analytics** or similar tracking
5. **Configure SSL certificate** for HTTPS
6. **Add Google Maps** for location display
7. **Integrate payment gateway** if accepting online payments
8. **Set up database** to store bookings

### Backend Integration
The current implementation stores data in browser localStorage (client-side only). For production:
- Add server-side form handling (Node.js, PHP, Python, etc.)
- Store bookings in a database (MySQL, PostgreSQL, MongoDB)
- Send email notifications to admin and customers
- Implement booking confirmation system
- Add calendar integration

### Recommended Enhancements:
- Add testimonials/reviews section
- Include before/after photo gallery
- Add FAQ section
- Implement live chat support
- Add booking calendar with real-time availability
- Include promotional pricing/coupons
- Add blog section for SEO
- Implement user accounts for repeat customers

## Support & Maintenance
- Regular updates to keep dependencies current
- Test forms monthly to ensure functionality
- Monitor analytics for user behavior
- Update content seasonally
- Backup booking data regularly

## Performance
- Optimized images for fast loading
- Minimal external dependencies
- Efficient CSS and JavaScript
- Mobile-first responsive design
- Smooth animations with CSS transforms

## Security Notes
- All forms include basic validation
- Phone and email format checking
- Date validation (future dates only)
- XSS protection through proper escaping (implement server-side)
- HTTPS required for production

## License
© 2026 Master MC Cleaning Services. All rights reserved.

## Credits
- Design inspired by modern cleaning service websites
- Icons by Font Awesome
- Stock images from Unsplash (replace with your own)

---

**Need help?** Contact your web developer or refer to the inline comments in the code files.
# MC-Cleaning
