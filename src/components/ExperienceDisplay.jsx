


function ExperienceDisplay(props) {
    return (
        <div className="experience-display">
            <h2>Experience</h2>
            <div className="company">Company: {props.info['company-name']}</div>
            <div className="title">Position Title: { props.info['position-title'] }</div>
            <div className="start-Date">Start Date { props.info['starting-date'] }</div>
            <div className="end-Date">End Date { props.info['end-date'] }</div>
            <div className="description">Description: { props.info.description }</div>
        </div>
    )
}

export default ExperienceDisplay;