// function to get average time to read the post
const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
  };

  export default getReadingTime;