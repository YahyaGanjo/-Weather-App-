window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=edd7b783b54148fea28222124211506&q=${lat},${long}&aqi=no`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(
            ".temperature-degree"
          ).innerHTML = `${data.current.temp_c}`;
          document.querySelector(
            ".temperature-description"
          ).innerHTML = `${data.current.condition.text}`;
          document.querySelector(
            ".location-timezone"
          ).innerHTML = `${data.location.tz_id}`;
          document.querySelector(
            ".icon"
          ).src = `${data.current.condition.icon}`;
        });
    });
  }
});
