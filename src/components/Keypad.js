// Code Keypad Component Here

function Keypad (){

    function passChange(event){
        console.log(`Entering password...`);
    }

    return (
        <div>
            <input onChange={passChange} type="password"></input>
        </div>
    )
}

export default Keypad;