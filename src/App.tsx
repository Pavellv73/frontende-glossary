import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Backdrop,
  CircularProgress,
  List,
  Box,
  Modal,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SelectChangeEvent } from "@mui/material/Select";
import { Footer, Header } from "./components";
import { ListItem } from "./components/ListItem";

import { useEffect, useState } from "react";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const store = useSelector((state: RootState) => state.data);
  // const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <>
            {store.data.map((item) => {
              return (
                <Accordion key={item.categoryId}>
                  <AccordionSummary>
                    <Typography variant="h5" component="h2">
                      {item.categoryTitle}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {item.questions.map((question) => {
                        return <ListItem data={question} key={question.id} />;
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </>
        )}
      </Container>
      <Footer />

      <AddCircleOutlineIcon
        onClick={handleOpen}
        className="add-button"
        fontSize="large"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить...
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {true && (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
            {true && (
              <>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </>
            )}
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
