export default function Hello() {
    let myname = "Tushar Saini";
    let number = 8624946781;
    let email = "tushar.saini@example.com";

    let details = () => {
        alert(
            "My name is " + myname + "\n" +
            "My number is " + number + "\n" +
            "My email is " + email
        );
    };

    return (
        <h3 onClick={details}>
            Welcome {myname}
            <br />
            <button onClick={details}>Click here to see my details</button>
        </h3>
    );
}
