export const formatedDescription = (description) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const paragraphs = doc.querySelectorAll('p');
    const filteredParagraphs = Array.from(paragraphs).filter(paragraph => paragraph.textContent.trim().length > 3);
    const firstFilteredParagraph = filteredParagraphs[0];
    
    if (firstFilteredParagraph) {
      const words = firstFilteredParagraph.textContent.trim().split(/\s+/); 
      const trimmedText = words.slice(0, 17).join(' '); 
      return trimmedText;
    } else {
        return 'No description';
    }
}
