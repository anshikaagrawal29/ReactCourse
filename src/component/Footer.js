import React from "react";
import logo from './Images/image2.jpeg'

export default function Footer() {

    console.log(logo);
  return (
    <div>
      <footer className="page-footer font-small mdb-color lighten-3 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src={logo}
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).webp"
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).webp"
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-12 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).webp"
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className="view overlay z-depth-1-half">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).webp"
                  className="img-fluid"
                  alt=""
                />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          Owner:
          <a href="/"> Anshika Agrawal Mayank</a>
        </div>
      </footer>
    </div>
  );
}
