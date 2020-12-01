import React from "react"
import Project from "../components/project"
import PicA from "../images/newproject11.png" /// TODO: (Explanation - why PicA = String )
import PicB from "../images/Weather.jpg"
import PicC from "../images/workDay.jpg"
import PicD from "../images/fitness.jpg"
import PicE from "../images/quiz.jpg"
import PicF from "../images/workout.jpg"



function Porfolio() {
    return (
        <div className="container style">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron jumbotron-fluid opacity bg-light text-center">
                        <div className="container">
                            <h1 className="display-4 opacity">Portfolio</h1>
                        </div>
                    </div>
                </div>
            </div>
                <Project
                    img={PicA} // TODO: (Why the build is passing Image but is not showing up on actual app, once deployed through github.io)
                    title="Bad Jokes and Brews" 
                    description="In this app, the user will enter a zip code to find breweries in that area. A map is presented so that you may enter the brewery name and find the location, as well as pinging your current location to evaluate the distance between you and the brewery. The user will also be presented with a button to display a randomly generated joke, so you may always be the center of attention" 
                    projectLink="https://bcermak.github.io/BrewsNDadJokes/"
                    repoLink="https://github.com/bcermak/BrewsNDadJokes" />
                <Project
                    img={PicB}
                    title="Weather Dashboard"
                    description="In this weather Dashboard, the user will be able to display current weather and predicted 5 day forecast. The user must enter in a city for which they want to see the weather in the input box.
                        When the user hits enter, the weather for that days date will be displayed in the main section. Underneath the current weather, a 5 day forecast will appear."
                    projectLink="https://oballematt.github.io/Weather-Dashboard/"
                    repoLink="https://github.com/oballematt/Weather-Dashboard" />
                <Project 
                    img={PicC}
                    title="Work Day Scheduler"
                    description="In this scheduler, the user will be able to plan any objectives they have throughout the day. The time starts at 9am and ends at 5pm. The time blocks are color coded so the user will be able to see when an objective is past the hour, when youre on the current hour, and any future objectives.
                    When the current hour is past previous, the time block will display gray. When the hour is current, the time block will display red, and when the time block is in the future, it will display green."
                    projectLink="https://oballematt.github.io/Work-Day-Scheduler/"
                    repoLink="https://github.com/oballematt/Work-Day-Scheduler"/>
                <Project 
                    img={PicD}
                    title="Combat Fitness"
                    description="This application is a fitness tracker that allows users to set a goal and search for meals based on their calorie needs. It also allows users that are new to fitness search and look for fitness program videos based on their goals."
                    projectLink="https://combatfitness.herokuapp.com/"
                    repoLink="https://github.com/oballematt/Fitness-Tracker"/>
                <Project 
                    img={PicE}
                    title="Javascript Quiz"
                    description="In this application, the use will be able to take a quiz based on javascript related questions. A timer will count down from 60 and every wrong answer will deduct the users time by 5 seconds. Every right answer will add to the users score by 5."
                    projectLink="https://oballematt.github.io/Javascript-Quiz/"
                    repoLink="https://github.com/oballematt/Javascript-Quiz"/>
                <Project 
                    img={PicF}
                    title="Workout Tracker"
                    description="When the user loads the page, they will be given an option to add a new workout or continue their last workout. If the user clicks on new workout, they will be directed to a page that will ask them if they want resistance or cardio workouts. If the user chooses resistance,tThey will then add what workout they performed, how many reps, how many sets, and the duration of their workout. If the user chooses cardio, they will enter what cardio exercise they performed, how many miles they went and how long the exercise was performed for. Back at the homepage, whatever info the user inputed, will appear under last workout with the information they inputed about the workout. In the top left corner, the user can click dashboard, which will take them to a chart that logs all of their workout information."
                    projectLink="https://workout-trackerz.herokuapp.com/?id=5fadb0406f99910017083edd/"
                    repoLink="https://github.com/oballematt/No-SQL-Workout-Tracker"/>
           
        </div>
    )
}

export default Porfolio