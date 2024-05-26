function Button(){

    let counter = 0

    const handleClick = (event) => event.target.textContent = "Siema"

    return(
        <button onClick={(event) => handleClick(event) }>Click me</button>
    );
}
export default Button