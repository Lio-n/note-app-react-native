import { Layout, CrossButton, Body, CheckButton } from "@app/ui";
import { BodyDeclaration } from "./styled";
import { ViewStyle, View } from "react-native";
import { useNotes } from "@app/lib/hooks";
import { removeNote, changeValueCompleted } from "./helpers";

interface CardNoteProps {
  data: { text: string; key: number };
  isCompleted: boolean;
  style?: ViewStyle;
}

const CardNote = ({ data, style, isCompleted }: CardNoteProps) => {
  const [noteState, setNoteState] = useNotes();

  const changeToCompleted = (): void => {
    const newArr = changeValueCompleted({ arrNotes: noteState, key: data.key });
    setNoteState(newArr);
  };

  const deleteNote = (): void => {
    const newArrNotes = removeNote({ arrNotes: noteState, key: data.key });
    setNoteState(newArrNotes);
  };

  return (
    <Layout style={style}>
      <CheckButton
        onPress={changeToCompleted}
        style={{ marginRight: 16 }}
        isChecked={isCompleted}
      />

      {isCompleted ? <BodyDeclaration>{data.text}</BodyDeclaration> : <Body>{data.text}</Body>}
      <View style={{ alignSelf: "center", right: 32, position: "absolute" }}>
        <CrossButton onPress={deleteNote} />
      </View>
    </Layout>
  );
};

export { CardNote };
