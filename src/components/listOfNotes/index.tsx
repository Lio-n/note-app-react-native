import { ScrollView, View } from "react-native";
import { CardNote } from "../cardNote";
import { Li, NoTodoItem } from "./styled";
import { defineStylesForCardNote } from "./helpers";

const ListOfNotes = ({ data }: { data: NoteData[] }) => {
  const RenderList = () => {
    return (
      <>
        {data.map((item: NoteData, index: number) => (
          <Li key={index} style={{ borderBottomWidth: index === data.length - 1 ? 0 : 1 }}>
            <CardNote
              data={{ text: item.text, key: item.key }}
              isCompleted={item.isCompleted}
              style={defineStylesForCardNote({ index, lengthData: data.length })}
            />
          </Li>
        ))}
      </>
    );
  };

  return (
    <View style={{ height: "50%", width: "100%", marginBottom: 20 }}>
      {data.length !== 0 && (
        <View>
          <ScrollView>
            <RenderList />
          </ScrollView>
        </View>
      )}
      {data.length === 0 && <NoTodoItem />}
    </View>
  );
};

export { ListOfNotes };
