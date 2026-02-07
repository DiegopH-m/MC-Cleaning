// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form Validation and Submission
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

if (bookingForm) {
    // Set minimum date to today
    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Validate form
        if (!validateForm(formObject)) {
            return;
        }

        // Simulate form submission (in production, this would send to a server)
        console.log('Booking Request:', formObject);
        
        // Show success message
        bookingForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Store in localStorage (for demo purposes)
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push({
            ...formObject,
            submittedAt: new Date().toISOString(),
            id: Date.now()
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Reset form after 3 seconds
        setTimeout(() => {
            bookingForm.reset();
            bookingForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Contact Form:', formObject);
        
        // Show success message
        alert('Thank you for contacting us! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Form Validation Function
function validateForm(formData) {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // Date validation - must be in the future
    const selectedDate = new Date(formData.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Please select a date in the future.');
        return false;
    }

    return true;
}

// Calculate Estimated Price (optional feature)
function calculateEstimatedPrice() {
    const serviceType = document.getElementById('serviceType')?.value;
    const bedrooms = document.getElementById('bedrooms')?.value;
    const bathrooms = document.getElementById('bathrooms')?.value;
    const frequency = document.getElementById('frequency')?.value;

    // Base prices
    const basePrices = {
        'standard': 100,
        'deep': 200,
        'move': 250,
        'carpet': 150,
        'window': 100,
        'office': 150,
        'custom': 100
    };

    // Frequency discounts
    const frequencyMultipliers = {
        'one-time': 1,
        'weekly': 0.9,
        'bi-weekly': 0.95,
        'monthly': 0.97
    };

    if (serviceType && bedrooms && bathrooms) {
        let price = basePrices[serviceType] || 100;
        price += parseInt(bedrooms) * 20;
        price += parseFloat(bathrooms) * 15;
        
        if (frequency) {
            price *= frequencyMultipliers[frequency] || 1;
        }

        return Math.round(price);
    }

    return null;
}

// Add price estimation display (optional)
const estimatePriceBtn = document.createElement('button');
estimatePriceBtn.type = 'button';
estimatePriceBtn.className = 'btn btn-secondary';
estimatePriceBtn.innerHTML = '<i class="fas fa-calculator"></i> Estimate Price';
estimatePriceBtn.style.marginRight = '1rem';

const formActions = document.querySelector('.form-actions');
if (formActions) {
    formActions.insertBefore(estimatePriceBtn, formActions.firstChild);
    
    estimatePriceBtn.addEventListener('click', () => {
        const estimate = calculateEstimatedPrice();
        if (estimate) {
            alert(`Estimated Price: $${estimate}\n\nThis is a preliminary estimate. Final price will be confirmed after property assessment.`);
        } else {
            alert('Please fill in service type, bedrooms, and bathrooms to get an estimate.');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Auto-update property type based on bedrooms selection
const propertyTypeSelect = document.getElementById('propertyType');
const bedroomsSelect = document.getElementById('bedrooms');

if (bedroomsSelect && propertyTypeSelect) {
    bedroomsSelect.addEventListener('change', (e) => {
        const bedrooms = e.target.value;
        if (bedrooms === '0' && !propertyTypeSelect.value) {
            propertyTypeSelect.value = 'apartment';
        }
    });
}

// Form auto-save (saves to localStorage every 30 seconds)
let autoSaveInterval;
if (bookingForm) {
    const startAutoSave = () => {
        autoSaveInterval = setInterval(() => {
            const formData = new FormData(bookingForm);
            const formObject = {};
            formData.forEach((value, key) => {
                if (value) formObject[key] = value;
            });
            
            if (Object.keys(formObject).length > 0) {
                localStorage.setItem('bookingFormDraft', JSON.stringify(formObject));
                console.log('Form auto-saved');
            }
        }, 30000); // Every 30 seconds
    };

    // Restore form data on page load
    const restoreFormData = () => {
        const savedData = localStorage.getItem('bookingFormDraft');
        if (savedData) {
            const formObject = JSON.parse(savedData);
            Object.keys(formObject).forEach(key => {
                const input = bookingForm.querySelector(`[name="${key}"]`);
                if (input) {
                    if (input.type === 'checkbox') {
                        input.checked = formObject[key] === 'on';
                    } else {
                        input.value = formObject[key];
                    }
                }
            });
            
            // Ask user if they want to restore
            if (confirm('We found a saved draft of your booking form. Would you like to restore it?')) {
                console.log('Form data restored');
            } else {
                localStorage.removeItem('bookingFormDraft');
                bookingForm.reset();
            }
        }
    };

    // Clear draft on successful submission
    bookingForm.addEventListener('submit', () => {
        localStorage.removeItem('bookingFormDraft');
        if (autoSaveInterval) clearInterval(autoSaveInterval);
    });

    // Initialize
    restoreFormData();
    startAutoSave();
}

// Add loading state to buttons
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            
            // Re-enable after 2 seconds (in case of error)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitBtn.getAttribute('data-original-text') || 'Submit';
            }, 2000);
        }
    });
});

// Initialize tooltips or additional features
console.log('Master MC Cleaning Services website loaded successfully!');
console.log('Available bookings:', JSON.parse(localStorage.getItem('bookings') || '[]'));
