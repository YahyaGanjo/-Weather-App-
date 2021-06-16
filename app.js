window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
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
          const degreeUnit = document.querySelector(".degree-section");
          degreeUnit.addEventListener("click", () => {
            const unit = document.querySelector("span");
            if (unit.innerText === "C") {
              document.querySelector(
                ".temperature-degree"
              ).innerHTML = `${data.current.temp_f}`;
              unit.innerHTML = "F";
            } else {
              document.querySelector(
                ".temperature-degree"
              ).innerHTML = `${data.current.temp_c}`;
              unit.innerHTML = "C";
            }
          });
        });
    });
  }
});
