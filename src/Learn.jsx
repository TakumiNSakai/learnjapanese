import { constants } from "./Constants.jsx"

const Learn = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
            {constants.map((char, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem" }}>{char.kana}</div>
                    <div>{char.romaji}</div>
                </div>
            ))}
        </div>
    );
}

export default Learn;