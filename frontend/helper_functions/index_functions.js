import mergeSort from './merge_sort';

export const notesObjToArr = (notesObj) => {
  const notes = [];

  for (let id in notesObj) {
    notes.push(notesObj[id]);
  }

  return notes;
};

export const idsObjToNotesArr = (notesObj, idsObj) => {
  const notes = [];

  for (let id in idsObj) {
    notes.push(notesObj[id]);
  }

  return notes;
};

export const sortNotesByUpdatedAt = (note1, note2) => {
  if (note1.updated_at > note2.updated_at) {
    return -1;
  } else if (note1.updated_at === note2.updated_at) {
    return 0;
  } else {
    return 1;
  }
};

export const mergeSortNotes = (notes) => {
  return mergeSort(notes, sortNotesByUpdatedAt);
};
