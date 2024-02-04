


function EducationDisplay(props) {
    return (
        <div className="education-display">
            <h2>Education</h2>
            <div className="degree">Degree: {props.degree}</div>
            <div className="title">Title of Study: { props.title }</div>
            <div className="graduation-date">Graduation Date { props.date }</div>
        </div>
    )
}

export default EducationDisplay;