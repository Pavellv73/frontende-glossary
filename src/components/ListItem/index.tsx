import { ListItemText, ListItemButton, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

import type { ListItemType } from "./types/ListItemType";

export const ListItem = ({ data }: ListItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = data;

  return (
    <>
      <ListItemButton onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={question} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {answer}
      </Collapse>
    </>
  );
};
