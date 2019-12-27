import ReactDOM from "react-dom";
import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
// import "index.css";

function App() {
  const testSchema = Yup.object().shape({
    name: Yup.string().required("Enter Name"),
    year: Yup.string().required("Select Year")
  });

  const initialValues = {
    name: "",
    year: ""
  };
  const yearOptions = [
    { value: "1960", label: "1960" },
    { value: "1961", label: "1961" },
    { value: "1962", label: "1962" },
    { value: "1963", label: "1963" },
    { value: "1964", label: "1964" },
    { value: "1965", label: "1965" }
  ];

  return (
      <Formik validationSchema={testSchema} initialValues={initialValues}>
        {props => {
          const { handleChange, values, errors, handleSubmit } = props;
          return (
              <>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <TextField
                        label="Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange("name")}
                        style={{ width: "100%", zIndex: 0 }}
                        value={values.name}
                        onBlur={() => {
                          console.log("name");
                        }}
                    />
                    {errors.name}
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Select
                        placeholder="Year"
                        value={props.values.year}
                        onChange={selectedOption => {
                          // This inline function can now completely be replaced by handleChange("year")
                          handleChange("year")(selectedOption);
                        }}
                        isSearchable={true}
                        options={yearOptions}
                        name="year"
                        isLoading={false}
                        loadingMessage={() => "Fetching year"}
                        noOptionsMessage={() => "Year appears here"}
                    />
                    {errors.year}
                  </Grid>
                  <Grid
                      item
                      md={4}
                      style={{ marginTop: "24px", marginBottom: "10px" }}
                      xs={12}
                  >
                    <Button onClick={handleSubmit}>Save</Button>
                  </Grid>
                  <pre>{JSON.stringify(props, null, 2)}</pre>
                </Grid>
              </>
          );
        }}
      </Formik>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;