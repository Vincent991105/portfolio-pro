import { useEffect, useState, useMemo } from 'react';
import { IoAdd } from "react-icons/io5";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import SubjectItems from './SubjectItems';
import { subjectData } from '../fakedata/subjectData';

function MissionSubject({ data = [], onUpdate, currentAircraft }) {
    const [missions, setMissions] = useState([]);
    
    // 下拉選單狀態
    const [selectedTactic, setSelectedTactic] = useState('');
    const [selectedSubjectId, setSelectedSubjectId] = useState('');

    // 1. 同步初始資料
    useEffect(() => {
        if (data) setMissions(data);
    }, [data]);

    // 1.1 變更機型清空資料
    useEffect(() => {
        onUpdate([])
    }, [currentAircraft]);

    // 2. 根據機型過濾可用選項
    const filteredByModel = useMemo(() => {
        return subjectData.data.filter(opt => opt.aircraft_model === currentAircraft);
    }, [currentAircraft]);

    // 3. 取得不重複的戰術類別
    const availableTactics = useMemo(() => {
        const tactics = filteredByModel.map(item => item.tactic);
        return [...new Set(tactics)];
    }, [filteredByModel]);

    // 4. 根據戰術過濾具體課目
    const availableSubjects = useMemo(() => {
        return filteredByModel.filter(item => item.tactic === selectedTactic);
    }, [filteredByModel, selectedTactic]);

    // --- 自動連動邏輯 ---
    // 當機型改變時，選中該機型的第一個戰術
    useEffect(() => {
        if (availableTactics.length > 0) {
            setSelectedTactic(availableTactics[0]);
        } else {
            setSelectedTactic('');
        }
    }, [availableTactics]);

    // 當戰術或可用課目改變時，選中該類別的第一個課目
    useEffect(() => {
        if (availableSubjects.length > 0) {
            setSelectedSubjectId(availableSubjects[0].id.toString());
        } else {
            setSelectedSubjectId('');
        }
    }, [availableSubjects]);

    const handleAdd = () => {
        const subjectObj = subjectData.data.find(opt => opt.id.toString() === selectedSubjectId);
        if (!subjectObj) return;

        const newMission = {
            id: `subject-${Date.now()}`, // 前端唯一 ID
            subject_id: subjectObj.id,   // API 原始 ID
            category: subjectObj.tactic,
            subject_name: subjectObj.display_label,
            mission_type: subjectObj.mission_type,
            wave_no: missions.length + 1
        };

        const updated = [...missions, newMission];
        setMissions(updated);
        if (onUpdate) onUpdate(updated);
    };

    const handleDelete = (id) => {
        const updated = missions.filter(m => m.id !== id);
        // 刪除後重新計算波次 wave_no
        const reOrdered = updated.map((m, idx) => ({ ...m, wave_no: idx + 1 }));
        setMissions(reOrdered);
        if (onUpdate) onUpdate(reOrdered);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = missions.findIndex((i) => i.id === active.id);
            const newIndex = missions.findIndex((i) => i.id === over.id);
            const moved = arrayMove(missions, oldIndex, newIndex);
            
            // 排序後重新計算波次
            const updated = moved.map((m, idx) => ({ ...m, wave_no: idx + 1 }));
            setMissions(updated);
            if (onUpdate) onUpdate(updated);
        }
    };

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: { distance: 8 },
    }));

    return (
        <div className="flex flex-col w-[400px] h-full gap-[10px]">
            {/* 戰術選擇 */}
            <select 
                value={selectedTactic}
                onChange={(e) => setSelectedTactic(e.target.value)}
                className="cyber-select w-full"
            >
                {availableTactics.length > 0 ? (
                    availableTactics.map(t => (
                        <option key={t} value={t}>
                            {t === 'AWD' ? '基本 (AWD)' : t === 'BWD' ? '戰術 (BWD)' : t === 'RDR' ? '雷達 (RDR)' : t}
                        </option>
                    ))
                ) : (
                    <option value="">無可用戰術</option>
                )}
            </select>

            {/* 具體課目選擇 */}
            <div className="flex w-full gap-[5px]">
                <select 
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    className="cyber-select flex-1"
                >
                    {availableSubjects.map(sub => (
                        <option key={sub.id} value={sub.id.toString()}>
                            {sub.display_label}
                        </option>
                    ))}
                </select>
                <div 
                    onClick={handleAdd}
                    disabled={!selectedSubjectId}
                    className="flex px-[20px] py-[8px] justify-center bg-[#00FFFF] text-black font-black rounded-xl cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <IoAdd size={20} color="black"/>
                </div>
            </div>

            {/* 拖曳列表區域 */}
            <div className="w-full flex-1 p-4 bg-[#000000]/40 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-y-auto custom-scrollbar">
                <DndContext 
                    sensors={sensors} 
                    collisionDetection={closestCenter} 
                    modifiers={[restrictToVerticalAxis]} 
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={missions.map(m => m.id)} strategy={verticalListSortingStrategy}>
                        <div className="flex flex-col gap-2">
                            {missions.map((mission, index) => (
                                <SubjectItems key={mission.id} item={mission} index={index} onDelete={handleDelete} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}

export default MissionSubject;