function MasterHair({data, big, small}){
    return(
        <svg width="198" height="73" viewBox="0 0 198 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.5 73H0.5V48C0.5 10.8 32.8333 0.5 49 0H148C186 0 196.833 31.3333 197.5 48V73H126L104.434 50L96.5 73H74.2169L61.7169 60.5L54.5 73Z" fill={data}/>
            <path d="M138 38.5V73H183.5V49L155.5 21L138 38.5Z" fill={big}/>
            <path d="M16 51.7692V73H30V58.2308L21.3846 41L16 51.7692Z" fill={small}/>
        </svg>
    )
}

export default MasterHair

