export default function GameUI({ text, onClick }) {
    return (
    <button
        onClick={onClick}
        className={styles.GameUIButton}
    >
        {text}
    </button>
    );
}



