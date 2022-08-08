import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import useStyles from './TeamsStyle';
import Card_ from './CourseCard';
import {useState, useEffect} from 'react';

function Teams() {
    const classes = useStyles();

    // fetch courses from server api
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/api/courses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
                console.log("courses: ", courses);
            }).catch(err => {
                console.log(err);
            }
            );
    } , []);

    return (
        <div className={classes.root} >
            <Sidebar/>
            <main className={classes.content}>
                <Typography>Your Courses</Typography> 
                <Grid container>
                
                    {/* return a card for every course in courses */}
                    {courses.map(course => (
                        <Grid item xs={12} sm={6} md={4}>  
                            <Card_ course={course} />
                        </Grid>
                    ))}
                
                </Grid>
    </main>
        </div>
    );
}

export default Teams;