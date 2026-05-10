import { useAuth } from "@clerk/expo";
import { Redirect, Slot } from "expo-router";
import React from "react";

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

//   sync clerk user -> Supabase (we'll build this later)

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in" />;
  return <Slot />;
}
