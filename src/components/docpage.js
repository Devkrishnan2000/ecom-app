import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/doc.css";

class Docpage extends Component {
  render() {
    return (
      <div className="docpage-div">
        <h1 className="heading">iPhone 12 Battery Replacement</h1>
        <div className="info-tab">
          <div className="info-detail">
            <img src="images\svg\difficulty.svg"></img>
            <h4>difficulty: moderate</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\timer.svg"></img>
            <h4>Time Required: 1-2 hours</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\clipboard.svg"></img>
            <h4>Time Required: 1-2 hours</h4>
          </div>
        </div>

        <div className="content">
          <h2>Introduction</h2>
          <p style={{ marginTop: 20 + "px" }}>
            Phone batteries are rated to hold 80% of their capacity for up to
            500 charge cycles, which lasts roughly 18-24 months for most users.
            After that, your iPhone may need to be charged far more frequently,
            and iOS may warn you that performance is affected (in other words,
            your phone will run slower). Use this guide to replace your battery
            and restore your iPhone to like-new performance. If your battery is
            swollen, take appropriate precautions. Note: After the repair, your
            iPhone may display a warning about the “genuineness” of the battery,
            even when using original Apple parts. If your iPhone functions
            normally, you can safely ignore the warning. For optimal
            performance, after completing this guide, calibrate your newly
            installed battery: Charge it to 100% and keep charging it for at
            least two more hours. Then use your iPhone until it shuts off due to
            low battery. Finally, charge it uninterrupted to 100%
          </p>

          <div className="step">
            <h2>STEP 1: Eject the SIM card tray</h2>
            <div>
              <img src="images\documentation\iphone 12\Battery\s1.png"></img>
            <h5>
              Insert a SIM card eject tool or a paperclip into the small hole in
              the SIM card tray, located on the volume button edge of the
              iPhone. Press firmly to eject the tray.
            </h5>
            </div>
           
          </div>
          <div className="step">
            <h2>STEP 2: Eject the SIM card tray</h2>
            <div>
              <img src="images\documentation\iphone 12\Battery\s1.png"></img>
            <h5>
              Insert a SIM card eject tool or a paperclip into the small hole in
              the SIM card tray, located on the volume button edge of the
              iPhone. Press firmly to eject the tray.
            </h5>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Docpage);
