class LocalStorageManager {
  // Check if local storage is supported by the browser
  static isLocalStorageSupported(): boolean {
    try {
      const testKey = "__testKey__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Get an item from local storage by key
  static get(key: string): any {
    let data = localStorage.getItem(key)
    if (this.isLocalStorageSupported() && data) {
      return JSON.parse(data);
    } else {
      console.error("Local storage is not supported in this browser.");
      return null;
    }
  }

  // Set an item in local storage by key
  static set(key: string, value: string): void {
    if (this.isLocalStorageSupported()) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  }

  // Remove an item from local storage by key
  static removeItem(key: string): void {
    if (this.isLocalStorageSupported()) {
      localStorage.removeItem(key);
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  }

  // Clear all items from local storage
  static clear(): void {
    if (this.isLocalStorageSupported()) {
      localStorage.clear();
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  }
}

export default LocalStorageManager;
