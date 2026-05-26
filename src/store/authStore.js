
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  token: null,
  user: null,

  setToken: (token) => set({ token }),
  setUser:  (user)  => set({ user }),

  login: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
}))