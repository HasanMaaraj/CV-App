


function ExperienceForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <legend>Practical Experience</legend>
            <label htmlFor="company-name">Company Name: </label>
            <input type="text" name="company-name" id="company-name"/>
            <label htmlFor="position-title">Position Title: </label>
            <input type="text" name="position-title" id="position-title"/>
            <label htmlFor="starting-date">Starting Date: </label>
            <input type="date" name="starting-date" id="starting-date"/>
            <label htmlFor="end-date">End Date: </label>
            <input type="date" name="end-date" id="end-date"/>
            <label htmlFor="description">Description: </label>
            <textarea name="description" id="description"></textarea>
            <button type="submit">submit</button>
        </form>
    )
    }
    
    export default ExperienceForm;