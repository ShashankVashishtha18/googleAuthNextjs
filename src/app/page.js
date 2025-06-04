"use client";

import { useState } from "react";
import { Button, Container, Typography, Avatar, Box, Grow } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setShowWelcome(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 10,
        textAlign: "center",
        p: 4,
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: "#fafafa",
      }}
    >
      <Typography variant="h3" gutterBottom color="primary">
        Hello can you please Sign-In!
      </Typography>

      {!user ? (
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={handleLogin}
          sx={{ mt: 5, px: 5, py: 1.5, fontWeight: "bold" }}
        >
          Sign in with Google
        </Button>
      ) : (
        <Grow in={showWelcome}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Hello, {user.displayName}!
            </Typography>
            <Avatar
              src={user.photoURL}
              alt={user.displayName}
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
                border: "3px solid",
                borderColor: "primary.main",
              }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              You have successfully signed in.
            </Typography>
          </Box>
        </Grow>
      )}
    </Container>
  );
}
