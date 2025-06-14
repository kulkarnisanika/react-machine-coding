import React from 'react'

const DisplayTodo = ({ todoList, setTodoList }) => {

    const handleCheckBoxChange = (todo) => {
        const modifiedVal = todoList.map((cur) => {
            if (todo.id === cur.id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }

            }
            else {
                return cur;
            }


        });


        setTodoList(modifiedVal);
    }

    const handleButtonClick = (id) => {
        const removedData = todoList?.filter((cur) => {
            return cur.id !== id && cur
        })

        setTodoList(removedData);
    }
    return (
        <div>
            {
                todoList?.map((todo) => {
                    const { id, name, isCompleted } = todo;
                    return (
                        <div key={id} style={{ display: "flex", gap: "16px", marginTop: "12px", alignItems: "center" }}>
                            <input type="checkbox" checked={isCompleted} onChange={(e) => handleCheckBoxChange(todo)} />
                            <h4 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
                                {name}
                            </h4>
                            <button onClick={(e) => handleButtonClick(id)} style={{ padding: "4px", width: "120px", height: "40px" }}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo