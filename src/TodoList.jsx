import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const TodoList = () => {
    const [num, setNum] = useState(0);
    const incre = () => {
        setNum(num+1);
    }
    const decre = () => {
        if(num>0){
            setNum(num-1);
        }
        else{
            setNum(0);
            alert("Can't go any further!!🙁")
        }
    }
    return (
        <>
            <div className="main_div">
            <div className="center_div">
            <h1>{num}</h1>
            <div className="btn_div">
                <Tooltip title="Add" arrow>
                    <Button variant="outlined" onClick={incre} className="btn btn_green">
                        <AddIcon/>
                    </Button>
                </Tooltip>
                <Tooltip title="Delete" arrow>
                    <Button variant="outlined" onClick={decre} className="btn btn_red">
                        <DeleteForeverOutlinedIcon />
                    </Button>
                </Tooltip>
            </div>
        </div>
    </div>
        </>
    )
    
}

export default TodoList;