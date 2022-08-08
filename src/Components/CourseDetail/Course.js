import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Filter from '../Dashboard/Filter/Filter';
import useStyles from './GradeStyle';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Divider} from '@mui/material';
import { useParams } from 'react-router-dom';
// import Assignment icon
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
//  folder icon
import FolderIcon from '@mui/icons-material/Folder';
// grade icon
import GradeIcon from '@mui/icons-material/Grade';
import DueAssignment from '../Assignments/Due';
import Grade from '../Scores/Grade';

const CourseDetail = () => {
    const classes = useStyles();

    // get the courseId from the url
    // using useParams from react-router-dom
    const { courseTitle, courseId } = useParams();
    console.log("courseId: ", courseId);
    return (
        <div className={classes.root} >
            <Sidebar/>
            {/* make grid of two column  */}
            {/* first column got 1/4th of area */}
            {/* second column got 3/4th of area */}
            <main className={classes.content}>
                {/* <Typography>Course Detail</Typography> */}
                <Grid container>
                    {/* first column */}
                    <Grid item xs={12} sm={6} md={3}>
                        {/* set paper heifht to inifinity */}

                        <Paper className={classes.paper} style={{height:'760px'}}>
                        
                        {/* set an course image of round sized */}
                        <div className={classes.Img} >
                            <img className={classes.courseImg}  src="https://www.kindpng.com/picc/m/79-793803_books-icon-study-icon-transparent-background-hd-png.png"/>
                        </div>
                        <Typography style={{fontSize:'20px',paddingLeft:'15px', paddingTop:'20px'}}> {courseTitle} </Typography>

                           
                            <Divider />
                            <Divider />

                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                    Course Actions
                                    </ListSubheader>
                                }
                                >
                                <ListItemButton>

                                    <ListItemText primary="Due Assignments" />
                                    <ListItemIcon>
                                    <AssignmentIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                                
                                <ListItemButton>
                                
                                    <ListItemText primary="Completed Assignments" />
                                    <ListItemIcon>
                                    <AssignmentTurnedInIcon />
                                    </ListItemIcon>
                                </ListItemButton>

                                <ListItemButton>
                                
                                    <ListItemText primary="Grades" />
                                    <ListItemIcon>
                                    <GradeIcon />
                                    </ListItemIcon>

                                </ListItemButton>

                                <ListItemButton>
                                
                                    <ListItemText primary="Materials" />
                                    <ListItemIcon>
                                    <FolderIcon />
                                    </ListItemIcon>
                                    
                                </ListItemButton>
                        </List>
                           
                        </Paper>
                    </Grid>
                    
                    {/* second column */}
                   {/* which got 3/4th of area */}
                    <Grid item xs={12} sm={6} md={9}>
                        <Paper className={classes.paper} style={{paddingTop:'45px'}}>
                            <Typography>Course Actions</Typography>
                            <Divider />
                            <Grade studentId={2} />
                            {/* <DueAssignment courseId={courseId}/> */}

                            
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        



        </div>
    );


}

export default CourseDetail;