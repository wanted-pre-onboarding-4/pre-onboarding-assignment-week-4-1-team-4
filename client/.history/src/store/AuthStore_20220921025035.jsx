import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { login } from '../services/auth';

const authStore = create()(
  devtools(
    persist(
      set => ({
        token: null,
        onLogin: async (email, password) => {
          const res = await login(email, password);
          set({ token: res.data.accessToken });
        },
        onLogout: () => set({ token: null }),
      }),
      { name: 'token' }
    )
  )
);

export default authStore;
