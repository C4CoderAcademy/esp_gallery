import React, { Component } from "react";
import "../components/admin/admin.css";

import Footer from "./Footer";
import axios from "axios";

// Cloudinary
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxmelc0e6/upload";
const CLOUDINARY_UPLOAD_PRESET = "espgallery";

// let imgPreview = document.getElementById("img-preview");
// let fileUpload = document.getElementById("file-upload");

// // Middleware
// app.engine("html", mustacheExpress());
// app.set("view engine", "mustache");
// app.use("/public", express.static("public"));

// // Routes
// app.get("/src/components/admin", function(req, res) {
//   res.render("image.html");
// });

// app.listen(1337, function() {
//   console.log("Running on port 1337");
// });

export default class Dashboard extends Component {
  // fileUpload = document.getElementById("file-upload");
  handleUpload(e) {
    let imgPreview = document.getElementById("img-preview");
    // fileUpload.addEventListener("change", function(event) {
    // console.log(e, Object.keys(e));
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData,
      skipAuthorization: true
    })
      // axios.post(CLOUDINARY_URL, formData)
      .then(function(res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="PageHeader">Admin Dashboard</h2>

        <div className="card">
          <img
            src="https://sydneyartgalleriesandartcommunity.files.wordpress.com/2011/08/espgallery.jpg"
            id="img-preview"
          />
          <label className="file-upload-container" htmlFor="file-upload">
            <input
              onChange={this.handleUpload}
              id="file-upload"
              type="file"
              style={{ display: "none" }}
            />{" "}
            Art Upload
          </label>
        </div>
        <Footer />
      </div>
    );
  }
}
