import firebase from 'firebase';
import 'firebase/auth';

const getUid = () => firebase.auth().currentUser?.uid;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUid };
