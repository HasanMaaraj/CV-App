


function EducationForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <legend>Educational Experience</legend>
            <label htmlFor="school-name">School Name: </label>
            <input type="text" name="school-name" id="school-name"/>
            <label htmlFor="degree">Degree: </label>
            <input type="text" name="degree" id="degree"/>
            <label htmlFor="study-title">Title of Study: </label>
            <input type="text" name="study-title" id="study-title"/>
            <label htmlFor="graduation-date">Graduation Date: </label>
            <input type="date" name="graduation-date" id="graduation-date"/>
            <button type="submit">submit</button>
        </form>
    )
    }
    
    export default EducationForm;