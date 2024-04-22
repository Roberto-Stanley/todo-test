import React from "react";
import { List } from "@mui/material";

export default function TodoList({ children }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 375,
        bgcolor: "#efefef",
        marginLeft: "auto",
        marginRight: "auto",
        maxHeight: 500,
        overflowY: "auto",
      }}
    >
      {children}
    </List>
  );
}
