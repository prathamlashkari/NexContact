import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  id: "",
  name: "",
  email: "",
  about: "",
  password: "",
  phoneNumber: "",
  profilePic: null,
  roles: [],
  enable: false,
  emailVerified: false,
  phoneVerified: false,
  provider: "",
  providerUserid: null,
  contacts: [],
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState: initialUser,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logOut: () => initialUser,
  },
});

export const { setUser, logOut } = userReducer.actions;

export default userReducer.reducer;
