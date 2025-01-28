import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MyProfile {
  id: string;
  username: string;
  image?: string | null;
}
interface MyProfileStore {
  profile: MyProfile | null;
  setProfile: (profile: Partial<MyProfile> | null) => void;
}
export const useMyProfileStore = create<MyProfileStore>()(
  persist(
    (set, get) => ({
      profile: null,
      setProfile: (profile) =>
        set({
          profile: { ...get().profile, ...profile },
        }),
    }),
    {
      name: "last-leg-user-profile",
    },
  ),
);
