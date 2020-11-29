import axios from 'axios';

const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zQJ1MDfaLGugJUYLvtnB8s4amvvKRLfZ";



export const fetchData = async () => {
  try {
    const { data: { results }} = await axios.get(url);

    const modifieddata = {
      books: results.books,
    }
    return modifieddata;
  } catch (error) {
    console.log("fech faild");
  }
  
  
}