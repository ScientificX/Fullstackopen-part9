import { NewDiaryEntry, Weather, Visibility } from '../data/types';

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseComment = (comment: any): string => {
    if (!comment || !isString(comment)) {
        throw new Error("Incorrect or missing comment: " + comment);
    };
    return comment;
};

const parseWeather = (weather: any): Weather => {
    if (!weather || !isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather)
    }
    return weather;
  };

const isVisibility = (param : any) : param is Visibility => {
    return Object.values(Visibility).includes(param)
}

const parseVisibilty = (param : any) : Visibility => {
    if (!isVisibility(param) || !param){
        throw new Error("Incorrect or missing visibility:" + param)
    }
    return param
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        comment: parseComment(object.comment),
        weather: parseWeather(object.weather),
        visibility: parseVisibilty(object.visibility)
    };
    return newEntry;
};



export default toNewDiaryEntry;
