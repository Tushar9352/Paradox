export default function Random() {
    let number = Math.floor(Math.random() * 100) + 1;
    console.log("Random number generated:", number);
    return (
        <div>
            <p>Random number is: {number}</p>                   
        </div>
    );
}
