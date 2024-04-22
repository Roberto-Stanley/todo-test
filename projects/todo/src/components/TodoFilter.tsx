import { Box, Select, MenuItem } from "@mui/material";
import React from "react";
interface IProps {
  filterValue: string;
  onFilterChange: Function;
}
export default function ({ filterValue, onFilterChange }: IProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        marginBottom: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Select
        fullWidth
        value={filterValue}
        onChange={(e) => {
          onFilterChange(e.target.value);
        }}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"completed"}>Completed</MenuItem>
        <MenuItem value={"unCompleted"}>Uncompleted</MenuItem>
      </Select>
    </Box>
  );
}
