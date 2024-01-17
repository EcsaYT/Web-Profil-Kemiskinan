// script.js

// Fungsi untuk mengubah warna latar belakang navbar saat di-scroll
function changeNavbarBackgroundOnScroll() {
    const navbar = document.querySelector('.navbar');
    const scrolledClass = 'scrolled';
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add(scrolledClass);
      } else {
        navbar.classList.remove(scrolledClass);
      }
    });
  }
  

  // Fungsi untuk menampilkan pesan sukses setelah mengirim formulir kontak
  function showSuccessMessage() {
    const contactForm = document.querySelector('form');
  
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Ambil data formulir
      const formData = new FormData(contactForm);
  
      try {
        // Kirim data formulir ke server
        const response = await fetch('URL_SERVER_ANDA', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          // Jika pengiriman berhasil, tampilkan pesan sukses
          alert('Pesan Anda berhasil terkirim!');
          // Atur formulir kembali ke kondisi awal atau lakukan aksi lainnya
          contactForm.reset();
        } else {
          // Jika terjadi kesalahan pada server, tampilkan pesan kesalahan
          alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        }
      } catch (error) {
        // Tangani kesalahan selama pengiriman data
        console.error('Terjadi kesalahan:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    });
  }
  

  // Fungsi untuk menampilkan pesan sukses setelah mengirim formulir kontak
  /*function showSuccessMessage() {
    const contactForm = document.querySelector('form');
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Logika pengiriman formulir akan ditambahkan di sini
  
      // Tampilkan pesan sukses
      alert('Pesan Anda berhasil terkirim!');
  
      // Atur formulir kembali ke kondisi awal atau lakukan aksi lainnya
      contactForm.reset();
    });
  }*/
  
  
  // Fungsi untuk menginisialisasi grafik Chart.js
  /*function initializeChart(chartId, chartType, chartData, chartOptions) {
    // Temukan elemen canvas berdasarkan ID
    const chartCanvas = document.getElementById(chartId);
    
    // Pastikan elemen canvas ditemukan
    if (chartCanvas) {
      // Inisialisasi grafik menggunakan Chart.js
      const ctx = chartCanvas.getContext('2d');
      const myChart = new Chart(ctx, {
        type: chartType, // Jenis grafik (bar, line, pie, dll.)
        data: chartData, // Data grafik
        options: chartOptions, // Opsi konfigurasi grafik
      });
    }
  }

  // Contoh data dan opsi konfigurasi untuk grafik
  const dataProvinsi = {
    labels: ['Jawa Barat', 'Jawa Timur', 'Sumatera Utara', 'DLL'],
    datasets: [{
      label: 'Jumlah Penduduk Miskin (juta)',
      data: [8, 7, 5, 10],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    }],
  };

  const chartOptionsProvinsi = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Panggil fungsi untuk menginisialisasi grafik
  initializeChart('kemiskinanProvinsiChart', 'bar', dataProvinsi, chartOptionsProvinsi);*/


  // Fungsi untuk menginisialisasi grafik Chart.js
 /* function initializeCharts() {
    // Isi fungsi ini dengan logika untuk menggambar grafik menggunakan Chart.js
    // Contoh: https://www.chartjs.org/docs/latest/
  }*/
  
  // Fungsi untuk mengaktifkan fitur tooltip dari library Feather Icons
  function enableFeatherIconsTooltip() {
    feather.replace({
      // Konfigurasi Feather Icons
      // Contoh: https://feathericons.com/
      // Konfigurasi lebih lanjut dapat ditambahkan di sini
      width: '1em', // Lebar ikon
      height: '1em', // Tinggi ikon
      class: 'feather-icon', // Kelas tambahan untuk ikon
    // ... konfigurasi lainnya
    });

    // Temukan semua elemen dengan kelas 'feather-icon' (kelas yang diatur oleh Feather Icons)
    const featherIcons = document.querySelectorAll('.feather-icon');

    // Loop melalui setiap ikon dan terapkan tooltip menggunakan tippy.js
    featherIcons.forEach((icon) => {
      tippy(icon, {
        content: icon.getAttribute('data-tooltip'), // Ambil teks tooltip dari atribut data-tooltip
        placement: 'bottom', // Atur posisi tooltip (bottom, top, right, left, dll.)
        // Opsi konfigurasi lainnya bisa ditambahkan di sini
      });
    });
  }



  
  // Panggil fungsi untuk mengaktifkan tooltip pada ikon Feather Icons
  enableFeatherIconTooltips();
  
  // Panggil fungsi-fungsi inisialisasi saat dokumen telah dimuat sepenuhnya
  document.addEventListener('DOMContentLoaded', () => {
    changeNavbarBackgroundOnScroll();
    showSuccessMessage();
    initializeCharts();
    enableFeatherIconsTooltip();
  });
  