import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div>
      <h3>Social Follow</h3>
        <a
            href="https://www.facebook.com/elmiabdirahman.elmi"
            className="facebook social"
        >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
            href="https://github.com/elmiabdirahman"
            className="githup social"
        >
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
            href="https://www.linkedin.com/in/elmi-elmi-07182b186/"
            className="linkedin social"
        >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
    </div>
  );
}