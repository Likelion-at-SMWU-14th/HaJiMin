import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { searchBooks } from "../api/books";

const useBookStore = create(
  devtools(
    persist((set) => ({
      results: [],
      isLoading: false,
      error: null,

      search: async (query, langRestrict) => {
        set({ isLoading: true, error: null });
        try {
          const searchedItems = await searchBooks(query, langRestrict);
          set({ results: searchedItems, isLoading: false });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
    })),
  ),
);

export default useBookStore;
