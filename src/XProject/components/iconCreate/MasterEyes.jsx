function MasterEyes({data, eyebrow}){
    return(
        <svg width="165" height="50" viewBox="0 0 165 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="9" width="50" height="7" rx="3.5" fill={eyebrow}/>
            <rect x="115" y="9" width="50" height="7" rx="3.5" fill={eyebrow}/>
            <rect x="125" y="20" width="30" height="30" fill="white"/>
            <rect x="130" y="25" width="15" height="25" fill={data}/>
            <rect x="140" y="25" width="10" height="10" fill="#D9D9D9"/>
            <rect x="10" y="20" width="30" height="30" fill="white"/>
            <rect x="15" y="25" width="15" height="25" fill={data}/>
            <rect x="25" y="25" width="10" height="10" fill="#D9D9D9"/>
        </svg>
    )
}

export default MasterEyes


