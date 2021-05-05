import React from "react";
//import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";

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
}));

export default function StagAccordionnpm(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let name = props.name;
  let codename = props.codename;
  let device = props.device;
  let date = "20-12-11";
  let pdownloads = 1023;
  let gdownloads = 4862;
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
                Pristine
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
                Gapps
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
                  float: "left",
                  paddingLeft: "13%",
                }}
              >
                {pdownloads}
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
                {gdownloads}
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  color: "rgba(144, 148, 151, 0.8)",
                  fontWeight: "600",
                  float: "right",
                  paddingRight: "13%",
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
