// BASE URL OF OUR DEPLOYED API
const URL = process.env.REACT_APP_NODE_ENV === "production"
? "https://express-react-lab-allison2.onrender.com"
: "http://localhost:4000";

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}