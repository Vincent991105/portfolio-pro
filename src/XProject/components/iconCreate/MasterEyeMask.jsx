function MasterEyeMask({data, side, remark}){
    return(
        <svg width="206" height="98" viewBox="0 0 206 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_215_1052)">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 25H40L53.5 1.61731L67 25H137.5L151 1.61731L164.5 25H201.5V74.5H137.5L104 88.7694L71 74.5H5V25ZM190 47H18.5V60H190V47Z" fill={data}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 25H40L53.5 1.61731L67 25H137.5L151 1.61731L164.5 25H201.5V74.5H137.5L104 88.7694L71 74.5H5V25ZM190 47H18.5V60H190V47Z" stroke={side}/>
            </g>
                <path d="M174.5 25V47" stroke={side}/>
                <path d="M158 60V74.5" stroke={side}/>
                <path d="M171 32H178.5" stroke={side}/>
                <path d="M171 41H178.5" stroke={side}/>
                <path d="M188.5 41.5V32H195.5V41.5H188.5Z" fill={remark} stroke={side}/>
                <path d="M179 89.5L175.5 86H179H182.5L179 89.5Z" fill={side}/>
                <path d="M179 74.5V89.5M179 89.5L175.5 86H182.5L179 89.5Z" stroke={side}/>
            <defs>
            <filter id="filter0_d_215_1052" x="0.5" y="0.61731" width="205.5" height="96.6962" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_215_1052"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_215_1052" result="shape"/>
            </filter>
            </defs>
        </svg>
    )
}

export default MasterEyeMask


