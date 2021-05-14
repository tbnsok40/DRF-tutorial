import React, {useEffect, useState} from 'react';
import axios from "axios";

function Django() {


    const [todos, setTodos] = useState([]);
    const [completes, setCompletes] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get("http://localhost:8000/users/").then(response => setTodos(response.data));
    }

    const containerStyle = {
        "display": "flex",
        "flexWrap": "wrap",
        "width": "1000px",
        "height": "1000px"
    }

    const boxStyle = {
        "width": "200px",
        "height": "200px",
        "margin": "10px 0px 50px 0px"
    }

    const semiContainer = {
        "width": "500px",
        "height": "1000px"
    }

    const completeTodo = async (id) => {

        const res = await axios.get(`http://localhost:8000/users/${id}`)
        const data = await res.data
        console.log(data)

        let temp_complete = completes;
        temp_complete.push(data)
        setCompletes(temp_complete)

        let temp_todos = todos.filter(todo => todo.id !== id);
        await setTodos(temp_todos)
    }

    const deleteTodo = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/users/${id}`)
        window.location.replace("/") // re-render하지 않고 곧 바로 지울 수 있는 방법없나
    }

    return (
        <div>
            <div className="container" style={containerStyle}>
                <div style={semiContainer}>
                    {todos && todos.map(obj => {
                        return (
                            <div key={obj.id} style={boxStyle}>
                                <h4>USER ID: <p> {obj.user_id}</p></h4>
                                <p onClick={e => completeTodo(obj.id)}>✅</p>
                                <p onClick={e => deleteTodo(obj.id)}>❌️</p>
                            </div>
                        )
                    })}
                </div>
                <div style={semiContainer}>
                    {completes && completes.map(com => (
                        <div key={com.id}>{com.user_id}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Django;


// 좀 괜찮은 투두리스트엔 뭐가 다를까.
