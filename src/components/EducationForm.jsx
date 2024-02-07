


function EducationForm(props) {
    return (
        <form onSubmit={props.onSubmit} id="education-form">
            <legend>Educational Experience</legend>
            <label htmlFor="school-name">School Name: </label>
            <input type="text" name="school-name" id="school-name"/>
            <label htmlFor="degree">Degree: </label>
            <select name="degree" id="degree">
                <option value="Bachelor;s">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="phd">phd</option>
            </select>
            <label htmlFor="study-title">Title of Study: </label>
            <input type="text" name="study-title" id="study-title"/>
            <label htmlFor="graduation-date">Graduation Date: </label>
            <input type="date" name="graduation-date" id="graduation-date"/>
            <button type="submit">submit</button>
        </form>
    )
    }
    
    export default EducationForm;