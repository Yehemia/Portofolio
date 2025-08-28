tsParticles.load("tsparticles", {
    fullScreen: {
        enable: false
    },
    particles: {
        number: {
            value: 100, // Jumlah bintang statis
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 1,
            random: true,
        },
        move: {
            enable: false // Bintang statis tidak bergerak
        }
    },
    // Tambahkan konfigurasi untuk "emitters" (bintang jatuh)
    emitters: {
        direction: "top-right",
        rate: {
            quantity: 1,
            delay: 7
        },
        position: {
            x: 0,
            y: 50
        },
        size: {
            width: 0,
            height: 0
        },
        particles: {
            size: {
                value: 2
            },
            move: {
                speed: 10,
                direction: "none",
                outModes: {
                    default: "destroy"
                }
            },
            // Efek jejak bintang jatuh
            trail: {
                enable: true,
                fillColor: "#0f0f1a",
                length: 5
            }
        }
    },
    detectRetina: true
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas active dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas active ke tombol yang diklik
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block'; // Tampilkan kartu
                } else {
                    card.style.display = 'none'; // Sembunyikan kartu
                }
            });
        });
    });
});