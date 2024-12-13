"use client";

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function Odhlasenie() {
  const [openDialog, setOpenDialog] = useState(false);

  // Handle opening the confirmation dialog
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  // Handle closing the confirmation dialog
  const handleClose = () => {
    setOpenDialog(false);
  };

  // Handle confirming the sign-out action
  const handleSignOut = () => {
    signOut();
    setOpenDialog(false); // Close the dialog after signing out
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Odhlasenie</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Odhlásiť
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Naozaj sa chcete odhlásiť?</DialogTitle>
        <DialogContent>
          <p>Ak sa odhlásite, stratíte prístup k svojim chráneným údajom.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Zrušiť
          </Button>
          <Button onClick={handleSignOut} color="secondary">
            Odhlásiť
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
