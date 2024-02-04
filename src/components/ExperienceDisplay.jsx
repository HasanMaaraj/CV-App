


function ExperienceDisplay(props) {
    return (
        <div className="experience-display">
            <h2>Experience</h2>
            <div className="company">Company: {props.company}</div>
            <div className="title">Position Title: { props.title }</div>
            <div className="start-Date">Start Date { props.startDate }</div>
            <div className="end-Date">End Date { props.endDate }</div>
            <div className="description">Description: { props.description }</div>
        </div>
    )
}

export default ExperienceDisplay;