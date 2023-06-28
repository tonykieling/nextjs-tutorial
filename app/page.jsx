export const metadata = {
    title: "this is page",
    description: "page description"
}

const getCourses = async () => {
    const data = await fetch("http://localhost:3000/api/courses");
    const courses = await data.json();
    return courses;
}

const HomePage = async () => {
    const courses = await getCourses();
    // console.log("courses::: ", courses);

    return (
        <div>
            <h1>Welcome to TK</h1>
            <p>This is Home</p>
        </div>
    )
}

export default HomePage