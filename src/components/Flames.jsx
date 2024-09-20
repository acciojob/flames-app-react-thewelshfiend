import React, { useState } from 'react'

const Flames = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relationship, setRelationship] = useState("");
    const relations = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];

    function setFire()
    {
        if(!name1 || !name2)
        {
            setRelationship('Please Enter valid input');
            return;
        }

        const letters = new Set(name1);
        for(let i = 0; i < name2.length; i++)
        {
            letters.add(name2[i]);
        }
        const total = letters.size;
        letters.clear();

        setRelationship(relations[total % 6]);
    }

    return (
        <div>
            <form action="#" method="post" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" value={name1} name="name1" data-testid='input1' onChange={(e) => {
                    setName1(e.target.value);
                }}/>
                <input type="text" value={name2} name="name2" data-testid='input2' onChange={(e) => {
                    setName2(e.target.value);
                }}/>

                <button data-testid="calculate_relationship" onClick={setFire}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={() => {
                    setName1("");
                    setName2("");
                    setRelationship("");
                }}>Clear</button>
            </form>
            <h3 data-testid="answer">{relationship && `${relationship}`}</h3>
        </div>
    )
}

export default Flames