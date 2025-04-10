type Props = {
    value: string;
    onSquareClick: () => void;
}

export function Square({value, onSquareClick} : Props)  {
    return (
        <button className="bg-white size-12" onClick={onSquareClick}>
            {value}
        </button>
    );
}