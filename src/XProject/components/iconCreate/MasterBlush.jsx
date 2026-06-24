function MasterBlush({data}){
    return(
        <svg width="165" height="15" viewBox="0 0 165 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="13" y="4" width="25" height="7" rx="3.5" fill={data}/>
            <rect x="128" y="4" width="25" height="7" rx="3.5" fill={data}/>
        </svg>
    )
}

export default MasterBlush


