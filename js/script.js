// Tunggu sampai halaman selesai dimuat
window.addEventListener('load', () => {
    // Inisialisasi tsParticles
    tsParticles.load("tsparticles", {
        // Ini adalah konfigurasi dasar, Anda bisa mengkustomisasinya di web tsParticles
        fullScreen: {
            enable: false // Penting! Agar tidak menutupi konten kita
        },
        particles: {
            number: {
                value: 160, // Jumlah bintang
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 1.5,
                random: true,
            },
            move: {
                enable: true,
                speed: 0.2, // Kecepatan gerak bintang
                direction: "none",
                out_mode: "out",
                bounce: false
            }
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
                resize: true
            }
        },
        detectRetina: true
    });
});