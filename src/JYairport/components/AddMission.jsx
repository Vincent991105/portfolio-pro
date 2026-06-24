import { useState } from "react";

function AddMission({onSubmit}){

    const [Data, setData] = useState({
        task_no: '',
        aircraft_model: 'F-16',
        scheduled_start_time: '',
        scheduled_end_time: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () =>{
        const submitData = {
            task_no : Data.task_no,
            aircraft_model : Data.aircraft_model,
            scheduled_start_time : `${new Date().toISOString().split('T')[0]} ${Data.scheduled_start_time}`,
            scheduled_end_time: `${new Date().toISOString().split('T')[0]} ${Data.scheduled_end_time}`
        }

        onSubmit(submitData)
    }

    return(
        <div className="flex flex-col gap-[10px]">
            <div className="flex flex gap-[15px] text-[#00FFFF] font-bold">
                <div className="cyber-form-group flex-1">
                    <p className="cyber-label">任務編號</p>
                    <span>:</span>
                    <input 
                        name="task_no"
                        value={Data.task_no || ''}
                        onChange={handleChange}
                        type="text" 
                        className="cyber-input flex-1" 
                        placeholder="ENTER ID..."
                    />
                </div>
                <div className="cyber-form-group">
                    <p className="cyber-label">機型</p>
                    <span>:</span>
                    <select 
                        name="aircraft_model" 
                        className="cyber-select" 
                        value={Data.aircraft_model}
                        onChange={handleChange}
                    >
                        <option value="F-16">F-16</option>
                        <option value="IDF">IDF</option>
                    </select>
                </div>
            </div>
            <div className="flex flex gap-[15px] text-[#00FFFF] font-bold">
                <div className="cyber-form-group flex-1">
                    <p className="cyber-label">靶場時間</p>
                    <span>:</span>
                    <input 
                        name="scheduled_start_time"
                        value={Data.scheduled_start_time || ''}
                        onChange={handleChange}
                        type="time" 
                        className="cyber-input flex-1" 
                    />
                    <span>~</span>
                    <input 
                        name="scheduled_end_time"
                        value={Data.scheduled_end_time || ''}
                        onChange={handleChange}
                        type="time" 
                        className="cyber-input flex-1" 
                    />
                </div>
            </div>
            <div onClick={() => handleSubmit()} className="flex px-[20px] py-[8px] justify-center bg-[#00FFFF] text-black font-black rounded-xl cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                確認送出
            </div>
        </div>
    )
}

export default AddMission