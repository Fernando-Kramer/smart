export class LocalStorageService {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  saveObject(object: any) {
    const objectAsString = JSON.stringify(object);
    localStorage.setItem(this.key, objectAsString);
  }

  getObject() {
    const objectAsString = localStorage.getItem(this.key);
    if (objectAsString) {
      const object = JSON.parse(objectAsString);
      return object;
    } else {
      return null;
    }
  }

  removeObject() {
    localStorage.removeItem(this.key);
  }
}
