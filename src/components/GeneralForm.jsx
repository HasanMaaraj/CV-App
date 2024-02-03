


function GeneralForm(props) {
return (
    <form onSubmit={props.handleSubmit}>
        <legend>General Information</legend>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="e-mail">E-Mail: </label>
        <input type="email" name="e-mail" id="e-mail"/>
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" name="phone" id="phone"/>
        <button type="submit">submit</button>
    </form>
)
}

export default GeneralForm;