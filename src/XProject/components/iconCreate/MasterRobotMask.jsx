function MasterRobotMask({data, side, remark}){
    return(
        <svg width="102" height="198" viewBox="0 0 102 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_215_1043)">
                <path d="M81.5 79V4H48C10.8 4 1.66672 36 2.00004 52C2.33337 67.5 2.49998 108 2.49998 145C2.49998 182.209 34.8333 193.167 51.5 194H95.6451V178.5H65V155.5L71.5 162H95.6451V103.5L81.5 79Z" fill={data}/>
            </g>
                <path d="M47.5 4.5V34L69.5 46.7017V90L47.5 95.8949V105V193.5" stroke={side} strokeWidth="3"/>
                <rect x="28" y="105" width="30" height="30" fill={side}/>
                <rect x="33" y="110" width="15" height="25" fill="white" fillOpacity="0.6"/>
                <rect x="43" y="110" width="10" height="10" fill="white"/>
                <path d="M48 90V43L66 50.5V82.5L48 90Z" fill={remark}/>
            <defs>
                <filter id="filter0_d_215_1043" x="-0.00866699" y="0" width="101.654" height="198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_215_1043"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_215_1043" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default MasterRobotMask