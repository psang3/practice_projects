import courses from './courses';
import studyGroups from './studyGroups';

type Course = {id: number, studyGroupId: number, title: string, keywords: string[], eventType: string}

type studyGroups = 
  {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string,
  }

function searchEvents(options: SearchEventsOptions){
  let events = [...courses, ...studyGroups];
  if(options.eventType === 'courses'){
    events = courses;
  } else{
    events = studyGroups;
  }
}

type SearchEventsOptions = {
  query: number | string;
  eventType: 'courses' | 'groups';
}