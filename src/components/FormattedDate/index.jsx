const FormattedDate = ({isHighLight, children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighLight ? "text-primaryContent": ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;