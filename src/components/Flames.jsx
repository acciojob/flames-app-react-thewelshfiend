import React, { useState } from 'react'

const Flames = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relationship, setRelationship] = useState("");

    function setFire()
    {
        if(!name1 || !name2)
        {
            setRelationship('Please Enter valid input');
            return;
        }
        const letters1 = new Set(name1);
        const letters2 = new Set(name2);
        const total = letters1.union(letters2).size;
        letters1.clear();
        letters2.clear();

        switch(total % 6)
        {
            case 0:
                setRelationship('Siblings');
                break;
            case 1:
                setRelationship('Friends');
                break;
            case 2:
                setRelationship('Love');
                break;
            case 3:
                setRelationship('Affection');
                break;
            case 4:
                setRelationship('Marriage');
                break;
            case 5:
                setRelationship('Enemy');
        }
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