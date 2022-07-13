import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  shadows: ["none"],
  padding: "0",

});

export default theme;

/**
<ThemeProvider theme={theme}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="score-table__tr">
                      <div className="score-table__td-check">
                        <input id="student-name" type="checkbox" />
                      </div>
                      <div className="score-table__td-name">Nicole Kidman</div>
                      <div className="score-table__td-id">7512552212</div>
                      <div className="score-table__td-class">1D</div>
                      <div className="score-table__td-av-score">76%</div>
                      <div className="score-table__td-av-speed">
                        Below Expected
                      </div>
                      <div className="score-table__td-av-parents">
                        Antony Kidman, Jesica Alba-Gabriella
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="score-table__tr score-table__tr--inner">
                      <div className="score-table__td-check">
                        <input id="student-name" type="checkbox" />
                      </div>
                      <div className="score-table__td-name">Nicole Kidman</div>
                      <div className="score-table__td-id">7512552212</div>
                      <div className="score-table__td-class">1D</div>
                      <div className="score-table__td-av-score">76%</div>
                      <div className="score-table__td-av-speed">
                        Below Expected
                      </div>
                      <div className="score-table__td-av-parents">
                        Antony Kidman, Jesica Alba-Gabriella
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </ThemeProvider>
*/
