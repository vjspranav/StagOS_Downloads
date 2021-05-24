import React from "react";
//import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "&:before": {
      height: 0,
    },
    marginBottom: "15px",
    borderRadius: "20px",
    border: "2px solid rgba(0,0,0,0.14)",
    boxShadow: "0 0 0.5px 0.5px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  gridroot: {
    flexGrow: 1,
  },
  link: {
    color: "rgb(66, 133, 244)",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(66, 133, 244, 0.6)",
    },
  },
}));

export default function StagAccordionnpm(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [downloads, setDownloads] = useState("loading");
  const [date, setDate] = useState("loading");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let name = props.name;
  let codename = props.codename;
  let device = props.device;
  let download_url = props.url;
  console.log(download_url);
  let dlnum_url = "https://api.stag-os.org/downloads/stats/" + codename;
  let temp_url = "https://releases.stag-os.workers.dev/" + codename;
  //let pris_url = "https://api.stag-os.org/downloads/" + codename;
  //let fl_url = "https://api.stag-os.org/downloads/getFile/name/" + codename;
  axios.get(dlnum_url).then((res) => {
    let data = res.data;
    setDownloads(data.downloads);
    let epoch_date = data.date;
    if (epoch_date) {
      let date = new Date(epoch_date * 1000);
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let fullDate = day + "-" + (month + 1) + "-" + year;
      setDate(fullDate);
    } else {
      setDate("NA");
    }
  });
  // axios.get(fl_url).then((res) => {
  //   let data = res.data;
  //   console.log(data);
  //   let name = data.gapps.split("-")[5];
  //   let year = name.substring(0, 4);
  //   let month = name.substring(4, 6);
  //   let day = name.substring(6);
  //   let temp_date = day + "-" + month + "-" + year;
  //setDate("00-00-00");
  // });
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={classes.root}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div className={classes.heading}>
          <strong>{device}</strong> ({codename})
          <div style={{ color: "rgba(144, 148, 151, 0.8)", fontWeight: "600" }}>
            {name}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.gridroot}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <div
                style={{
                  color: "#4285f4",
                  fontWeight: "600",
                  textAlignLast: "left",
                  paddingLeft: "10%",
                }}
              >
                <a className={classes.link} href={temp_url}>
                  Download
                </a>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  color: "#4285f4",
                  fontWeight: "600",
                  paddingLeft: "10%",
                  paddingRight: "20%",
                  textAlignLast: "center",
                }}
              >
                <a
                  className={classes.link}
                  href="https://raw.githubusercontent.com/StagOS-Devices/OTA/r11/changelog.txt"
                >
                  Changelog
                </a>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ textAlignLast: "right", paddingRight: "10%" }}>
                <strong>Build Date</strong>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  color: "rgba(144, 148, 151, 0.8)",
                  fontWeight: "600",
                  textAlignLast: "left",
                  paddingLeft: "18%",
                }}
              >
                {downloads}
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  color: "rgba(144, 148, 151, 0.8)",
                  fontWeight: "600",
                  paddingRight: "10%",
                  textAlignLast: "center",
                }}
              >
                View
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  color: "rgba(144, 148, 151, 0.8)",
                  fontWeight: "600",
                  float: "right",
                  paddingRight: "11%",
                }}
              >
                {date}
              </div>
            </Grid>
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
