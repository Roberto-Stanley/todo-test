import { Box, Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import { useTodos } from "../hooks/useTodos";
import { Formik } from "formik";
import { ITodoItem } from "../types/TodoType";
import { object, string } from "yup";

const initialValues = (): ITodoItem => {
  return {
    title: "",
    description: "",
    completed: false,
  };
};

const getSchema = () => {
  return {
    title: string().required(),
    description: string(),
  };
};

export default function TodoForm() {
  const { addTodo } = useTodos();
  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={object(getSchema())}
      onSubmit={(values: ITodoItem, { resetForm }) => {
        addTodo(values);
        resetForm();
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box
            mt={4}
            mb={8}
            display={"flex"}
            flexDirection={"row"}
            gap={".5rem"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <TextField
              error={!!errors.title}
              helperText={errors.title}
              value={values.title}
              name="title"
              onChange={handleChange}
              placeholder="Title"
              size="small"
              variant="filled"
            ></TextField>
            <TextField
              error={!!errors.description}
              helperText={errors.description}
              value={values.description}
              name="description"
              onChange={handleChange}
              placeholder="Description"
              size="small"
              variant="filled"
            ></TextField>
            <Button type="submit">add todo list</Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
