

function GeneralDisplay(props) {
    return (
        <div className="general-display">
            <h1>{ props.name }</h1>
            <span>{ props.phone }</span>
            <span>{ props.eMail }</span>
        </div>
    )
}

export default GeneralDisplay;