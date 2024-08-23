export const Note = (props) => {
    return (
        <li>
            <p>{props.title}</p>
            <small>{props.body}</small>
        </li>
    )
}