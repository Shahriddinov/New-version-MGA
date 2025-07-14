import { configureStore } from "@reduxjs/toolkit";
import language from "./languageSlice";
import servicesSlider from "./servesSlice/servicesSlider";
import partnerSlice from "./partnerSlice/partnerSlice";
import  sendQuestion from "./messageSlice/messageSlice";
import gallerySlice from "./gallerySlice/gallerySlice";
const store = configureStore({
    reducer: {
        language,
        servicesSlider,
        partnerSlice,
        sendQuestion,
       
        gallerySlice,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
