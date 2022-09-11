interface HelpersParams {
  arrNotes: NoteData[];
  key: number;
}

const changeValueCompleted = ({ arrNotes, key }: HelpersParams): NoteData[] => {
  const indexNote = arrNotes.findIndex((item) => item.key === key);

  return [
    ...arrNotes.slice(0, indexNote),
    { ...arrNotes[indexNote], isCompleted: !arrNotes[indexNote].isCompleted },
    ...arrNotes.slice(indexNote + 1),
  ];
};

const removeNote = ({ arrNotes, key }: HelpersParams): NoteData[] =>
  arrNotes.filter((item) => item.key !== key);

export { removeNote, changeValueCompleted };
