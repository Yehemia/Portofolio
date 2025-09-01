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

// Kode untuk filter skill card (tetap sama, jangan dihapus)

function sendEmail(e) {
    // Mencegah form melakukan submit default (reload halaman)
    e.preventDefault();

    // Mengambil tombol submit
    const submitButton = document.querySelector('.contact-form button');
    const originalButtonText = submitButton.innerHTML;

    // Mengubah teks tombol untuk memberi tahu user bahwa email sedang dikirim
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    
    // Mengirim form menggunakan EmailJS
    emailjs.sendForm('service_thotoe2', 'template_hjgr9qf', e.target, 'tRUO7kidGA_BCXGQ_')
    .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert('Message sent successfully!');
            // Mengembalikan teks tombol ke semula
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            // Mengosongkan form setelah berhasil
            e.target.reset();
          }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
            // Mengembalikan teks tombol ke semula jika gagal
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          });
        }
        
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }

    if(document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Yehemia Gauand.', 'a Web Developer.', 'a Tech Creator.'],
            typeSpeed: 70,  // Kecepatan mengetik
            backSpeed: 50,  // Kecepatan menghapus
            loop: true,     // Mengulang animasi
            backDelay: 2000 // Waktu jeda sebelum mulai menghapus teks
        });
    }
});
