export class ClassList {
  static create(classes: object) {
    return Object
      .entries(classes)
      .filter(entry => entry[1])
      .map(entry => entry[0])
      .join(' ');
  }
}
