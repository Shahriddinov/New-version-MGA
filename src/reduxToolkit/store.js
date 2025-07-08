import { configureStore } from "@reduxjs/toolkit";
import language from "./languageSlice";
import sliderSlice from "./sliderSlice/sliderSlice"
import aboutSlice from "./aboutSlice/aboutSlice";
import servesSlice from "./servesSlice/servesSlice";
import youTubeSlice from "./youTubeSlice/youTubeSlice";
import partnerSlice from "./partnerSlice/partnerSlice";
import  sendQuestion from "./messageSlice/messageSlice";
import socialSlice from "./socialSlice/socialSlice";
import gallerySlice from "./gallerySlice/gallerySlice";
import contactSlice from "./contactSlice/contactSlice";
const store = configureStore({
    reducer: {
        language,
        sliderSlice,
        aboutSlice,
        servesSlice,
        youTubeSlice,
        partnerSlice,
        sendQuestion,
        socialSlice,
        gallerySlice,
        contactSlice


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
