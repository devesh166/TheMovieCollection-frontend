import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <div>
      <footer
        class="page-footer font-small "
        //   style={{ backgroundColor: "secondary" }}
      >
        {/* <!-- Copyright --> */}
        <div
          class="footer-copyright text-center py-3"
          style={{ backgroundColor: "#e30047" }}
        >
          © 2019 Copyright: TheMovieCollection.com
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default Footer;
