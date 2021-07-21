import React from "react-router";
import img1 from "./images/daypass1.jpg";
import img2 from "./images/daypass2.jpg";
import img3 from "./images/daypass3.jpg";
import "../index.css";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flexbox",
        justifyContent: "center",
        height: "450px",
      }}
    >
      <hr style={{ width: "100%" }}></hr>

      <div
        style={{ width: "600px", margin: "0px auto", left: "-325px" }}
        id="carouselExampleDark"
        class="carousel carousel-dark slide ancho"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          style={{ borderRadius: "10px", border: "1px solid #999999" }}
          class="carousel-inner"
        >
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        class="container"
        style={{
          width: "600px",
          margin: "0px auto",
          position: "relative",
          right: "-300px",
          bottom:"60px"
        }}
      >
        <h3
          style={{
            position: "absolute",
            
          }}
        >
          Bienvenidos a Pasadías
        </h3>

        <p
          style={{
            textAlign: "left",
            color:"#4D4D4D"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
          sapien quam. Ut quam nisi, tempor in tincidunt quis, porta et enim. Ut
          iaculis orci at augue ultrices, in pellentesque est convallis. Nullam
          tortor elit, facilisis sit amet placerat non, congue ut nibh. In sit
          amet dui a mauris vestibulum eleifend sit amet quis urna. Praesent
          pellentesque turpis felis, eget porttitor augue pulvinar ac. Proin
          tristique commodo neque, non auctor nibh auctor et. Cras fermentum
          aliquet dignissim. Morbi tempor velit nisl, sit amet rhoncus orci
          tristique ac. Pellentesque rutrum leo sit amet lacus varius, id
          commodo arcu feugiat. Phasellus pretium at elit semper imperdiet.
        </p>
      </div>
    </div>
  );
};

export default Home;
