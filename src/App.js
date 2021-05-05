import "./App.css";
import StagAccordion from "./components/StagAccordion";
import TextField from "@material-ui/core/TextField";

let unordered = require("./data/devices.json");
const config = Object.keys(unordered)
  .sort()
  .reduce((obj, key) => {
    obj[key] = unordered[key];
    return obj;
  }, {});

console.log(config);

function App() {
  let mainFile = [];
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
      {Object.keys(config).forEach((company) => {
        mainFile.push(
          <h1 key={company} style={{ color: "#4285f4" }}>
            {company}
          </h1>
        );
        let un = config[company];
        const or = Object.keys(un)
          .sort()
          .reduce((obj, key) => {
            obj[key] = un[key];
            return obj;
          }, {});
        for (let device in or) {
          mainFile.push(
            <StagAccordion
              key={device}
              name={config[company][device].name}
              codename={device}
              device={config[company][device].device}
            ></StagAccordion>
          );
        }
      })}
      {mainFile}
    </div>
  );
}

export default App;
