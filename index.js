const element = (
  <div class="bg-container">
    <h1 class="main-heading">Congratulations</h1>
    <div class="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        class="profile-img"
      />
      <h1 class="profileName">Kiran V</h1>
      <p class="clgName">
        Vishnu Institute of Computer Education and Technology, Bhimavaram{" "}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        class="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
