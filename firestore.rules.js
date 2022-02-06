service cloud.firestore {
  match /databases/{database}/documents {
    function isPublic() {
      return resource.data.visibility == "public";
    }

    match /grades/{document} {
     allow read: if isPublic(); // Cannot read unless marked as "public".
     allow write: if false; // Nobody except Admin can update the documents.
    }
  }
}
