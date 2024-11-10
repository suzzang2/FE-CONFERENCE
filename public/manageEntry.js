export const deleteEntry = async (id) => {
   if (!window.confirm("Are you sure you want to delete this entry?")) return;

   try {
      const response = await fetch(`/guestbook/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json'
         }
      });

      if (!response.ok) {
         const errorData = await response.json();
         alert(`Error: ${errorData.message}`);
         return;
      }

      const result = await response.json();
      alert(result.message); 
      location.reload(); // 완료되면 화면 새로고침
   } catch (error) {
      alert("Error deleting entry");
      console.error("Error:", error);
   }
};

export const saveEdit = (entryId) => {
   const entry = document.getElementById(entryId);
   const newAuthor = entry.querySelector('.edit-form .author').value;
   const newMessage = entry.querySelector('.edit-form .message').value;

   editEntry(entryId, newAuthor, newMessage);
};

export const editEntry = async (id, newAuthor, newMessage) => {
   try {
      const response = await fetch(`/guestbook/${id}`, {
         method: 'PATCH',  
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            author: newAuthor,
            message: newMessage
         }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         alert(`Error: ${errorData.message}`);
         return;
      }

      const result = await response.json();
      alert(result.message); 
      
      // 업데이트 후 수정 폼을 닫고 보기 모드로 전환
      toggleEditForm(id);
   } catch (error) {
      alert("Error updating entry");
      console.error("Error:", error);
   }
   location.reload(); 
};


export const toggleEditForm = (entryId) => {
   const entry = document.getElementById(entryId);

   if (!entry) {
      console.error(`Entry with ID ${entryId} not found.`);
      return;
   }

   const editForm = entry.querySelector('.edit-form');
   const viewForm = entry.querySelector('.view-form');

   if (!editForm || !viewForm) {
      console.error(`Edit form or view form not found for entry ${entryId}`);
      return;
   }

   editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
   viewForm.style.display = viewForm.style.display === 'none' ? 'block' : 'none';
};
