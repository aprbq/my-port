const Description = ({isHighLight, description}) => {
    return (
        <div className={`text-sm ${isHighLight ? "text-primaryContent": ""}`}>{description}</div>
    )
}

export default Description;