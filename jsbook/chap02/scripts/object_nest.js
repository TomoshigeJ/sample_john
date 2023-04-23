let book = {
  title: 'JavaScript本格入門',
  author: {
    name: '山田祥寛',
    address: '千葉県小金井市三芳町1-1-1',
  },
  price: 2980,
};
  
console.log(book.author.name);
console.log(book['author']['name']);
