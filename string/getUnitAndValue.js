function getUnitAndValue(string) {
  const groups = string.match(/(?<value>-?[0-9.]+)(?<unit>[%A-z]+)?/).groups;
  return groups;
}

// sample
// getUnitAndValue('10px') // {value: 10, unit: 'px'}
