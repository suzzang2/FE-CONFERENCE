"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createNote } from "../components/CreateBtn";
import '../globals.css';

export default function NotesPages() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // 클라이언트에서 fetch로 데이터를 가져옵니다.
        fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', {
            cache: 'no-store'
        })
            .then((response) => response.json())
            .then((data) => setNotes(data?.items || []))
            //새로고침
            .catch((error) => console.error("Failed to fetch notes:", error));
    }, []);

    return (
        
        <div>
            
            <h1>[ Notes ]</h1>
            <div>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
            <div id='inputs'>  
                <input
                    id="titleInput"
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    id="contentInput"
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                />
                <button id='createBtn' onClick={() => createNote(title, content)}>Create Note</button>
            </div>
        </div>
    );
}

function Note({ note }) {
    const { id, title } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2 id='titles'>- {title}</h2>
            </div>
        </Link>
    );
}
