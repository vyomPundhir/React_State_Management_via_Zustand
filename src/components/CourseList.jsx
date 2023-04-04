import React from "react"
import useCourseStore from "../app/courseStore"

const CourseList = () =>{
  const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus
    })
  )
  return (
    <>
    <ul>
      {courses.map((course, i) =>{
        return (
          <React.Fragment key={i}>
            <li className={`course-item`}
            style={{
              backgroundColor: course.completed ? "#ff0044" : "white"
            }}>
              <span className="course-item-col-1">
                <input 
                checked={course.completed}
                type="checkbox"
                onchange={(e) => {
                  toggleCourseStatus(course.id)
                }}
                />
              </span>
              <span>{course?.title}</span>
              <button className="delete btn">Delete</button>
            </li>

          </React.Fragment>
        )
      })}
    </ul>
    </>
  )
}
