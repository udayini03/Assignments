"use client";

import { create } from "zustand";
import usersJson from "../database/users.json";
import type { User } from "../account/AccountContext";

type UsersStore = {
  users: User[];
  addUser: (user: User) => void;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: usersJson,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));
