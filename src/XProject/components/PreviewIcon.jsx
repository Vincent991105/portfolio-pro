import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { toPng } from 'html-to-image';

// 引入你原本的 SVG 組件 (路徑請根據你的專案調整)
import FirstEar from "./iconCreate/FirstEar";
import SecondFace from "./iconCreate/SecondFace";
import ThirdEyebrow from "./iconCreate/ThirdEyebrow";
import ThirdEyebrow02 from "./iconCreate/ThirdEyebrow02";
import ThirdEyebrow03 from "./iconCreate/ThirdEyebrow03";
import ThirdEyebrow04 from "./iconCreate/ThirdEyebrow04";
import ThirdEyebrow05 from "./iconCreate/ThirdEyebrow05";
import FourEye from "./iconCreate/FourEye";
import FiveMouth from "./iconCreate/FiveMouth";
import SixMuse from "./iconCreate/SixMuse";
import SixMuse02 from "./iconCreate/SixMuse02";
import SixMuse03 from "./iconCreate/SixMuse03";
import SixMuse04 from "./iconCreate/SixMuse04";
import SevenSide from "./iconCreate/SevenSide";
import SevenSide02 from "./iconCreate/SevenSide02";
import EightButton from "./iconCreate/EightButton";
import NineNose from "./iconCreate/NineNose";
import TenHair from "./iconCreate/TenHair";

const PreviewIcon = forwardRef(({ data, type }, ref) => {
    const convertRef = useRef(null);

    // 暴露給父組件的方法 (例如下載)
    useImperativeHandle(ref, () => ({
        download: () => handleCommit()
    }));

    const handleCommit = () => {
        const isConfirmed = window.confirm("CONFIRM_DATA_SYNC?");
        if (!isConfirmed || !convertRef.current) return;

        toPng(convertRef.current, { cacheBust: true })
            .then((dataUrl) => {
                // 在 Standalone 模式下，我們直接下載或回傳
                const link = document.createElement('a');
                link.download = `AGENT_${Date.now()}.png`;
                link.href = dataUrl;
                link.click();
                alert("VISUAL_DATA_COMMITTED_SUCCESSFULLY");
            })
            .catch((err) => {
                console.error('SYNC_ERROR:', err);
                alert('CRITICAL_SYNC_FAILURE');
            });
    };

    return (
        <div id="visual-scanner" className="flex items-center justify-center">
            {/* 實際轉換區域 */}
            <div 
                ref={convertRef} 
                className="bg-transparent relative" 
                style={{ width: 280, height: 280 }}
            >
                {/* 1. 耳朵層 */}
                <div className="absolute top-[6%] left-1/2 -translate-x-1/2">
                    <FirstEar data={data}/>
                </div>

                {/* 2. 臉部層 */}
                <div className="absolute top-[22%] left-1/2 -translate-x-1/2">
                    <SecondFace data={data}/>
                </div>

                {/* 3. 眉毛層 (動態判斷類型) */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2">
                    {data.eyeBrowType === '1' && <ThirdEyebrow data={data}/>}
                    {data.eyeBrowType === '2' && <ThirdEyebrow02 data={data}/>}
                    {data.eyeBrowType === '3' && <ThirdEyebrow03 data={data}/>}
                    {data.eyeBrowType === '4' && <ThirdEyebrow04 data={data}/>}
                    {data.eyeBrowType === '5' && <ThirdEyebrow05 data={data}/>}
                </div>

                {/* 4. 眼睛層 */}
                <div className="absolute top-[46%] left-1/2 -translate-x-1/2">
                    <FourEye/>
                </div>

                {/* 5. 嘴巴層 */}
                <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2">
                    <FiveMouth data={data}/>
                </div>

                {/* 6. 鬍子/臉頰層 */}
                <>
                    {data.museType === '1' && <div className="absolute bottom-[19%] left-1/2 -translate-x-1/2"><SixMuse data={data} /></div>}
                    {data.museType === '2' && <div className="absolute bottom-[19%] left-1/2 -translate-x-1/2"><SixMuse02 data={data} /></div>}
                    {data.museType === '3' && <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2"><SixMuse03 data={data} /></div>}
                    {data.museType === '4' && <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2"><SixMuse04 data={data} /></div>}
                </>

                {/* 7. 鬢角層 */}
                <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2">
                    {data.sideType === '1' && <SevenSide data={data}/>}
                    {data.sideType === '2' && <SevenSide02 data={data}/>}
                </div>

                {/* 8. 鈕扣層 */}
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
                    <EightButton data={data}/>
                </div>

                {/* 9. 鼻子層 */}
                <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2">
                    <NineNose data={data}/>
                </div>

                {/* 10. 髮型層 (最頂層) */}
                {data.hairType === '1' && (
                    <div className="absolute top-[4%] left-1/2 -translate-x-1/2">
                        <TenHair data={data}/>
                    </div>
                )}
            </div>
        </div>
    );
});

export default PreviewIcon;