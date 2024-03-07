import React from 'react';
import axios from 'axios';

function DeleteButton({ itemId, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/contact-list-create/${itemId}`);
      
      if (onDelete) {
        onDelete(itemId);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;