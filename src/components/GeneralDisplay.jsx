

function GeneralDisplay(props) {
    return (
        <div className="general-display">
            <h1>{ props.info.name }</h1>
            <span>{ props.info.phone }</span>
            <span>{ props.info.email }</span>
        </div>
    )
}

export default GeneralDisplay;