import { create } from "zustand";

type Ecommerce = {
  chatBoxOpen: boolean;
  toggleChatBoxOpen: () => void;
};

export const useEcommerceStore = create<Ecommerce>((set) => ({
  chatBoxOpen: false,
  toggleChatBoxOpen: () =>
    set((state) => ({ chatBoxOpen: !state.chatBoxOpen })),
}));
