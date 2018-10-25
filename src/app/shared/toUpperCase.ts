export default (words: string): string => {

  if (typeof words === 'string') {

    const name = words.split(' ');

    if (name.length === 2) {
      return name[0].charAt(0).toUpperCase() + name[0].slice(1) + ' ' + name[1].charAt(0).toUpperCase() + name[1].slice(1);
    } else {
      return name[0].charAt(0).toUpperCase() + words.slice(1);
    }
  }
  return words;
};
