const activesNotes = ({ arrNotes }: { arrNotes: NoteData[] }) =>
  arrNotes.filter((item) => item.isCompleted === false);

const completedNotes = ({ arrNotes }: { arrNotes: NoteData[] }) =>
  arrNotes.filter((item) => item.isCompleted === true);

export { activesNotes, completedNotes };
