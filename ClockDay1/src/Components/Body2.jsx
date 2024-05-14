// Body2.jsx
function Body2() {
    let time = new Date();
    return <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;
}
export default Body2;
