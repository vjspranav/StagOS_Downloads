import "./App.css";
import StagAccordion from "./components/StagAccordion";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div
      style={{
        position: "center",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "10%",
      }}
    >
      <TextField
        id="standard-full-width"
        label="Search"
        style={{ margin: 8 }}
        placeholder="Search for Devices"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <h1 style={{ color: "#4285f4" }}>OnePlus</h1>
      <StagAccordion
        name="vjspranav"
        codename="enchilada"
        device="OnePlus 6"
      ></StagAccordion>
      <StagAccordion
        name="lolapola"
        codename="dumpling"
        device="OnePlus 5T"
      ></StagAccordion>
      <StagAccordion
        name="lolapola"
        codename="dumpling"
        device="OnePlus 5"
      ></StagAccordion>
      <h1 style={{ color: "#4285f4" }}>YU</h1>
      <StagAccordion
        name="vjspranav"
        codename="garlic"
        device="Yu Yureka Black"
      ></StagAccordion>
      <h1 style={{ color: "#4285f4" }}>Misc</h1>
      <StagAccordion
        name="maintainer"
        codename="devicex"
        device="Device Device"
      ></StagAccordion>
    </div>
  );
}

export default App;
