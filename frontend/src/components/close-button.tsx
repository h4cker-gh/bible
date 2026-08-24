type CloseButtonProps = { onClick: VoidFunction }

function CloseButton({ onClick }: CloseButtonProps) {
    return <button className="close-button" onClick={onClick}>
        X
    </button>
}

export default CloseButton
