const Todo = ({td})=>{
    return (
        <li>
            <span>{td.data}</span>
            <span>
                <i className="fas fa-trash"/>
            </span>
            <span>
                <i className="fas fa-pen"/>
            </span>
        </li>
    )
}

export default Todo;