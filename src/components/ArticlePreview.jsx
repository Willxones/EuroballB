import React from 'react';

const ArticlePreview = ({ htmlContent }) => {
    function extractAndTruncateText(htmlString, maxLength = 160) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const firstParagraph = doc.querySelector('p');
      
        if (firstParagraph) {
          let textContent = firstParagraph.textContent.trim();
      
          if (textContent.length > maxLength) {
            textContent = textContent.substring(0, maxLength) + '...';
          }
      
          return textContent;
        }
      
        return '';
      }
      
  const previewText = extractAndTruncateText(htmlContent);

  return (
    <div>
      <span>{previewText}</span>
    </div>
  );
};

export default ArticlePreview;
