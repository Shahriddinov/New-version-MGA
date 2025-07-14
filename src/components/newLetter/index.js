import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../reduxToolkit/messageSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NewLetter() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    dispatch(sendEmail({ email }))
      .unwrap()
      .then(() => {
        toast.success("Successfully subscribed!");
        setEmail("");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="newLetter">
      <div className="container">
        <div className="newLetter__inners fadeInUp animated">
          <div className="newLetter__inners_shapes1"></div>
          <div className="newLetter__inners_lefts">
            <div className="newLetter__inners_lefts_title-new">
              Join Our Newsletter
            </div>
          </div>
          <div className="newLetter__inners_rights">
            <form
              className="newLetter__inners_rights_forms"
              onSubmit={handleSubmit}
            >
              <div className="newLetter__inners_rights_forms_input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newLetter__inners_rights_forms_input-box_input"
                  required
                />
                <button
                  type="submit"
                  className="newLetter__inners_rights_forms_input-box_button"
                >
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
