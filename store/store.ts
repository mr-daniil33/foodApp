import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice"
import { saveState } from "./storage";

export const store = configureStore(
    {
        reducer: {
            user: userSlice
        }
    }
)

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, 'jwt');
	
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
