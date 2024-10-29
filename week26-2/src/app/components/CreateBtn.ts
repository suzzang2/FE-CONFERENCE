"use client";

      //post
export async function createNote(title: string, content: string) {
      if(confirm('Are you sure to create this note?')){
            console.log('Creating note:', title, content);
      }
      else{
            return;
      }

      await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            title: title,
            content: content,
            }),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            window.location.reload();
            }
            )
            .catch((error) => {
            console.error('Error:', error);
            
      });
}