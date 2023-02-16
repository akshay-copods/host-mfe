import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  user: {
    name: null
  },
  isLoggedIn: false,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  login: () => set((state: any) => ({ isLoggedIn: true, user: { name: 'Ajay' } })),
  logout: () => set((state: any) => ({ isLoggedIn: false })),
}));

export default useStore;