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
            strings: ['Yehemia Gauand.', 'a Web Developer.', 'a Mobile Developer.', 'a UI/UX Designer.'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            backDelay: 2000
        });
    }
    
    // 3. Logika untuk Navigasi Mobile (Hamburger Menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 4. Logika untuk Form Kontak
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }

    // ===== 5. LOGIKA BARU UNTUK MODAL PROYEK =====

    // Database mini untuk detail proyekmu
    const projectDetails = {
        'kenangan-inn': {
            title: 'Kenangan Inn: Sistem Manajemen Hotel',
            images: [
                'images/projects/kenangan-inn/admin-dashboard-chart.png',
                'images/projects/kenangan-inn/dashboard-customer.png',
                'images/projects/kenangan-inn/form-booking.png',
                'images/projects/kenangan-inn/payment-qr.png',
                'images/projects/kenangan-inn/checkin-management.png',
                'images/projects/kenangan-inn/checkout-penalty.png',
                'images/projects/kenangan-inn/user-management.png',
                'images/projects/kenangan-inn/invoice-pdf.jpg'
            ],
            tags: ['Java', 'JavaFX', 'MySQL', 'MVC Pattern', 'iTextPDF', 'ZXing'],
            description: 'Aplikasi desktop komprehensif yang dirancang untuk mengelola seluruh alur operasional hotel, mulai dari pemesanan online oleh pelanggan hingga manajemen check-in/out oleh staf dan pemantauan analitik oleh admin.',
            features: [
              '<strong>Dasbor Analitik Admin:</strong> Menampilkan grafik pendapatan dan statistik reservasi secara real-time untuk pengambilan keputusan bisnis.',
              '<strong>Alur Booking Pelanggan:</strong> Proses pemesanan kamar yang intuitif, dari pemilihan tanggal hingga pembayaran.',
              '<strong>Pembayaran via QR Code:</strong> Menghasilkan QR Code unik untuk setiap transaksi dan melakukan validasi pembayaran.',
              '<strong>Manajemen Operasional Resepsionis:</strong> Antarmuka khusus untuk proses Check-In, Check-Out, dan penanganan denda secara efisien.',
              '<strong>Pembuatan Invoice PDF Otomatis:</strong> Sistem secara otomatis menghasilkan dan mengirimkan invoice dalam format PDF setelah pembayaran berhasil.',
              '<strong>Manajemen Data (CRUD):</strong> Fitur lengkap untuk mengelola data pengguna, tipe kamar, dan fasilitas hotel.'
            ],
            challenge: 'Mencegah *double booking* saat banyak pengguna memesan kamar terakhir secara bersamaan. Solusinya adalah dengan menerapkan penguncian baris database (`SELECT ... FOR UPDATE`) dalam sebuah transaksi untuk memastikan integritas data.'
        },
        'Dede-Clothing': {
          title: 'Dede Clothing: Manajemen Inventory dan POS',
          images: [
            'images/projects/Dede-Clothing/pos.png',
            'images/projects/Dede-Clothing/menu-login.png',
            'images/projects/Dede-Clothing/Manajemen-inventory.png',
            'images/projects/Dede-Clothing/dashboard-manager.png'
          ],
          tags: ['Java', 'JavaFX', 'MySQL', 'MVC Pattern'],
          description: 'Aplikasi desktop yang dirancang untuk membantu operasional harian toko pakaian. Aplikasi ini menerapkan sistem kontrol akses berbasis peran (Role-Based Access Control) untuk membedakan fitur yang dapat diakses oleh Manajer, Kasir, dan staf Inventaris.',
            features: [
              '<strong>Multi-Role Access:</strong> Sistem login aman yang mengarahkan pengguna ke dasbor berbeda sesuai peran mereka (Manajer, Kasir, Inventaris).',
              '<strong>Point of Sale (Kasir):</strong> Antarmuka intuitif bagi kasir untuk memproses transaksi penjualan dengan cepat.',
              '<strong>Manajemen Inventaris:</strong> Fitur CRUD (Create, Read, Update, Delete) lengkap untuk mengelola data stok barang masuk dan keluar.',
              '<strong>Laporan Manajer:</strong> Dasbor khusus bagi manajer untuk memantau aktivitas dan laporan penjualan toko.'
            ],
            challenge: 'Tantangan utama adalah mengelola *state* aplikasi yang berbeda untuk setiap peran pengguna dan memastikan keamanan data agar staf biasa tidak bisa mengakses fitur manajer. Solusinya adalah dengan menerapkan pengecekan sesi yang ketat di setiap controller.'
        },
        'todo-app': {
            title: 'TaskMaster Pro: Productivity App',
            images: [
                'images/projects/todo-app/home-screen.png',
                'images/projects/todo-app/add-task.png',
                'images/projects/todo-app/add-task2.png',
                'images/projects/todo-app/add-task3.png',
                'images/projects/todo-app/stats-screen.png',
                'images/projects/todo-app/dark-mode.png'
            ],
            tags: ['Flutter', 'Dart', 'Hive', 'Provider', 'Android/iOS'],
            description: 'Aplikasi mobile lintas platform yang dirancang untuk meningkatkan produktivitas pengguna. Dibangun menggunakan framework Flutter, aplikasi ini menawarkan pengalaman pengguna yang mulus dengan performa tinggi berkat penyimpanan lokal yang efisien.',
            features: [
                '<strong>Manajemen Tugas Intuitif:</strong> Buat, edit, dan atur prioritas tugas dengan mudah menggunakan antarmuka yang bersih.',
                '<strong>Penyimpanan Lokal (Offline-First):</strong> Menggunakan Hive Database untuk penyimpanan data yang sangat cepat dan bisa diakses tanpa internet.',
                '<strong>Notifikasi Pintar:</strong> Sistem pengingat terintegrasi agar pengguna tidak melewatkan tenggat waktu tugas.',
                '<strong>Analitik Produktivitas:</strong> Halaman statistik visual untuk melacak penyelesaian tugas dan performa harian.',
                '<strong>Tema Dinamis:</strong> Dukungan penuh untuk Mode Gelap dan Terang sesuai preferensi pengguna.'
            ],
            challenge: 'Tantangan utama adalah mengoptimalkan performa aplikasi saat menangani banyak data tugas sekaligus menjaga sinkronisasi UI yang mulus. Solusinya adalah menggunakan **Provider** untuk manajemen state yang efisien dan **Hive** untuk operasi database non-blocking.'
        },
        'air-canvas': {
            title: 'Air Canvas: AI-Powered Drawing',
            embedUrl: 'https://drive.google.com/file/d/1NP6HESPKeC-uqGu9NM5lCYPxnuPnitBL/preview',
            images: [
                'images/projects/air-canvas/action-shot.png',
                'images/projects/air-canvas/color-switching.png',
                'images/projects/air-canvas/clear-screen.png',
                'images/projects/air-canvas/drawing-result.png'
            ],
            tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision'],
            description: 'Eksplorasi di bidang Computer Vision yang mengubah webcam biasa menjadi kanvas digital. Menggunakan library MediaPipe untuk pelacakan tangan yang presisi, aplikasi ini memungkinkan pengguna menggambar di udara tanpa alat tambahan apa pun, hanya menggunakan ujung jari telunjuk.',
            features: [
                '<strong>Hand Tracking Real-time:</strong> Menggunakan model Machine Learning dari MediaPipe untuk mendeteksi 21 titik landmark tangan dengan latensi sangat rendah.',
                '<strong>Virtual UI:</strong> Antarmuka tombol virtual di layar yang responsif terhadap sentuhan jari untuk mengganti warna (Biru, Hijau, Merah, Kuning) atau menghapus kanvas.',
                '<strong>Drawing Algorithm:</strong> Algoritma penggambaran garis yang mulus menggunakan OpenCV untuk menghubungkan titik-titik koordinat jari antar frame.',
                '<strong>Canvas Merging:</strong> Teknik penggabungan citra (image blending) untuk menampilkan hasil goresan secara transparan di atas feed kamera asli.'
            ],
            challenge: 'Tantangan terbesar adalah mengurangi *noise* atau getaran dari deteksi jari agar garis yang digambar terlihat halus dan tidak patah-patah. Solusinya adalah dengan mengimplementasikan logika untuk menghubungkan titik sebelumnya dengan titik saat ini menggunakan `cv2.line` daripada hanya menggambar titik-titik terpisah.'
        }
    };

    // Ambil elemen-elemen DOM yang diperlukan untuk modal
    const modal = document.getElementById('project-modal');
    const detailButtons = document.querySelectorAll('.project-detail-btn');
    const closeButton = document.querySelector('.close-button');

    // Fungsi untuk membuka modal dan mengisi datanya
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projectId;
            const data = projectDetails[projectId];

            if (data && modal) {
                // Isi konten teks
                modal.querySelector('#modal-title').textContent = data.title;
                modal.querySelector('#modal-description').textContent = data.description;
                modal.querySelector('#modal-challenge').textContent = data.challenge;

                const videoContainer = modal.querySelector('#modal-video-container');
                const videoFrame = modal.querySelector('#modal-video-frame');

                // Cek apakah properti 'embedUrl' ada di data proyek
                if (data.embedUrl) {
                    videoContainer.style.display = 'block';
                    videoFrame.src = data.embedUrl; // Langsung pakai URL lengkapnya
                } else {
                    videoContainer.style.display = 'none';
                    videoFrame.src = '';
                }
                // Isi tags
                const tagsContainer = modal.querySelector('#modal-tags');
                tagsContainer.innerHTML = '';
                data.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
                
                // Isi fitur (mendukung tag HTML seperti <strong>)
                const featuresList = modal.querySelector('#modal-features');
                featuresList.innerHTML = '';
                data.features.forEach(featureText => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<span>${featureText}</span>`;
                    featuresList.appendChild(listItem);
                });

                // Isi Galeri Gambar
                const mainImage = modal.querySelector('#modal-main-image');
                const thumbnailsContainer = modal.querySelector('#modal-thumbnails');
                thumbnailsContainer.innerHTML = ''; 
                
                if (data.images && data.images.length > 0) {
                    mainImage.src = data.images[0];
                    
                    data.images.forEach((imgSrc, index) => {
                        const thumb = document.createElement('img');
                        thumb.src = imgSrc;
                        
                        if (index === 0) thumb.classList.add('active');
                        
                        thumb.addEventListener('click', () => {
                            mainImage.src = imgSrc;
                            thumbnailsContainer.querySelector('.active')?.classList.remove('active');
                            thumb.classList.add('active');
                        });
                        
                        thumbnailsContainer.appendChild(thumb);
                    });
                }
                
                // Tampilkan modal
                modal.style.display = 'flex';
            }
        });
    });

    // Fungsi untuk menutup modal
    function closeModal() {
        if (modal) modal.style.display = 'none';
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        // Hentikan video dengan mengosongkan src
        modal.querySelector('#modal-video-frame').src = '';
    }
}