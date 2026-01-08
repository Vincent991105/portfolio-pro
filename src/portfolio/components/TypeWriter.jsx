import { useState, useEffect } from 'react';

function TypeWriter({
    text, 
    speed = 150, 
    size = 30, 
    delay = 0,
    weight = "font-normal", 
    color = "#000000",
    align = "center" // 預設為置中，可傳入 "left" | "center" | "right"
}){

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    // 對應對齊方式的 Tailwind Class 對照表
    const alignmentClasses = {
        left: "justify-start text-left",
        center: "justify-center text-center",
        right: "justify-end text-right"
    };

    useEffect(() => {
        const startTimeout = setTimeout(() => setStart(true), delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (start && index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (start && index >= text.length) {
            setIsFinished(true);
        }
    }, [index, text, speed, start]);

    return (
        <div 
            className={`flex items-center w-full font-mono ${weight} ${alignmentClasses[align] || alignmentClasses.center}`} 
            style={{ fontSize: `${size}px`, color: color }}
        >
            {/* 文字內容 */}
            <span className="whitespace-pre-wrap">
                {displayedText}
            </span>
            
            {/* 閃爍光標 */}
            {start && !isFinished && (
                <span 
                    className="ml-1 inline-block animate-pulse" 
                    style={{ 
                        height: `${size * 0.8}px`, 
                        width: `${size * 0.1}px`, 
                        minWidth: '2px',
                        backgroundColor: 'currentColor' 
                    }}
                />
            )}
        </div>
    );
}

export default TypeWriter;