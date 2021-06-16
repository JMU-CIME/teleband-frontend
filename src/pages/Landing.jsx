import React from 'react'
import { Typography, Paper, Grid } from '@material-ui/core/'

function Landing () {
    return(
        <>
            <>
                <Paper style={{padding:"2em", marginTop:"3em", textAlign:'center'}}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h1">Welcome to TeleBand!</Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography display="inline" variant="h2">Click </Typography>
                            <Link style={{color: "#ac3b61"}} to="/login">
                                <Typography display="inline" variant="h2">here</Typography>
                            </Link>
                            <Typography display="inline" variant="h2"> to login.</Typography>
                        </Grid> */}
                    </Grid>
                </Paper>
            </>
            <>
                <Paper style={{padding:"2em", marginTop:"3em"}}>
                    <p>
                        TeleBand is a free web-based platform to promote standards-based instrumental music education.
                        TeleBand aligns with four artistic processes found in <a href="https://nafme.org/my-classroom/standards/" title="" target="_blank" rel="noopener noreferrer"> National Standards for Music Education</a>: create, perform, respond, and connect and their manifestations in state standards for instrumental music education (e.g., New York’s <a href="http://www.nysed.gov/curriculum-instruction/arts-standards-implementation-resources" title=""target="_blank" rel="noopener noreferrer">Arts Learning Standards</a>, Virginia’s <a href="https://www.doe.virginia.gov/testing/sol/standards_docs/fine_arts/2020/2020fasol-music.pdf" target="_blank" rel="noopener noreferrer">Music Standards of Learning</a>).
                    </p>
                    <p>
                        We provide teachers with research-based and standards-aligned tools for facilitating and assessing individual students’ music learning.
                        These tools connect with established repertoire on state music education association lists, as well as newly commissioned repertoire that highlights underrepresented musics and composers.
                    </p>
                    <p>
                        TeleBand is housed at James Madison University, in a collaboration between the <a href="https://www.jmu.edu/cise/cs/">Department of Computer Science</a> and the  <a href="https://www.jmu.edu/cime/">Center for Inclusive Music Engagement</a>.
                        Development has been supported by grants from <a href="https://rochester.edu">University of Rochester</a>'s <a href=" https://www.esm.rochester.edu/">Eastman School of Music</a> and <a href="https://www.jmu.edu/">James Madison University</a>'s <a href="https://www.jmu.edu/arts/">College of Visual and Performing Arts</a>.
                    </p>
                    <p>
                        If you're interested in trying TeleBand, or have a question for the team, don't hesitate to drop us a line at <a href="mailto:feedback@tele.band">feedback@tele.band</a>.
                    </p>
                </Paper>
            </>
            <>
                <Paper style={{padding:"2em", marginTop:"3em"}}>
                    <h2>Collaborators</h2>
                    <ul>
                        <li>Michael C. Stewart, Ph.D. (Assistant Professor of Computer Science, James Madison University)</li>
                        <li>David A. Stringham, Ph.D. (Professor of Music; Director, Center for Inclusive Music Engagement, James Madison University)</li>
                        <li>Lisa R. Caravan, DMA (Assistant Professor, Department of Music Teaching and Learning, Eastman School of Music, University of Rochester)</li>
                        <li>Thomas Hassett (Undergraduate Student, School of Music; Innovation Leader, Center for Inclusive Music Engagement, James Madison University)</li>
                        <li>Heidi Lucas, DMA (Visiting Assistant Professor of Brass and Music Education, University of Delaware)</li>
                        <li>Brandon McKean (Systems Administrator, Department of Computer Science, James Madison University)</li>
                        <li>Liem Nguyen (Undergraduate Student, James Madison University)</li>
                        <li>Isaiah Ortiz (Undergraduate Student, James Madison University)</li>
                        <li>Alden H. Snell, II, Ph.D. (Associate Professor, Department of Music Teaching and Learning, Eastman School of Music, University of Rochester)</li>
                        <li>Pawe&#322; W. Wo&#378;niak (Assistant Professor, Department of Information and Computing Sciences, Utrecht University)</li>
                        <li>Lauren Yu (Web Developer)</li>
                    </ul>
                </Paper>
            </>
        </>
        
    )
}

export default Landing