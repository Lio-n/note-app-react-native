import { useNotes } from "@app/lib/hooks";
import { MyButton, Layout, Input } from "@app/ui";
import { useState } from "react";

const MyForm = () => {
  const [textInput, setTextInput] = useState("");
  const [noteState, setNoteState] = useNotes();

  const onPress = () => {
    if (textInput == "") return;

    const note: NoteData = {
      key: noteState[noteState.length - 1]?.key + 1 || 1,
      text: textInput,
      isCompleted: false,
    };

    setNoteState([...noteState, note]);
    setTextInput("");
  };

  return (
    <Layout style={{ marginBottom: 16 }}>
      <MyButton onPress={onPress} style={{ marginRight: 16 }} />
      <Input
        placeholder="Create a new todo..."
        onChangeText={(text: string) => setTextInput(text)}
        defaultValue={textInput}
        style={{ width: "75%" }}
      />
    </Layout>
  );
};

export { MyForm };
