import { configureStore } from '@reduxjs/toolkit';

import loggerMiddleware from './middleware/logger';
import projects from './slices/projects';
import selectedProject from './slices/selectedProject';
import classesSlice from './slices/classes/classesSlice';
import selectedSlice from './slices/classes/selectedSlice';

import getAllClassesMiddleware from './middleware/getAllClassesMiddleware';
import addClassMiddleware from './middleware/addClassMiddleware';
import addDayMiddleware from './middleware/addDayMiddleware';
import getAllDaysMiddleware from './middleware/getAllDaysMiddleware';
import addEventMiddleware from './middleware/addEventMiddleware';
import getAllEventsMiddleware from './middleware/getAllEventsMiddleware';
import studentSlice from './slices/classes/studentSlice';
import addStudentMiddleware from './middleware/addStudentMiddleware';
import getAllStudentsMiddleware from './middleware/getAllStudentsMiddleware';
import addMentoringSessionMiddleware from './middleware/addMentoringSessionMiddleware';
import getAllMentorSessionsMiddleware from './middleware/getAllMentorSessionsMiddleware';

const store = configureStore({
  reducer: {
    projects,
    selectedProject,
    classes: classesSlice,
    selected: selectedSlice,
    students: studentSlice,
  },

  middleware: [
    getAllClassesMiddleware,
    addClassMiddleware,
    getAllDaysMiddleware,
    addDayMiddleware,
    addEventMiddleware,
    getAllEventsMiddleware,
    addStudentMiddleware,
    getAllStudentsMiddleware,
    getAllMentorSessionsMiddleware,
    addMentoringSessionMiddleware,
  ],
});

export default store;
