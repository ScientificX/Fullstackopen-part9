import diaryData from '../../data/diaries';

import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../../data/types';

const diaries: Array<DiaryEntry> = diaryData;

const getEnteries = (): Array<DiaryEntry> => {
    return diaries;
};

// const addEntry = () = {
//     return null;
// };

// a method of selecting or filtering types with the pick utility type
// const getNonSensitiveEntries = () : Array<Pick<DiaryEntry, "id" | "date" | "weather" | "visibility" >> => {

// }
// // doing it via a shorter format
// const getNonSensitiveEntries = () : Pick<DiaryEntry, "id" | "date" | "weather" | "visibility" >[] => {

// }
//or we define a new type NonSensitiveDiaryEntry with comments ommited using Omit syntax
const getNonSensitiveDiaryEntry = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...entry
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;

};

const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    return entry;
}

export default {
    getEnteries,
    getNonSensitiveDiaryEntry,
    addDiary,
    findById,

};
