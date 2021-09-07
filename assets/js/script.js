alert("Halo semuanya !!");

const nama = prompt("Siapa nama anda?");
const bahasa = prompt("Anda berbahasa apa?");
const halo = document.querySelector(".kataSapaan");

if (bahasa === "English" || bahasa === "english") {
  halo.innerHTML = "Haloo" + " " + nama + " " + "Welcome" + " " + "in our website" + "!";
} else if (bahasa === "French" || bahasa === "french") {
  halo.innerHTML = "Bonjour" + " " + nama + " " + "Bienvenue" + " " + "sur notre site" + "!";
} else if (bahasa === "Spanish" || bahasa == "spanish") {
  halo.innerHTML = "Hola" + " " + nama + " " + "Bienvenido," + " " + "a nuestro sitio web" + "!";
} else {
  halo.innerHTML = "Haloo" + " " + nama + " " + " Selamat Datang" + " " + "di website kami" + "!";
}
