// Menu items data
const menuItems = [
    { name: "Butter Chicken", price: 280, img: "https://imgs.search.brave.com/AIle4mXVerSxrtfA9D3Gj-iFzCyCPjnwPAsN0gn41Uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teWZv/b2RzdG9yeS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvQnV0dGVyLUNo/aWNrZW4tMS5qcGc" },
    { name: "Paneer Tikka", price: 220, img: "https://imgs.search.brave.com/6gbzkHA545cplU1Rhz9HctSfsdHFc8g9uMJ6uIMh0b0/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM0LzcyLzk2/LzM2MF9GXzgzNDcy/OTY1NV90YTVNRlNy/RHRMVm5aaTRRczFq/WW94UkNEMVFzckly/TC5qcGc" },
    { name: "Masala Dosa", price: 180, img: "https://imgs.search.brave.com/UcWMdVIvKqpBNzrOK2NTvUrkd2B2k48YakCQFGQx_Tw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjYzOTg5Ni9waG90/by9zb3V0aC1pbmRp/YW4tbWFzYWxhLWRv/c2EtYW5kLWNvZmZl/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Y3M1LXpMbmRU/aVpINXRSZnVwNU1V/dTBQN3NOY2tsLTQ1/NTNFUkxWOTZsRT0" },
    { name: "Chole Bhature", price: 150, img: "https://imgs.search.brave.com/PtMuo8-ZyHvSs74KDKoeCyrczQ31LSbSMU-lzEpSctE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jaG9sZXkt/YmhhdHVyZS1kaXNo/LW9yaWdpbmF0ZWQt/aW5pdGlhbGx5LTI2/MG53LTE2NjEwNTEy/NzUuanBn" },
    { name: "Biryani", price: 250, img: "https://imgs.search.brave.com/GpAo2sqDn5iQ20Szf1SK_kL7bR9wJ8h6FhD6hdv1Z54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2Lzc0LzgxLzg4/LzM2MF9GXzE2NzQ4/MTg4NTZfZzhCUkk1/dm53RnRKSzJlUW5X/Szk5clRRSFpwR09D/VHIuanBn" },
    { name: "Aloo Paratha", price: 120, img: "https://imgs.search.brave.com/sF4OWGXavjQLFLZ6MrpGxUojlRFdlVzgverh5sRkVA4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3ds/LWFsb28tcGFyYXRo/YS1mbGF0YnJlYWQt/c3R1ZmZlZC1zcGlj/ZWQtcG90YXRvZXMt/c2VydmVkLXlvZ3Vy/dC1waWNrbGUtaXNv/bGF0ZWQtY2xlYW4t/d2hpdGUtYmFja2dy/b3VuZC0zNzI3ODUy/NzkuanBn" },
    { name: "Dal Makhani", price: 200, img: "https://imgs.search.brave.com/t4lwFMGw7LrFV0fJtiwDtGav6KayU-4ILf_Jm7s7lgw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvWVUz/NW0tMV9XTHFpelEz/S1dPUFpjUzlUeUow/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/MjAyNDExMjEtU0VB/LURhbE1ha2hhbmkt/UWlBaS1IZXJvMy0z/OS03MjQyOWU1ZTBk/Yjk0ZTk5OTBiNWVh/NDEyMTA1N2U1OC5q/cGc" },
    { name: "Rogan Josh", price: 300, img: "https://imgs.search.brave.com/ilMGpdcNoohFkFpx1lQr5Sh_kahhL11KqSPExmJAlrk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/NTAzODMyOC9waG90/by9rYXNobWlyaS1y/b2dhbi1qb3NoLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/OWVQbzVmNnI1T1pM/ZVdKdXY1TXZyelNx/Y0ZGZ0dEcDNSQ1d6/WUNXWms0PQ" },
    { name: "Samosa", price: 50, img: "https://imgs.search.brave.com/DEY6z7KfFj-bF4jbvw5_UIuUzHvmFkVjCKt5vFVtIKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi8xMjM3/MTIwMjAuanBnP2lt/Z3NpemU9NzEzMTAm/cGhvdG9pZD0xMjM3/MTIwMjAmd2lkdGg9/NjAwJmhlaWdodD0z/MzUmcmVzaXplbW9k/ZT03NQ" },
    { name: "Idli Sambhar", price: 140, img: "https://imgs.search.brave.com/V9i_n7DDxwjOmqT5qI45ZBRsXcMIA8iIEFcsze1NwVw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzEyLzQyLzY1/LzM2MF9GXzE1MTI0/MjY1NzNfS3d1V0s3/WTZmYTAxN3pnOFdO/V2kzeUloaW1vbERL/R3YuanBn" },
    { name: "Fish Curry", price: 320, img: "https://imgs.search.brave.com/DMMDZC12w5sWv6PvHeXuAZAsv8hM2Zauyzv-kwCvpgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9maXNoLWN1/cnJ5X3NlZXItY3Vy/cnktdHJhZGl0aW9u/YWwtaW5kaWFuLTI2/MG53LTE5MTAwMzAw/ODkuanBn" },
    { name: "Chicken Tandoori", price: 270, img: "https://imgs.search.brave.com/fKJkWJewUr6FKGusJhz8DHBdzKm5X3p7LVYvS-gxTr0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgy/MDk1MjEvcGhvdG8v/dGFuZG9vcmktY2hp/Y2tlbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dFd6RUpC/Z3FEaVM5Q3RvZ20w/RFY5U1U1dGUwU21a/aENQRnpnYmFtbjRl/MD0" },
    { name: "Mutton Curry", price: 350, img: "https://imgs.search.brave.com/js33KTBIgYXR_BD8i1Wi42WDPG7inNyofoSOuCD7yBk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbmRp/YW4tc3BpY2VkLWxh/bWItY3Vycnktc2Vy/dmVkLWJha2luZy1w/b3QtZ3Jhdnktc2F1/Y2UtbWludC10cmFk/aXRpb25hbC0xMDgz/Njg0OTYuanBn" },
    { name: "Vada Pav", price: 80, img: "https://imgs.search.brave.com/CzITM070cbX1_pAfIA7o87dxxNLx6dPMA8bYUfDdOnY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzEwL3ZhZGEtcGF2/LXJlY2lwZS53ZWJw" },
    { name: "Rajma Chawal", price: 160, img: "https://imgs.search.brave.com/k2VqBPjRE0lBV0FGAF3UBY7D_ikZ5Q8XmyLKnozwsCE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/MjgwMTM3My9waG90/by9yYWptYS1jaGF3/YWwtaXMtYS1wb3B1/bGFyLW5vcnRoLWlu/ZGlhbi1mb29kLXJh/am1hLWlzLWEtc29j/a2VkLXJlZC1raWRu/ZXktYmVhbnMtY29v/a2VkLXdpdGguanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTJy/WG1FcEY3ckcxRnVC/bXg1NWZIbXJzcmNS/T2EwamtZNFBIYmNu/UlZ0YWc9" },
    { name: "Pav Bhaji", price: 130, img: "https://imgs.search.brave.com/hdF_m__Ms_gO2MO6CVcSrbwvJ_pwOPO6emQlqDIxjT4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzQwLzkxLzcw/LzM2MF9GXzEzNDA5/MTcwNzRfRGZBT2to/dFRhdFo1Qjk3em94/QTRRRkh0OU91Q1lH/a00uanBn" },
    { name: "Pani Puri", price: 100, img: "https://imgs.search.brave.com/ZTzZimARjQ1od9c7EULf6HGMs_TbZ0DHmpLgNPnBMfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGluZ3RhYmxl/LmNvbS9pbWcvZ2Fs/bGVyeS90aGUtdWx0/aW1hdGUtZ3VpZGUt/dG8tcGFuaS1wdXJp/LWluZGlhcy1iZWxv/dmVkLWNoYWF0L3do/YXQtZmlsbGluZ3Mt/YXJlLXVzZWQtdG8t/c3R1ZmYtdGhlLXB1/cmktMTY3MDM0ODc1/MC5qcGc" },
    { name: "Hyderabadi Haleem", price: 280, img: "https://imgs.search.brave.com/f--qCIc6GUWep8aDgQVyf52h3H9iwbBhqn0dKq5sWSc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oeWRlcmFiYWRp/LWhhbGVlbS13aXRo/LWRyaXp6bGUtc2Fm/ZnJvbl8xMTE0NzEw/LTI3NDc4Ni5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw" },
    { name: "Veg Pulao", price: 190, img: "https://imgs.search.brave.com/UitNRtDK_S4rO33I3VpnXvSTEFAC3yqxx1qknqqTe9A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnVuZm9vZGZyb2xp/Yy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDUvVmVn/L1B1bGFvLUJsb2ct/MzAweDMwMC5qcGc" },
    { name: "Gulab Jamun", price: 90, img: "https://imgs.search.brave.com/eH29wCGalUh7HlhF245SYjCEQAzj9gA2P6_YqKdPFF8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzA5LzgwLzQ4/LzM2MF9GXzE0MDk4/MDQ4NTVfQnZGTHRC/aWE1dTZIclhrSTE3/SFFWOElzU2FMWlgw/dzkuanBn" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMenuSystem();
    initializeThemeToggle();
    initializeAnimations();
    initializeBookingForm();
});

// Menu System Functionality
function initializeMenuSystem() {
    const menuList = document.getElementById('menu-list');
    const orderSummary = document.getElementById('order-summary');
    const totalDisplay = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!menuList) return; // Only run on dining page

    let total = 0;
    let order = [];

    // Initialize the menu
    function initializeMenu() {
        menuList.innerHTML = '';
        menuItems.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "col-md-6 col-lg-4 mb-4 fade-in";
            card.innerHTML = `
                <div class="menu-card">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="menu-card-body">
                        <h5 class="menu-card-title">${item.name}</h5>
                        <p class="menu-card-price">₹${item.price}</p>
                        <button class="btn btn-primary w-100 add-btn" data-index="${index}">Add to Order</button>
                    </div>
                </div>
            `;
            menuList.appendChild(card);
        });
        
        // Add event listeners to add buttons
        document.querySelectorAll(".add-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                const item = menuItems[index];
                order.push(item);
                total += item.price;
                updateOrderSummary();
                
                // Show success feedback
                const originalText = e.target.textContent;
                e.target.textContent = "Added!";
                e.target.classList.add("btn-success");
                e.target.classList.remove("btn-primary");
                
                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.classList.remove("btn-success");
                    e.target.classList.add("btn-primary");
                }, 1000);
            });
        });
    }

    // Update the order summary
    function updateOrderSummary() {
        if (!orderSummary) return;
        
        orderSummary.innerHTML = "";
        
        if (order.length === 0) {
            orderSummary.innerHTML = '<p class="text-muted text-center">Your cart is empty</p>';
        } else {
            order.forEach((item, index) => {
                const orderItem = document.createElement("div");
                orderItem.className = "order-item";
                orderItem.innerHTML = `
                    <span>${item.name}</span>
                    <span>₹${item.price}</span>
                `;
                orderSummary.appendChild(orderItem);
            });
        }
        
        if (totalDisplay) {
            totalDisplay.textContent = total;
        }
    }

    // Checkout functionality
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (order.length === 0) {
                alert("Please add items to your order!");
            } else {
                alert(`Your order has been placed successfully! Total Bill: ₹${total}`);
                order = [];
                total = 0;
                updateOrderSummary();
            }
        });
    }

    initializeMenu();
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggle');
    
    if (themeToggleBtn) {
        // Check for saved theme preference or default to light
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggleBtn.querySelector('i');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

// Animations
function initializeAnimations() {
    // Initialize fade-in animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Booking Form Functionality
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        const checkInInput = document.getElementById('checkIn');
        const checkOutInput = document.getElementById('checkOut');
        
        if (checkInInput) {
            checkInInput.min = today;
        }
        
        if (checkOutInput) {
            checkOutInput.min = today;
        }
        
        // Form submission
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const checkIn = document.getElementById('checkIn').value;
            const checkOut = document.getElementById('checkOut').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!checkIn || !checkOut || !firstName || !lastName || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (new Date(checkOut) <= new Date(checkIn)) {
                alert('Check-out date must be after check-in date.');
                return;
            }
            
            // Simulate successful booking
            alert('Booking confirmed! We have sent a confirmation email with your booking details.');
            bookingForm.reset();
        });
    }
}

// Back to Top Functionality
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    }
});

// Add back to top button dynamically if not present
if (!document.getElementById('backToTop')) {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.style.opacity = '0';
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTopBtn);
}