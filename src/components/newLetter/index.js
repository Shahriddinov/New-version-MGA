import React from "react";
import "./style.scss";
export default function NewLetter() {
  return (
    <div className="newLetter">
      <div className="container">
        <div className="newLetter__inners fadeInUp animated ">
          <div className="newLetter__inners_shapes1"></div>
          <div className="newLetter__inners_lefts">
            <div className="newLetter__inners_lefts_title-new">
              Join Our Newsletter
            </div>
          </div>
          <div className="newLetter__inners_rights">
            <form className="newLetter__inners_rights_forms">
              <div className="newLetter__inners_rights_forms_input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newLetter__inners_rights_forms_input-box_input"
                />
                <button type="submit" className="newLetter__inners_rights_forms_input-box_button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
