function JYarrow({ reverse, isActive }) {
    return (
        <svg 
            width="38" height="51" viewBox="0 0 38 51" fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`mx-[-0.8px] transition-transform duration-300 ease-out ${reverse ? "transform scale-x-[-1]" : ""}`}
        >
            {/* 實心背景：透過 opacity 控制顯隱，實現淡入淡出 */}
            <path 
                d="M37.6453 0.413452L0.890625 25.4135L37.6453 50.4135V0.413452Z" 
                fill={isActive ? "#00FFFF" : '#171F31'}
                className='transition-all duration-300 ease-in-out'
            />
            {/* 空心邊框：始終存在，或是當 isActive 時變淡 */}
            <path 
                d="M37.6453 0.413452L0.890625 25.4135L37.6453 50.4135" 
                stroke="#00FFFF" 
                strokeWidth="2"
                className={`transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
            />
        </svg>
    )
}

export default JYarrow

