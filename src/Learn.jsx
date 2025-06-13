import {useState} from "react"
import { characters, vowels, gojuonHiraOrder, gojuonKataOrder } from "./Constants.jsx"


function groupByVowel(charList, sortOrder) {
    const columns = [ [], [], [], [], [] ];

    const sorted = [...charList].sort((a, b) => {
        return sortOrder.indexOf(a.kana) -  sortOrder.indexOf(b.kana);

    });
    console.log("Sort order (last few):", sorted);


    sorted.forEach((char) => {
        const ending = char.romaji.slice(-1);
        const colIndex = vowels.indexOf(ending);

        if (colIndex !== -1) {
            columns[colIndex].push(char);
        } else {
            columns[4].push(char);
        }
    });
    console.log("columns: " , columns);

    const maxRows = Math.max(...columns.map((col) => col.length));
    const gridRows = [];
    for (let i = 0; i < maxRows; i++) {
        gridRows.push(
            <div className="row" key={i}>
                {columns.map((col, j) => (
                    <div className="cell" key={j}>
                        {col[i] ? (
                            <>
                                <div className="kana">{col[i].kana}</div>
                                <div className="romaji">{col[i].romaji}</div>
                            </>
                        ) : (
                            <div className="empty" />
                        )}
                    </div>
                ))}
            </div>
        );
    }
    return gridRows;
}

const Learn = () => {
    // Track which type of characters to show: 'hiragana' or 'katakana'
    const [activeType, setActiveType] = useState("hiragana");

    // When the user clicks the toggle button, switch between types
    const handleToggle = () => {
        setActiveType((prev) => (prev === "hiragana" ? "katakana" : "hiragana"));
    };

    // Filter all characters to just the current type (hiragana or katakana)
    const filteredChars = characters.filter((char) => char.type === activeType);
    const sortOrder = activeType === "hiragana" ? gojuonHiraOrder : gojuonKataOrder;

    // Build the grid layout for the filtered characters
    const grid = groupByVowel(filteredChars, sortOrder);

    return (
        <div>
            {/* Toggle button to switch between Hiragana and Katakana */}
            <div className="button-wrapper">
                <button className = "button" onClick={handleToggle}>
                    Switch to {activeType === "hiragana" ? "Katakana" : "Hiragana"}
                </button>
            </div>
            {/* Section heading */}
            <h2 className="active-type"> {activeType === "hiragana" ? "Hiragana (ひらがな)" : "Katakana (カタカナ)"}</h2>

            {/* Render the kana grid */}
            <div className="kana-grid">{grid}</div>
        </div>
    );
};




export default Learn;