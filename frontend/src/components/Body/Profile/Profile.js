import React, { useState } from 'react';

//Components
import Typing from './Typing';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  chart: {
    width: '100%'
  },
}));

const panels = [
  {
    'id': 'typing',
    'heading': 'Typing Stats',
    'secondaryHeading': 'view your typing stats',
  },
  {
    'id': 'reaction',
    'heading': 'Reaction Stats',
    'secondaryHeading': 'view your reaction stats',
  },
]

const Profile = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className={classes.root}>
        {panels.map((panel) => (
          <Accordion key={panel.id} expanded={expanded === panel.id} onChange={handleChange(panel.id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panel.id}-content`}
              id={`${panel.id}-header`}
            >
              <Typography className={classes.heading}>{panel.heading}</Typography>
              <Typography className={classes.secondaryHeading}>{panel.secondaryHeading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {<Typing />}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  )
}

export default Profile;
