const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// user's position
navigator.geolocation.watchPosition((data) => {
  // .watchPosition gives us the position of the user over time
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('You must allow it to happen');
});
