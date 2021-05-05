import React from "react";
//import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
        <Typography className={classes.heading}>
          <strong>{device}</strong>

          <div style={{ color: "rgba(144, 148, 151, 0.8)", fontWeight: "600" }}>
            {name}
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Download for your device {codename}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
