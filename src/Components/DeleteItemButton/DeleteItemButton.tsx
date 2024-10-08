import * as React from "react";
import './DeleteItemButton.css';

interface PropsBtn {
    onClick: () => void;
}

const DeleteItemButton: React.FC<PropsBtn> = ({onClick}) => {
    return (
        <button type="button" className="delete_btn" onClick={onClick}>
            x
        </button>
    );
};

export default DeleteItemButton