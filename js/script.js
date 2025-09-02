// Konfigurasi tsParticles dengan efek hujan meteor
tsParticles.load("tsparticles", {
  background: {
    color: "#0f0f1a",
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 1.5,
      random: true,
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  detectRetina: true,
  // Konfigurasi Hujan Meteor dengan Jejak/Buntut
  emitters: [
    {
      direction: "top-right",
      rate: {
        quantity: 1,
        delay: 5,
      },
      position: {
        x: 0,
        y: 30,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        size: {
          value: [1, 3],
        },
        move: {
          speed: 15, // Kecepatan tinggi untuk meteor
          direction: "none",
          outModes: {
            default: "destroy", // Hilang saat keluar layar
          },
        },
        // Inilah yang membuat "buntut" atau jejak
        trail: {
          enable: true,
          fillColor: "#0f0f1a", // Warna jejak sama dengan background
          length: 10, // Panjang buntut
        },
      },
    },
    {
      direction: "top-left",
      rate: {
        quantity: 1,
        delay: 7,
      },
      position: {
        x: 100,
        y: 50,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        size: {
          value: [1, 2],
        },
        move: {
          speed: 12,
          direction: "none",
          outModes: {
            default: "destroy",
          },
        },
        trail: {
          enable: true,
          fillColor: "#0f0f1a",
          length: 12,
        },
      },
    }
  ],
});


// Fungsi untuk mengirim email (didefinisikan di luar agar bisa diakses)
function sendEmail(e) {
    e.preventDefault();
    const submitButton = document.querySelector('.contact-form button');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    
    emailjs.sendForm('service_thotoe2', 'template_hjgr9qf', e.target, 'tRUO7kidGA_BCXGQ_')
    .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert('Message sent successfully!');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            e.target.reset();
          }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          });
}


// Event listener utama yang berjalan setelah semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Logika untuk Filter Skills
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            skillCards.forEach(card => {
                card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
            });
        });
    });

    // 2. Logika untuk Efek Mengetik
    if(document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Yehemia Gauand.', 'a Web Developer.', 'a Tech Creator.'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            backDelay: 2000
        });
    }
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navLinks) {
        // Tampilkan/sembunyikan menu saat ikon hamburger diklik
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Ganti ikon hamburger menjadi 'X' saat menu terbuka
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark'); // <-- SUDAH DIGANTI
            } else {
                icon.classList.remove('fa-xmark'); // <-- SUDAH DIGANTI
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sembunyikan menu setelah salah satu link di dalamnya diklik
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Kembalikan ikon 'X' menjadi hamburger
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark'); // <-- SUDAH DIGANTI
                icon.classList.add('fa-bars');
            }
        });
    });
    // 5. Logika untuk Form Kontak
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});