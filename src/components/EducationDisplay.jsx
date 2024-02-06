


function EducationDisplay(props) {
    return (
        <div className="education-display">
            <h2>Education</h2>
            <div className="school">School: {props.info['school-name']}</div>
            <div className="degree">Degree: {props.info.degree}</div>
            <div className="title">Title of Study: { props.info['study-title'] }</div>
            <div className="graduation-date">Graduation Date: { props.info['graduation-date'] }</div>
        </div>
    )
}

export default EducationDisplay;