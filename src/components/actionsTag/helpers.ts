const removeCompleted = ({ arrNotes }: { arrNotes: NoteData[] }) =>
  arrNotes.filter((item) => item.isCompleted === false);

export { removeCompleted };
