import React, { useState } from 'react'

const Post = () => {
    const [array , setarray] = useState([])
    const [TITLE , settitle] = useState()
    const [DES , setdes] = useState()
    const handleChangeTitle = (e) => {
        settitle(e.target.value)
    }
    const handleChangeDes = (e) => {
        setdes(e.target.value)
    }
    const handler = (e) => {
        e.preventDefault();
        const obj = {id : `${array.length+1}` , title : TITLE , description : DES}
        const dummyarray = array
        dummyarray.push(obj)
        setarray(dummyarray)
        settitle('')
        setdes('')
        console.log(array)
    }
  return (
    <div>
        <h3>Make Post</h3>
        <form>
            <input type="text" placeholder='Title' onChange={handleChangeTitle} id='title'/>
            <input type="text" placeholder='Description' onChange={handleChangeDes} id='des'/>
            <button type='default' onClick={handler}>Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((obj) => (
                        <tr key={obj.id}>
                            <th>{obj.id}</th>
                            <th>{obj.title}</th>
                            <th>{obj.description}</th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Post