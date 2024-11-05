import React from 'react';
import PropTypes from 'prop-types';

export function MyCard({ title, content, backgroundColor }) {
return (
   <div style={{
   backgroundColor: backgroundColor || '#f5f5f5',
   padding: '1rem',
   borderRadius: '8px',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   maxWidth: '300px',
   }}>
   <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
   <p>{content}</p>
   </div>
);
}

MyCard.propTypes = {
title: PropTypes.string,
content: PropTypes.string,
backgroundColor: PropTypes.string,
};

MyCard.defaultProps = {
title: 'Card Title',
content: 'This is a default card content.',
backgroundColor: '#f5f5f5',
};
