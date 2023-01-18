import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const docRef = doc(db, '/items', 'McHOmGjJSnDgv0xpXiUX');

export function getDocRef() {
    getDoc(docRef)
    .then((docSnapShot) => {
        if (docSnapShot.exists()) {
            console.log('El item buscado es: ', docSnapShot.data())
        }
    })
}