import { create } from "zustand";

type AuthStore = {
  isAuthenticated: boolean;
  userEmail: string;
  userPassword: string;
  onLogin: () => void;
  onLogout: () => void;
}
export const useStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  userEmail: "" || "admin@gmail.com",
  userPassword: "" || "Admin333",
  onLogin: () => set(() => ({ isAuthenticated: true })),
  onLogout: () => set(() => ({ isAuthenticated: false }))
}));


type UserInfoStore = {
  userData: { [key: string]: any }
  setUserData: (data: { [key: string]: any }) => void;
}

export const useUserStore = create<UserInfoStore>((set) => ({
  userData: {},
  setUserData: (data) => set({ data })
}));



