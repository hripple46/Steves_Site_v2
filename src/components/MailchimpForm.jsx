// MailchimpForm.js
import React from "react";

const MailchimpForm = () => {
  return (
    <div id="mc_embed_signup" className="bg-white p-4 w-full max-w-lg mx-auto">
      <form
        action="https://gmail.us14.list-manage.com/subscribe/post?u=734e793175af9fa2f10e3f33f&amp;id=20b8d3fd05&amp;f_id=00f295e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2 className="text-xl font-bold mb-4">Subscribe</h2>
          <div className="indicates-required text-sm mb-2">
            <span className="asterisk text-red-500">*</span> indicates required
          </div>
          <div className="mc-field-group mb-4">
            <label htmlFor="mce-FNAME" className="block mb-1">
              First Name{" "}
            </label>
            <input
              type="text"
              name="FNAME"
              className="input text border p-2 w-full"
              id="mce-FNAME"
            />
          </div>
          <div className="mc-field-group mb-4">
            <label htmlFor="mce-LNAME" className="block mb-1">
              Last Name{" "}
            </label>
            <input
              type="text"
              name="LNAME"
              className="input text border p-2 w-full"
              id="mce-LNAME"
            />
          </div>
          <div className="mc-field-group mb-4">
            <label htmlFor="mce-EMAIL" className="block mb-1">
              Email Address <span className="asterisk text-red-500">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email input border p-2 w-full"
              id="mce-EMAIL"
              required
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response hidden" id="mce-error-response"></div>
            <div className="response hidden" id="mce-success-response"></div>
          </div>
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_734e793175af9fa2f10e3f33f_20b8d3fd05"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button bg-blue-500 text-white p-2 rounded"
                value="Subscribe"
              />
              <p className="mt-4 text-center">
                <a
                  href="http://eepurl.com/iSEdC2"
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <img
                    className="refferal_badge mx-auto"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    style={{ width: "220px", height: "40px" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function($) {
            window.fnames = new Array(); 
            window.ftypes = new Array();
            fnames[1] = 'FNAME'; 
            ftypes[1] = 'text'; 
            fnames[2] = 'LNAME'; 
            ftypes[2] = 'text'; 
            fnames[0] = 'EMAIL'; 
            ftypes[0] = 'email';
            fnames[3] = 'ADDRESS'; 
            ftypes[3] = 'address'; 
            fnames[4] = 'PHONE'; 
            ftypes[4] = 'phone'; 
            fnames[5] = 'BIRTHDAY'; 
            ftypes[5] = 'birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);`,
        }}
      />
    </div>
  );
};

export default MailchimpForm;
