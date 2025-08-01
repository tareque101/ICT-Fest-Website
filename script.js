const eventDate = new Date("2025-07-31T00:00:00").getTime();
    const countdown = document.getElementById("countdown");

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `<h3>Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s</h3>`;

      if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "<h3>The event has started!</h3>";
      }
    }, 1000);

    document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.querySelector('.nav-links');

            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Change icon between ☰ and ✕ when clicked
                if (navLinks.classList.contains('active')) {
                    mobileMenuBtn.textContent = '✕';
                } else {
                    mobileMenuBtn.textContent = '☰';
                }
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                });
            });
        });

