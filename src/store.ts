import { create } from "zustand";
import { MMKVLoader } from "react-native-mmkv-storage";

type AuthStore = {
  isAuthenticated: boolean;
  userEmail: string;
  userPassword: string;
  onLogin: () => void;
  onLogout: () => void;
}
type IUserState = Record<string, any> | string
type UserInfoStore = {
  setUserData: (key: string, value: IUserState) => void | Promise<void> | Promise<unknown>;
  getUserData: (key: string) => string | null | Promise<string | null>
}
export const commonStorage = new MMKVLoader().withInstanceID("common-storage").initialize();

export const useStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  userEmail: "admin@gmail.com",
  userPassword: "Admin333",
  onLogin: () => set(() => ({ isAuthenticated: true })),
  onLogout: () => set(() => ({ isAuthenticated: false }))
}));

export const useUserStore = create<UserInfoStore>((set) => ({
  setUserData: (key, data) => {
    return commonStorage.setItem(key, JSON.stringify(data));
  },
  getUserData: (key) => {
    const resultData = commonStorage.getString(key);
    return resultData ?? null;
  }
}));



