import React from "react";
import { ListItem, Checkbox, ListItemText, IconButton } from "@mui/material";
import { ITodoItem } from "../types/TodoType";
import { Delete } from "@mui/icons-material";
interface IProps {
  item: ITodoItem;
  onToggle?: Function;
  onDelete?: Function;
}

export default function TodoItem({ item, onToggle, onDelete }: IProps) {
  return (
    <ListItem
      secondaryAction={
        <div style={{ display: "flex", gap: ".25rem" }}>
          <Checkbox
            checked={item.completed}
            onChange={() => {
              if (!onToggle) return null;
              onToggle({ ...item, completed: !item.completed });
            }}
          />
          {onDelete && (
            <IconButton
              size="small"
              onClick={() => {
                onDelete(item);
              }}
            >
              <Delete />
            </IconButton>
          )}
        </div>
      }
    >
      <ListItemText
        primary={item.title}
        secondary={item.description}
      ></ListItemText>
    </ListItem>
  );
}
