import "./App.css";
import StagAccordion from "./components/StagAccordion";
import TextField from "@material-ui/core/TextField";
import { useState, lazy } from "react";

let unordered = require("./data/devices.json");
const config = Object.keys(unordered)
  .sort()
  .reduce((obj, key) => {
    obj[key] = unordered[key];
    return obj;
  }, {});

//console.log(config);

function App() {
  let mainFile = [];
  let searchFile = [];
  let [search, setSearch] = useState("");
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
        value={search}
        onChange={(event) => {
          const { value } = event.target;
          setSearch(value);
          //console.log(value);
        }}
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
              name={config[company][device].maintainer}
              codename={device}
              device={config[company][device].device}
              url={config[company][device].download}
            ></StagAccordion>
          );
        }
      })}
      {search
        ? Object.keys(config).forEach((company) => {
            let un = config[company];
            const or = Object.keys(un)
              .sort()
              .reduce((obj, key) => {
                obj[key] = un[key];
                return obj;
              }, {});
            for (let device in or) {
              if (
                device.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                company.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                config[company][device].device
                  .toLowerCase()
                  .indexOf(search.toLowerCase()) !== -1
              ) {
                searchFile.push(
                  <StagAccordion
                    key={device}
                    name={config[company][device].name}
                    codename={device}
                    device={config[company][device].device}
                  ></StagAccordion>
                );
              }
            }
          })
        : ""}
      {search ? (
        searchFile.length <= 0 ? (
          <h1>No results found</h1>
        ) : (
          searchFile
        )
      ) : (
        mainFile
      )}
      <br />
    </div>
  );
}

export default App;
