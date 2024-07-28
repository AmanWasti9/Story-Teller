import React from "react";
import LinkedIn from '../Images/linkedin.png';

export default function Footer() {
  return (
    <div id="contact">
      <hr />
      <br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="Footer__1_list">
          <ul className="list-none margin-0 padding-0 flex-row gap-30" style={{
            listStyle: "none",
            margin: "0",
            padding: '0',
            display: 'flex',
            flexDirection: 'row',
            gap: '50px'
          }}>
            <li>
              <a
                title="LinkedIn"
                target="_blank"
                href="https://www.linkedin.com/in/aman-wasti/"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  width="30"
                  height="30"
                  src={LinkedIn}
                  className="transition-all-0-4s"
                />
              </a>
            </li>
            <li>
              <a
                title="LinkedIn"
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-bashaar-200197225/"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  width="30"
                  height="30"
                  src={LinkedIn}
                  className="transition-all-0-4s"
                />
              </a>
            </li>
            <li>
              <a
                title="LinkedIn"
                target="_blank"
                href="https://www.linkedin.com/in/mirza-asfandyar-baig-44abb6218/"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  width="30"
                  height="30"
                  src={LinkedIn}
                  className="transition-all-0-4s"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px' }}>
        <span style={{textAlign: 'center'}}>
        Made by Team A^3
        </span>
        <br />
        amawasti5@gmail.com | mirzasfand04@gmail.com | ahmedbashaar974@gmail.com
      </div>
    </div>
  );
}
