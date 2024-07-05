import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';

const ArticleHTML = ({ content }) => {
  // Sanitize the content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content);

  useEffect(() => {
    // Function to load the Twitter script
    const loadTwitterScript = () => {
      if (!window.twttr) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);
      } else {
        window.twttr.widgets.load();
      }
    };

    // Load the Twitter script
    loadTwitterScript();
  }, [sanitizedContent]);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
  );
};

export default ArticleHTML;
