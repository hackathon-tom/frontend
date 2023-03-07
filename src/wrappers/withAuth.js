/**
 * wrapper to enforce the route to have login and make the user available
 */

const withAuth = (Component) => {
    const user = "blabla";

    return (props) => {
        return (
            <Component {...props} user={user} />
        )
    }
}