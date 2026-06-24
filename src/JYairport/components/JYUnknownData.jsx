import { IoInformationCircleOutline } from "react-icons/io5";

function JYUnknownData({ text = "請從左側列表選擇一項任務以查看詳情" }) {
    return (
        <div className="flex flex-col items-center justify-center flex-2 h-full border-2 border-dashed border-[#00FFFF]/20 rounded-2xl bg-[#000000]/20">
            <IoInformationCircleOutline size={48} className="text-[#00FFFF] opacity-50 mb-4 animate-pulse" />
            <p className="text-[#00FFFF]/60 font-bold tracking-widest text-lg">
                {text}
            </p>
            <div className="mt-2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF]/40 to-transparent"></div>
        </div>
    );
}

export default JYUnknownData;