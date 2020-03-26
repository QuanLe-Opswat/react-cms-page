import firebase from 'firebase';

class AuthHelper {
  constructor() {
    this.app = firebase.initializeApp({
      apiKey: 'AIzaSyD8ErGJ365UjWpPbOToEY4VJ1ijSfckXmY',
      projectId: 'yup2be-home',
    });

    this.auth = firebase.auth();
    this.user = this.auth.currentUser;
    this.auth.onAuthStateChanged((user) => {
      this._change(user);
      console.log(user);
    });

    this.register = {};
  }

  _change(user) {
    this.user = user;
    for (let id in this.register) {
      if (this.register.hasOwnProperty(id)) {
        this.register[id](user);
      }
    }
  }

  getUser() {
    return this.user;
  }

  registerChange(id, func) {
    this.register[id] = func;
  }

  unregisterChange(id) {
    if (this.register.hasOwnProperty(id)) {
      delete this.register[id];
    }
  }

  async login(email, pass) {
    try {
      await this.auth.signInWithEmailAndPassword(email, pass);
    } catch (e) {
      return { ...e, error: true };
    }

    return { error: false };
  }
}

export default new AuthHelper();