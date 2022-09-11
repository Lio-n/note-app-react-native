import { ViewStyle } from "react-native";
import { removeCompleted } from "./helpers";
import { Root, ClearButton, Body } from "./styled";
import { useNotes } from "@app/lib/hooks";

// $ Recibe la longitud de la data desde afuera para que se mantenga actualizada en base a los filtros.
const ActionsTag = ({ style, lenghtOfList }: { style?: ViewStyle; lenghtOfList: number }) => {
  const [noteState, setNoteState] = useNotes();

  const onPress = () => {
    const newData = removeCompleted({ arrNotes: noteState });
    setNoteState(newData);
  };

  return (
    <Root style={style}>
      <Body>{lenghtOfList} items left</Body>
      <ClearButton onPress={onPress} />
    </Root>
  );
};

export { ActionsTag };
