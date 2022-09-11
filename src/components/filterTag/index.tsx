import { useEffect, useState } from "react";
import { Layout } from "@app/ui";
import { TouchableButton } from "./styled";
import { useChangeTheme } from "@app/lib/hooks";
import { useNotes } from "@app/lib/hooks";
import { activesNotes, completedNotes } from "./helpers";

const FilterTag = ({ callback }) => {
  const [noteState, setNoteState] = useNotes(); // $ Debe estar al pendiente de esta data, para así poder manipularla.
  const [colorId, setColorId] = useState(1);
  const [theme, setTheme] = useChangeTheme();
  const defaultTextColor = theme ? "hsl(234, 11%, 52%)" : "hsl(236, 9%, 61%)";

  const handleShowAll = () => {
    setColorId(1);
    callback(noteState);
  };

  const handleShowActive = () => {
    const newData = activesNotes({ arrNotes: noteState });

    setColorId(2);
    callback(newData);
  };

  const handleShowCompleted = () => {
    const newData = completedNotes({ arrNotes: noteState });

    setColorId(3);
    callback(newData);
  };

  const handlers = {
    1: handleShowAll,
    2: handleShowActive,
    3: handleShowCompleted,
  };

  useEffect(() => {
    handlers[colorId]();
  }, [noteState]);

  return (
    <Layout style={{ justifyContent: "space-between" }}>
      <TouchableButton
        onPress={handleShowAll}
        text="All"
        style={{ color: `${colorId == 1 ? "hsl(220, 98%, 61%)" : defaultTextColor}` }}
      />
      <TouchableButton
        onPress={handleShowActive}
        text="Active"
        style={{ color: `${colorId == 2 ? "hsl(220, 98%, 61%)" : defaultTextColor}` }}
      />
      <TouchableButton
        onPress={handleShowCompleted}
        text="Completed"
        style={{ color: `${colorId == 3 ? "hsl(220, 98%, 61%)" : defaultTextColor}` }}
      />
    </Layout>
  );
};

export { FilterTag };
