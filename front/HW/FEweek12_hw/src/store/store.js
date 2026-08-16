import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { searchBooks } from "../api/books";

const useBookStore = create(
  devtools(
    persist(
      (set) => ({
        results: [],
        isLoading: false,
        error: null,

        search: async (query, langRestrict) => {
          set({ isLoading: true, error: null }, undefined, "book/search/start");
          try {
            const searchedItems = await searchBooks(query, langRestrict);
            set(
              { results: searchedItems, isLoading: false },
              undefined,
              "book/search/success",
            );
          } catch (err) {
            set(
              { error: err.message, isLoading: false },
              undefined,
              "book/search/error",
            );
          }
        },
      }),
      { name: "book-store" },
    ),
    { name: "BookStore" },
  ),
);

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],

        addCart: (book) => {
          if (!book?.id) return;

          set(
            (state) => {
              const existingItem = state.cartItems.find(
                (item) => item.id === book.id,
              );

              if (existingItem) {
                return {
                  cartItems: state.cartItems.map((item) =>
                    item.id === book.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item,
                  ),
                };
              }

              return {
                cartItems: [
                  ...state.cartItems,
                  {
                    id: book.id,
                    book,
                    quantity: 1,
                  },
                ],
              };
            },
            undefined,
            "cart/add",
          );
        },

        removeCart: (id) => {
          set(
            (state) => ({
              cartItems: state.cartItems.filter((item) => item.id !== id),
            }),
            undefined,
            "cart/remove",
          );
        },

        increaseQuantity: (id) => {
          set(
            (state) => ({
              cartItems: state.cartItems.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            }),
            undefined,
            "cart/increase",
          );
        },

        decreaseQuantity: (id) => {
          set(
            (state) => ({
              cartItems: state.cartItems
                .map((item) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
                )
                .filter((item) => item.quantity > 0),
            }),
            undefined,
            "cart/decrease",
          );
        },

        updateQuantity: (id, quantity) => {
          const nextQuantity = Math.max(1, Number(quantity) || 1);

          set(
            (state) => ({
              cartItems: state.cartItems.map((item) =>
                item.id === id ? { ...item, quantity: nextQuantity } : item,
              ),
            }),
            undefined,
            "cart/update",
          );
        },

        clearCart: () => {
          set({ cartItems: [] }, undefined, "cart/clear");
        },

        getTotalQuantity: () => {
          return get().cartItems.reduce((sum, item) => sum + item.quantity, 0);
        },

        getTotalPrice: () => {
          return get().cartItems.reduce((sum, item) => {
            const price = item.book?.saleInfo?.listPrice?.amount ?? 0;
            return sum + price * item.quantity;
          }, 0);
        },
      }),
      { name: "cart-store" },
    ),
    { name: "CartStore" },
  ),
);

export { useBookStore, useCartStore };
