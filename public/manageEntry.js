// manageEntry.js
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

export const editEntry = async (id, element) => {
   // 입력 필드에서 새로운 author와 message 값을 가져옵니다.
   const entry = document.getElementById(id);
   const newAuthor = entry.querySelector('.edit-form .author').value;
   const newMessage = entry.querySelector('.edit-form .message').value;

   try {
      const response = await fetch(`/guestbook/${id}`, {
         method: 'PUT',  
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
      toggleEditForm(id); // 수정 완료 후 폼을 다시 view mode로 전환
   } catch (error) {
      alert("Error updating entry");
      console.error("Error:", error);
   }
};

// toggleEditForm 함수
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

   // display 스타일을 토글하여 보이기/숨기기
   editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
   viewForm.style.display = viewForm.style.display === 'none' ? 'block' : 'none';
};
