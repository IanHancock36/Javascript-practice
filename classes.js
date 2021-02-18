

// Object Of Prototypes

//const bookProtos= {
  //  getSummary: function (){
    //    return `${this.title} was written by ${this.author} in ${this.year}`;
    //},
    //getAge: function (){
      //  const years = new Date().getFullYear() - this.year;
        //return `${this.title} is ${years} years old`;

    //}
//}
//creat the object 

//const book1 = Object.create(bookProtos);
//book1.title = "the rad book"
//book1.author = "how to talk yourself out of shooting yourself everymorning"
//book1.year = "1984"
//console.log(book1)


//other type of object creation 
//const book1 = Object.create(bookProtos, {
  //  title: {value: "book1"},
    //author: {value: "John Doe"},
    //year: {value: "who gives a fuck it is paper to burn"}
//});
//console.log(book1.title,book1.year,book1.author)


//CLASSES

class Book{
    constructor(title,author,year){
        this.author = author;
        this.title = title;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }

// Magazine subclass 

class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;

    }
}

//Instantiate Magazine
const mag1 = new Magazine('Mag 1 ','john', '2018','august');

console.log(mag1.getSummary); 
