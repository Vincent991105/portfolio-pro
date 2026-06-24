function MasterEar({data,earing}){
    return(
        <svg width="212" height="38" viewBox="0 0 212 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23858 2.23858 0 5 0H8V38H5C2.23858 38 0 35.7614 0 33V5Z" fill={data}/>
            <path d="M204 0H207C209.761 0 212 2.23858 212 5V33C212 35.7614 209.761 38 207 38H204V0Z" fill={data}/>
            {earing && <circle cx="208" cy="34" r="2" fill={earing}/>}
        </svg>
    )
}

export default MasterEar


