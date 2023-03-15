import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="row gy-5">
            <div class="col-md-4">
              <h3><a href="#" class="text-white">Vanessa D'Antonio</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam accusantium vero sunt!</p>
              <ul class="navbar-nav flex-row">
                <li class="nav-item">
                  <a class="social-icon" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li class="nav-item">
                  <a class="social-icon" href="#"><i class="fa-brands fa-github-alt"></i></a>
                </li>
                <li class="nav-item">
                  <a class="social-icon" href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li class="nav-item">
                  <a class="social-icon" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li class="nav-item">
                  <a class="social-icon" href="#"><i class="fa-brands fa-twitter"></i></a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Contact</h3>
              <ul>
                <li>Email: yumin.dantonio@gmail.com</li>
                <li>Phone: +44 7888075859</li>
                <li>Address: York, England</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row justify-content-center">
            <p class="mb-0">© Vanessa D'Antonio 2023. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;