import React, {useEffect, useState} from 'react';
import axios from "axios";

function Django() {


    const [objs, setObjs] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get("http://localhost:8000/users/").then(response => setObjs(response.data));
    }

    return (
        <div>
            {objs && objs.map(obj => {
                return(
                    <div key={obj.id}>
                        <h4>USER ID: {obj.user_id}</h4>
                        <h4>USER Address: {obj.address}</h4>
                        <hr/>
                    </div>
                )
            })}

        </div>
    );
}

export default Django;
