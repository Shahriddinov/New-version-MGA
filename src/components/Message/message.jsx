import React, { useEffect, useRef, useState } from 'react';
import "./message.scss";
import { useDispatch, useSelector } from "react-redux";
import { sendFullContact } from "../../reduxToolkit/messageSlice";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import 'react-toastify/dist/ReactToastify.css';
import {resetContact} from "../../reduxToolkit/messageSlice/messageSlice";

const Message = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const formRef = useRef();
    const contact = useSelector((state) => state.sendQuestion.sendFullData);
    const [dataContact, setDataContact] = useState({
        question: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendFullContact(dataContact));
        formRef.current.reset();
    };

    const options = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };

    useEffect(() => {
        if (contact) {
            toast.success(t("sendContact"), options);
            dispatch(resetContact()); // Ensure contact is reset after the toast is shown
        }
    }, [contact, dispatch, t]);

    return (
        <div className="message">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="contact-container container">
                <div className="contact-inner">
                    <h3>{t("have")}</h3>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <input
                            type="text"
                            name="text"
                            placeholder={t("footerName")}
                            onChange={(e) =>
                                setDataContact((prev) => ({
                                    ...prev,
                                    question: e.target.value,
                                }))
                            }
                            required
                        />
                        <button type="submit">{t("send")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Message;
