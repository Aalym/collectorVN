export default function ChoiceBtn({ text, onClick }) {
    return (
    <button
        onClick={onClick}
        className="bg-gray-800 hover:bg-gray-600 px-4 py-2 m-1 rounded transition"
    >
        {text}
    </button>
    );
}
