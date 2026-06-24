function MasterGlass({data, main}){
    return(
        <svg width="195" height="50" viewBox="0 0 195 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 41V9C4 6.23858 6.23858 4 9 4H68C70.7614 4 73 6.23858 73 9V24.5V41C73 43.7614 70.7614 46 68 46H9C6.23858 46 4 43.7614 4 41Z" fill={data ? main : ''} fillOpacity="0.2"/>
            <path d="M73 24.5V41C73 43.7614 70.7614 46 68 46H9C6.23858 46 4 43.7614 4 41V9C4 6.23858 6.23858 4 9 4H68C70.7614 4 73 6.23858 73 9V24.5ZM73 24.5H122" stroke={data} strokeWidth="8"/>
            <path d="M122 41V9C122 6.23858 124.239 4 127 4H186C188.761 4 191 6.23858 191 9V41C191 43.7614 188.761 46 186 46H127C124.239 46 122 43.7614 122 41Z" fill={data ? main : ''} fillOpacity="0.2" stroke={data} strokeWidth="8"/>
            {data && <path d="M178 21V37.5" stroke="white" strokeOpacity="0.3" strokeWidth="5"/>}
            {data && <path d="M63 21V37.5" stroke="white" strokeOpacity="0.3" strokeWidth="5"/>}
        </svg>
    )
}

export default MasterGlass