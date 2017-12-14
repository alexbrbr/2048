function moveLineToLeft(line) {
  const valuesInLine = line.filter(tile => tile.value !== '').length;
  if (valuesInLine === 0) {
    return line;
  }
  if (valuesInLine === 1) {
    const value = line.find(tile => tile.value !== '').value;
    line.map(tile => tile.value = '');
    line[0].value = value;
    return line;
  }
  if (valuesInLine === 2) {
    const firstValue = line.find(tile => tile.value !== '').value;
    const bothValuesAreSame = line.filter(tile => tile.value === firstValue).length === 2;

    if (bothValuesAreSame) {
      line.map(tile => tile.value = '');
      line[0].value = firstValue * 2;
      return line;
    }
    else {
      const bothValues = [...line]
        .map(obj => Object.assign({}, obj)) // because JS object refs are shared
        .filter(tile => tile.value !== '');

      const immutableValues = [...bothValues];
      line[0].value = immutableValues[0].value;
      line[1].value = immutableValues[1].value;
      line[2].value = '';
      line[3].value = '';
      return line;
    }
  }
  if (valuesInLine >= 3) {
    const values = line.map(tile => tile.value);
    const uniqueValues = [...new Set(values)];
    if (uniqueValues.length === 4) { // 4 including ''
      return line
        .map((tile, index) => Object.assign({}, tile, {value: uniqueValues[index]}));
    }
    else { // 3 including ''
      for (let i = 0; i < values.length; i += 1) {
        if (values[i] === values[i+1]) {
          values[i] = values[i] * 2 || '';
          values[i+1] = '';
        }
      }

      const uniqueValues = values.filter(v => v !== '');

      return line
       .map((tile, index) => Object.assign({}, tile, {value: uniqueValues[index] || ''}));
    }
  }

  return line;
};

function moveLineToRight(line) {
  const movedToLeftLine = moveLineToLeft(line);
  const valuesToRight = movedToLeftLine
    .map(tile => tile.value)
    .reverse();
  const movedToRightLine = line
    .map((tile, index) => Object.assign({}, tile, {value: valuesToRight[index]}));
  return movedToRightLine;
}

export {
  moveLineToLeft,
  moveLineToRight
};
