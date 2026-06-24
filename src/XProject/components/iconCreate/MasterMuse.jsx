function MasterMuse({data}){
    return(
        <svg width="42" height="11" viewBox="0 0 42 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V11" stroke={data} strokeWidth="2"/>
            <path d="M11 0V11" stroke={data} strokeWidth="2"/>
            <path d="M21 0V11" stroke={data} strokeWidth="2"/>
            <path d="M31 0V11" stroke={data} strokeWidth="2"/>
            <path d="M41 0V11" stroke={data} strokeWidth="2"/>
        </svg>
    )
}

export default MasterMuse


