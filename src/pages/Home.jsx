/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="w-100 h-100 custom-bg-banner-1 custom-border-banner"></div>
          </div>
          <div className="col-md-8 mx-auto">
            <img
              src={require("../images/banner.png")}
              alt="banner"
              className="w-100"
            />
          </div>
          <div className="col-md-2">
            <div className="w-100 h-100 custom-bg-banner-2 custom-border-banner"></div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-4">
        <h6 className="text-dark font-weight-bold">Telurusi Kategori</h6>

        <div className="row">
          <div className="col-md-2">
            <div className="inner-addon left-addon w-75 custom-button-auth custom-border-button custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Semua
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2">
          <div className="inner-addon left-addon w-75 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Hobi
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2">
          <div className="inner-addon left-addon w-75 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Kendaraan
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2">
          <div className="inner-addon left-addon w-75 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Baju
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2">
          <div className="inner-addon left-addon w-75 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Elektronik
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-2">
          <div className="inner-addon left-addon w-75 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Kesehatan
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_1.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <img
                  src={require("../images/jam_midlle_2.png")}
                  className="card-img-top"
                  alt="jam"
                />
                <div className="card-body">
                  <p className="card-text text-dark custom-font-1">
                    Jam tangan Casion
                  </p>
                  <p className="text-muted custom-font-5">Aksesoris</p>
                  <p className="text-dark custom-font-1">Rp 250.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}