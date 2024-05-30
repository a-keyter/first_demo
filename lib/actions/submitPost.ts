import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default async function submitPost(postType: string, title: string, content: string, userId: string) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            postType,
            title,
            content,
            userId,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}