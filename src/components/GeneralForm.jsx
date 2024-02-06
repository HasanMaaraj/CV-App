


function GeneralForm(props) {
return (
    <form onSubmit={props.onSubmit} id="general-form">
        <legend>General Information</legend>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="email">E-Mail: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" name="phone" id="phone"/>
        <button type="submit">submit</button>
    </form>
)
}

export default GeneralForm;