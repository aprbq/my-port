const Tech = ({isHighLight, data}) => {
    return (
        <div>
            <div className="flex gap-4 text-sm">
                {
                    data.map((e, i)=> (
                        <div key={`${e}-tech-${i}`} className={`bg-primarySubContent px-2 py-1 rounded-md ${isHighLight ? "text-primaryContent" : "text-primaryBg"}`}>{e}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech;