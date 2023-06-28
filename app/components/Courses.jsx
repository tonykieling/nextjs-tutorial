// import Link from "next/link";

const fetchCourses = async() => {
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = response.json();
    return courses;
}

const Courses = async () => {
    const courses = await fetchCourses();
    return (
        <div className="courses">
            {courses.map(course => {
                <div key={course.name} className="card">
                    <h2>{course.name}</h2>
                    <small>Desc: { course.desc }</small>
                    <p>{course.desc}</p>
                </div>
            })}    
        </div>
    );
}

export default Courses