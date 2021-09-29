import { createSlice } from "@reduxjs/toolkit";
import { conversation } from "../../Assets/conversation";
import { users } from "../../Assets/users";

export const chatSlice = createSlice({
  name: "messaging",
  initialState: {
    chats: conversation,
    users: users,
  },
  reducers: {
    getConversation: (state, action) => {
        state.chats;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getConversation } = chatSlice.actions;

export default chatSlice.reducer;
