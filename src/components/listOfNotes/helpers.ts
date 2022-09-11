const defineStylesForCardNote = ({ index, lengthData }: { index: number; lengthData: number }) => {
  const styleFirstItem = { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
  const styleMidItem = { borderRadius: 0 };
  const styleLastItem = { borderTopLeftRadius: 0, borderTopRightRadius: 0 };

  if (index === 0 && lengthData === 1) {
    // si es el unico elemento de la lista, use el style por defecto.
    return;
  }

  if (index === 0 && lengthData !== 1) {
    // si es el primer elemento de la lista pero no el unico.
    return styleFirstItem;
  }

  if (index === lengthData - 1) {
    // si es el utilmo elemento de la lista.
    return styleLastItem;
  }

  return styleMidItem;
};

export { defineStylesForCardNote };
