// Added on CCS-4, part 2 - Moving handlers to their new home
//for CCS-3, students merely need to create an empty file

// Add placeholder statement for transition into models. Create a constant of booksData and require the path to access it.
const booksData = require('../data/data');

//Direction: set a constant of getAllBooks and equate that to an asynchronous function where you have a request, response and the next keyword as a parameter before an arrow function.
const getAllBooks = async (req, res, next) => {
//Direction: within the arrow function's object, stage a try/catch statement. Make sure to account for error handling with an error message.
    try {
        // add the await keyword
        await
        //then chain the res.status().json() message/data you're passing through
        res
        .status(200)
        .json({ success: { message: "Found all books!" }, 
        //revise the data object like so
        //booksData had an empty object
        data: booksData, statusCode: 200 }); //statusCode successfully triggered after insertion of data.js
            /*
            [
            //insert data.js object w/o uuid
            {  
                //add idea manually 1,2
                title: "Fun Home: A Family Tragicomic",
                author: "Alison Bechdel",
                publisher: "Mariner Books",
                genre: "memoir",
                pages: 232,
                rating: 5,
                synopsis: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
                image: "fun-home.jpg"
              },{
                title: "Watchmen",
                author: "Alan Moore",
                publisher: "DC Comics",
                genre: "superhero",
                pages: 416,
                rating: 5,
                synopsis: "This Hugo Award-winning graphic novel chronicles the fall from grace of a group of super-heroes plagued by all-too-human failings. Along the way, the concept of the super-hero is dissected as the heroes are stalked by an unknown assassin.\nOne of the most influential graphic novels of all time and a perennial best-seller, Watchmen has been studied on college campuses across the nation and is considered a gateway \"title\", leading readers to other graphic novels such as V for Vendetta, Batman: The Dark Knight Returns, and The Sandman series.",
                image: "watchmen.jpg"
              },{
                title: "Hunter X Hunter Vol. 1",
                author: "Yoshihiro Togashi",
                publisher: "VIZ Media LLC",
                genre: "manga",
                pages: 184,
                rating: 5,
                synopsis: "Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.\nGon might be a country boy, but he has high aspirations. Despite his Aunt Mito's protests, Gon decides to follow in his father's footsteps and become a legendary Hunter. The Hunter hopefuls begin their journey by storm-tossed ship, where Gon meets Leorio and Kurapika, the only other applicants who aren't devastated by bouts of seasickness.\nHaving survived the terrors of the high seas, Gon and his companions now have to prove their worth in a variety of tests in order to find the elusive Exam Hall. And once they get there, will they ever leave alive...?",
                image: "hunter-x-hunter.jpg"
              },{ 
                title: "Lumberjanes Vol. 1",
                author: "Noelle Stevenson",
                publisher: "BOOM! Box",
                genre: "coming-of-age",
                pages: 128,
                rating: 4,
                synopsis: "At Miss Qiunzilla Thiskwin Penniquiqul Thistle Crumpet's camp for hard-core lady-types, things are not what they seem. Three-eyed foxes. Secret caves. Anagrams. Luckily, Jo, April, Mal, Molly, and Ripley are five rad, butt-kicking best pals determined to have an awesome summer together... And they're not gonna let a magical quest or an array of supernatural critters get in their way! The mystery keeps getting bigger, and it all begins here.",
                image: "lumberjanes.jpg"
              },{ 
                title: "One Piece Vol. 1: Romance Dawn",
                author: "Eiichiro Oda",
                publisher: "VIZ Media LLC",
                genre: "manga",
                pages: 210,
                rating: 5,
                synopsis: "A new shonen sensation in Japan, this series features Monkey D. Luffy, whose main ambition is to become a pirate. Eating the Gum-Gum Fruit gives him strange powers but also invokes the fruit's curse: anybody who consumes it can never learn to swim. Nevertheless, Monkey and his crewmate Roronoa Zoro, master of the three-sword fighting style, sail the Seven Seas of swashbuckling adventure in search of the elusive treasure \"One Piece.\"",
                image: "one-piece.jpg"
              },{ 
                title: "Wake: The Hidden History of Women-Led Slave Revolts",
                author: "Rebecca Hall",
                publisher: "Simon Schuster",
                genre: "nonfiction",
                pages: 208,
                rating: 5,
                synopsis: "Part graphic novel, part memoir, Wake is an imaginative tour-de-force that tells the story of women-led slave revolts and chronicles scholar Rebecca Hall’s efforts to uncover the truth about these women warriors who, until now, have been left off the historical record.\nWomen warriors planned and led slave revolts on slave ships during the Middle Passage. They fought their enslavers throughout the Americas. And then they were erased from history.\nWake tells the story of Dr. Rebecca Hall, a historian, granddaughter of slaves, and a woman haunted by the legacy of slavery. The accepted history of slave revolts has always told her that enslaved women took a back seat. But Rebecca decides to look deeper, and her journey takes her through old court records, slave ship captain’s logs, crumbling correspondence, and even the forensic evidence from the bones of enslaved women from the “negro burying ground” uncovered in Manhattan. She finds women warriors everywhere.\nUsing in-depth archival research and a measured use of historical imagination, Rebecca constructs the likely pasts of Adono and Alele, women rebels who fought for freedom during the Middle Passage, as well as the stories of women who led slave revolts in Colonial New York. We also follow Rebecca’s own story as the legacy of slavery shapes life, both during her time as a successful attorney and later as a historian seeking the past that haunts her.\nIllustrated beautifully in black and white, Wake will take its place alongside classics of the graphic novel \"genre\", like Marjane Satrapi’s Persepolis and Art Spiegelman’s Maus. The story of both a personal and national legacy, it is a powerful reminder that while the past is gone, we still live in its wake.",
                image: "wake.jpg"
              },{
                title: "Black Panther: A Nation Under Our Feet Book 1",
                author: "Ta-Nehisi Coates",
                publisher: "Marvel",
                genre: "superhero",
                pages: 144,
                rating: 3,
                synopsis: "A new era begins for the Black Panther! MacArthur Genius and National Book Award-winning writer Ta-Nehisi Coates (Between the World and Me) takes the helm, confronting T'Challa with a dramatic upheaval in Wakanda that will make leading the African nation tougher than ever before. When a superhuman terrorist group that calls itself The People sparks a violent uprising, the land famed for its incredible technology and proud warrior traditions will be thrown into turmoil. If Wakanda is to survive, it must adapt--but can its monarch, one in a long line of Black Panthers, survive the necessary change? Heavy lies the head that wears the cowl!",
                image: "black-panther.jpg"
              },{
                title: "The Walking Dead, Vol. 1: Days Gone Bye",
                author: "Robert Kirkman",
                publisher: "Image Comics",
                genre: "dystopian",
                pages: 144,
                rating: 4,
                synopsis: "The world we knew is gone. The world of commerce and frivolous necessity has been replaced by a world of survival and responsibility. An epidemic of apocalyptic proportions has swept the globe, causing the dead to rise and feed on the living. In a matter of months society has crumbled: no government, no grocery stores, no mail delivery, no cable TV. In a world ruled by the dead, the survivors are forced to finally start living.",
                image: "the-walking-dead.jpg"
              },{
                title: "March: Book One",
                author: "John Lewis",
                publisher: "Top Shelf Productions",
                genre: "autobiography",
                pages: 128,
                rating: 5,
                synopsis: "March is a vivid first-hand account of John Lewis’ lifelong struggle for civil and human rights, meditating in the modern age on the distance traveled since the days of Jim Crow and segregation. Rooted in Lewis’ personal story, it also reflects on the highs and lows of the broader civil rights movement.\nBook One spans John Lewis’ youth in rural Alabama, his life-changing meeting with Martin Luther King, Jr., the birth of the Nashville Student Movement, and their battle to tear down segregation through nonviolent lunch counter sit-ins, building to a stunning climax on the steps of City Hall.\nMany years ago, John Lewis and other student activists drew inspiration from the 1950s comic book \"Martin Luther King and the Montgomery Story.\" Now, his own comics bring those days to life for a new audience, testifying to a movement whose echoes will be heard for generations.",
                image: "march.jpg"
              },{
                title: "Batman: The Dark Knight Returns",
                author: "Frank Miller",
                publisher: "DC Comics",
                genre: "superhero",
                pages: 197,
                rating: 3,
                synopsis: "This masterpiece of modern comics storytelling brings to vivid life a dark world and an even darker man. Together with inker Klaus Janson and colorist Lynn Varley, writer/artist Frank Miller completely reinvents the legend of Batman in his saga of a near-future Gotham City gone to rot, ten years after the Dark Knight's retirement.\nCrime runs rampant in the streets, and the man who was Batman is still tortured by the memories of his parents' murders. As civil society crumbles around him, Bruce Wayne's long-suppressed vigilante side finally breaks free of its self-imposed shackles.\nThe Dark Knight returns in a blaze of fury, taking on a whole new generation of criminals and matching their level of violence. He is soon joined by this generation's Robin—a girl named Carrie Kelley, who proves to be just as invaluable as her predecessors.\nBut can Batman and Robin deal with the threat posed by their deadliest enemies, after years of incarceration have made them into perfect psychopaths? And more important, can anyone survive the coming fallout of an undeclared war between the superpowers—or a clash of what were once the world's greatest superheroes?\nOver fifteen years after its debut, Batman: The Dark Knight Returns remains an undisputed classic and one of the most influential stories ever told in the comics medium.",
                image: "batman.jpg"
              },{
                title: "Queer: A Graphic History",
                author: "Meg-John Barker",
                publisher: "Icon Books",
                genre: "nonfiction",
                pages: 176,
                rating: 4,
                synopsis: "Activist-academic Meg-John Barker and cartoonist Julia Scheele illuminate the histories of queer thought and LGBTQ+ action in this groundbreaking non-fiction graphic novel.\nFrom identity politics and gender roles to privilege and exclusion, Queer explores how we came to view sex, gender and sexuality in the ways that we do; how these ideas get tangled up with our culture and our understanding of biology, psychology and sexology; and how these views have been disputed and challenged.\nAlong the way we look at key landmarks which shift our perspective of what’s ‘normal’ – Alfred Kinsey’s view of sexuality as a spectrum, Judith Butler’s view of gendered behaviour as a performance, the play Wicked, or moments in Casino Royale when we’re invited to view James Bond with the kind of desiring gaze usually directed at female bodies in mainstream media.\nPresented in a brilliantly engaging and witty style, this is a unique portrait of the universe of queer thinking.",
                image: "queer.jpg"
              },{
                title: "Parable of the Sower",
                author: "Octavia E. Butler",
                publisher: "Harry N. Abrams",
                genre: "dystopian",
                pages: 284,
                rating: 4,
                synopsis: "In this graphic novel adaptation of Octavia E. Butler’s Parable of the Sower by Damian Duffy and John Jennings, the award-winning team behind Kindred: A Graphic Novel Adaptation, the \"author\" portrays a searing vision of America’s future. In the year 2024, the country is marred by unattended environmental and economic crises that lead to social chaos. Lauren Olamina, a preacher’s daughter living in Los Angeles, is protected from danger by the walls of her gated community. However, in a night of fire and death, what begins as a fight for survival soon leads to something much more: a startling vision of human destiny . . . and the birth of a new faith.",
                image: "parable-of-the-sower.jpg"
              }
        ]
          */
    
   
        //students do not know models at this time
         /*
      //await Book.find({}) // disabling for testing 
        //.then(books => 
         res
            .status(200)
            .json({ success: { message: "Found all books!" }, data: books, statusCode: 200 }));
        */
         
    } catch (err) {
        //test booksData, try data with data.js object - if pulling from data.js, even plain syntax triggers error. 
      res
        .status(400)
        .json({ error: { message: "Something went wrong getting all books!" }, statusCode: 400 });
    }
};

//Direction: set a constant of getBook and equate that to an asynchronous function where you have a request, response and the next keyword as a parameter before an arrow function.
const getBook = async (req, res, next) => {
    // Direction: set a constant of {id} and equate that to the req.params object.
    const { id } = req.params; //does work 

    //Direction: create a constant of foundBook and set that to the data.js object, then use chaining to find() that book via an arrow function, and begin a second chain of book.id and STRICTLY equate that to a numeric id using the Number method.
    const foundBook = booksData.find(book => book.id === Number(id));

    //Now, stage a try/catch statement. Make sure to account for error handling with an error message.
    try {
        // add the await keyword
        await
        //then chain the res.status().json() message/data you're passing through
        res
        .status(200)
        .json({ success: { message: "Found the book you are looking for!" }, 
        //reference the foundBook in the data value
        data: foundBook, statusCode: 200 }); //statusCode successfully triggered after insertion of data.js
    } catch (err) {
        res
          .status(400)
          .json({ error: { message: "Something went wrong retrieving a book!" }, statusCode: 400 });
    }

/*
//Direction: To generate a unique identifier using the uuid package, store the generated id in a variable and use it later in your code. Name the variable foundBookId

    //test 
    const foundBookId = uuid(); //does work
//Direction: create a constant of foundBook and set that to the data.js object. You will add a key value pair of id: foundBookId to the first line of each object BEFORE the title.
    const foundBook = [
        {  
            id: foundBookId,
            title: "Fun Home: A Family Tragicomic",
            author: "Alison Bechdel",
            publisher: "Mariner Books",
            genre: "memoir",
            pages: 232,
            rating: 5,
            synopsis: "In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.\nDistant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
            image: "fun-home.jpg"
          },{
            id: foundBookId,
            title: "Watchmen",
            author: "Alan Moore",
            publisher: "DC Comics",
            genre: "superhero",
            pages: 416,
            rating: 5,
            synopsis: "This Hugo Award-winning graphic novel chronicles the fall from grace of a group of super-heroes plagued by all-too-human failings. Along the way, the concept of the super-hero is dissected as the heroes are stalked by an unknown assassin.\nOne of the most influential graphic novels of all time and a perennial best-seller, Watchmen has been studied on college campuses across the nation and is considered a gateway \"title\", leading readers to other graphic novels such as V for Vendetta, Batman: The Dark Knight Returns, and The Sandman series.",
            image: "watchmen.jpg"
          },{
            id: foundBookId,
            title: "Hunter X Hunter Vol. 1",
            author: "Yoshihiro Togashi",
            publisher: "VIZ Media LLC",
            genre: "manga",
            pages: 184,
            rating: 5,
            synopsis: "Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.\nGon might be a country boy, but he has high aspirations. Despite his Aunt Mito's protests, Gon decides to follow in his father's footsteps and become a legendary Hunter. The Hunter hopefuls begin their journey by storm-tossed ship, where Gon meets Leorio and Kurapika, the only other applicants who aren't devastated by bouts of seasickness.\nHaving survived the terrors of the high seas, Gon and his companions now have to prove their worth in a variety of tests in order to find the elusive Exam Hall. And once they get there, will they ever leave alive...?",
            image: "hunter-x-hunter.jpg"
          },{ 
            id: foundBookId,
            title: "Lumberjanes Vol. 1",
            author: "Noelle Stevenson",
            publisher: "BOOM! Box",
            genre: "coming-of-age",
            pages: 128,
            rating: 4,
            synopsis: "At Miss Qiunzilla Thiskwin Penniquiqul Thistle Crumpet's camp for hard-core lady-types, things are not what they seem. Three-eyed foxes. Secret caves. Anagrams. Luckily, Jo, April, Mal, Molly, and Ripley are five rad, butt-kicking best pals determined to have an awesome summer together... And they're not gonna let a magical quest or an array of supernatural critters get in their way! The mystery keeps getting bigger, and it all begins here.",
            image: "lumberjanes.jpg"
          },{ 
            id: foundBookId,
            title: "One Piece Vol. 1: Romance Dawn",
            author: "Eiichiro Oda",
            publisher: "VIZ Media LLC",
            genre: "manga",
            pages: 210,
            rating: 5,
            synopsis: "A new shonen sensation in Japan, this series features Monkey D. Luffy, whose main ambition is to become a pirate. Eating the Gum-Gum Fruit gives him strange powers but also invokes the fruit's curse: anybody who consumes it can never learn to swim. Nevertheless, Monkey and his crewmate Roronoa Zoro, master of the three-sword fighting style, sail the Seven Seas of swashbuckling adventure in search of the elusive treasure \"One Piece.\"",
            image: "one-piece.jpg"
          },{ 
            id: foundBookId,
            title: "Wake: The Hidden History of Women-Led Slave Revolts",
            author: "Rebecca Hall",
            publisher: "Simon Schuster",
            genre: "nonfiction",
            pages: 208,
            rating: 5,
            synopsis: "Part graphic novel, part memoir, Wake is an imaginative tour-de-force that tells the story of women-led slave revolts and chronicles scholar Rebecca Hall’s efforts to uncover the truth about these women warriors who, until now, have been left off the historical record.\nWomen warriors planned and led slave revolts on slave ships during the Middle Passage. They fought their enslavers throughout the Americas. And then they were erased from history.\nWake tells the story of Dr. Rebecca Hall, a historian, granddaughter of slaves, and a woman haunted by the legacy of slavery. The accepted history of slave revolts has always told her that enslaved women took a back seat. But Rebecca decides to look deeper, and her journey takes her through old court records, slave ship captain’s logs, crumbling correspondence, and even the forensic evidence from the bones of enslaved women from the “negro burying ground” uncovered in Manhattan. She finds women warriors everywhere.\nUsing in-depth archival research and a measured use of historical imagination, Rebecca constructs the likely pasts of Adono and Alele, women rebels who fought for freedom during the Middle Passage, as well as the stories of women who led slave revolts in Colonial New York. We also follow Rebecca’s own story as the legacy of slavery shapes life, both during her time as a successful attorney and later as a historian seeking the past that haunts her.\nIllustrated beautifully in black and white, Wake will take its place alongside classics of the graphic novel \"genre\", like Marjane Satrapi’s Persepolis and Art Spiegelman’s Maus. The story of both a personal and national legacy, it is a powerful reminder that while the past is gone, we still live in its wake.",
            image: "wake.jpg"
          },{
            id: foundBookId,
            title: "Black Panther: A Nation Under Our Feet Book 1",
            author: "Ta-Nehisi Coates",
            publisher: "Marvel",
            genre: "superhero",
            pages: 144,
            rating: 3,
            synopsis: "A new era begins for the Black Panther! MacArthur Genius and National Book Award-winning writer Ta-Nehisi Coates (Between the World and Me) takes the helm, confronting T'Challa with a dramatic upheaval in Wakanda that will make leading the African nation tougher than ever before. When a superhuman terrorist group that calls itself The People sparks a violent uprising, the land famed for its incredible technology and proud warrior traditions will be thrown into turmoil. If Wakanda is to survive, it must adapt--but can its monarch, one in a long line of Black Panthers, survive the necessary change? Heavy lies the head that wears the cowl!",
            image: "black-panther.jpg"
          },{
            id: foundBookId,
            title: "The Walking Dead, Vol. 1: Days Gone Bye",
            author: "Robert Kirkman",
            publisher: "Image Comics",
            genre: "dystopian",
            pages: 144,
            rating: 4,
            synopsis: "The world we knew is gone. The world of commerce and frivolous necessity has been replaced by a world of survival and responsibility. An epidemic of apocalyptic proportions has swept the globe, causing the dead to rise and feed on the living. In a matter of months society has crumbled: no government, no grocery stores, no mail delivery, no cable TV. In a world ruled by the dead, the survivors are forced to finally start living.",
            image: "the-walking-dead.jpg"
          },{
            id: foundBookId,
            title: "March: Book One",
            author: "John Lewis",
            publisher: "Top Shelf Productions",
            genre: "autobiography",
            pages: 128,
            rating: 5,
            synopsis: "March is a vivid first-hand account of John Lewis’ lifelong struggle for civil and human rights, meditating in the modern age on the distance traveled since the days of Jim Crow and segregation. Rooted in Lewis’ personal story, it also reflects on the highs and lows of the broader civil rights movement.\nBook One spans John Lewis’ youth in rural Alabama, his life-changing meeting with Martin Luther King, Jr., the birth of the Nashville Student Movement, and their battle to tear down segregation through nonviolent lunch counter sit-ins, building to a stunning climax on the steps of City Hall.\nMany years ago, John Lewis and other student activists drew inspiration from the 1950s comic book \"Martin Luther King and the Montgomery Story.\" Now, his own comics bring those days to life for a new audience, testifying to a movement whose echoes will be heard for generations.",
            image: "march.jpg"
          },{
            id: foundBookId,
            title: "Batman: The Dark Knight Returns",
            author: "Frank Miller",
            publisher: "DC Comics",
            genre: "superhero",
            pages: 197,
            rating: 3,
            synopsis: "This masterpiece of modern comics storytelling brings to vivid life a dark world and an even darker man. Together with inker Klaus Janson and colorist Lynn Varley, writer/artist Frank Miller completely reinvents the legend of Batman in his saga of a near-future Gotham City gone to rot, ten years after the Dark Knight's retirement.\nCrime runs rampant in the streets, and the man who was Batman is still tortured by the memories of his parents' murders. As civil society crumbles around him, Bruce Wayne's long-suppressed vigilante side finally breaks free of its self-imposed shackles.\nThe Dark Knight returns in a blaze of fury, taking on a whole new generation of criminals and matching their level of violence. He is soon joined by this generation's Robin—a girl named Carrie Kelley, who proves to be just as invaluable as her predecessors.\nBut can Batman and Robin deal with the threat posed by their deadliest enemies, after years of incarceration have made them into perfect psychopaths? And more important, can anyone survive the coming fallout of an undeclared war between the superpowers—or a clash of what were once the world's greatest superheroes?\nOver fifteen years after its debut, Batman: The Dark Knight Returns remains an undisputed classic and one of the most influential stories ever told in the comics medium.",
            image: "batman.jpg"
          },{
            id: foundBookId,
            title: "Queer: A Graphic History",
            author: "Meg-John Barker",
            publisher: "Icon Books",
            genre: "nonfiction",
            pages: 176,
            rating: 4,
            synopsis: "Activist-academic Meg-John Barker and cartoonist Julia Scheele illuminate the histories of queer thought and LGBTQ+ action in this groundbreaking non-fiction graphic novel.\nFrom identity politics and gender roles to privilege and exclusion, Queer explores how we came to view sex, gender and sexuality in the ways that we do; how these ideas get tangled up with our culture and our understanding of biology, psychology and sexology; and how these views have been disputed and challenged.\nAlong the way we look at key landmarks which shift our perspective of what’s ‘normal’ – Alfred Kinsey’s view of sexuality as a spectrum, Judith Butler’s view of gendered behaviour as a performance, the play Wicked, or moments in Casino Royale when we’re invited to view James Bond with the kind of desiring gaze usually directed at female bodies in mainstream media.\nPresented in a brilliantly engaging and witty style, this is a unique portrait of the universe of queer thinking.",
            image: "queer.jpg"
          },{
            id: foundBookId,
            title: "Parable of the Sower",
            author: "Octavia E. Butler",
            publisher: "Harry N. Abrams",
            genre: "dystopian",
            pages: 284,
            rating: 4,
            synopsis: "In this graphic novel adaptation of Octavia E. Butler’s Parable of the Sower by Damian Duffy and John Jennings, the award-winning team behind Kindred: A Graphic Novel Adaptation, the \"author\" portrays a searing vision of America’s future. In the year 2024, the country is marred by unattended environmental and economic crises that lead to social chaos. Lauren Olamina, a preacher’s daughter living in Los Angeles, is protected from danger by the walls of her gated community. However, in a night of fire and death, what begins as a fight for survival soon leads to something much more: a startling vision of human destiny . . . and the birth of a new faith.",
            image: "parable-of-the-sower.jpg"
          }
    ] //does work
    //Direction: stage a try/catch statement with a status and a .json success message. 
    try {
        // add the await keyword
        await
        //then chain the res.status().json() message/data you're passing through
        res
            .status(200)
            .json({ success: { message: "Found the book!" },
            //Direction: set up another key of data with a value of {foundBook:}. Within the value, decide whether using the id, foundBook or accessing the element by the index works will allow you to see one book. How can you view the other books in the array?
             data: {foundBook: 
                //id alone works
                //foundBook works
                //foundBook[0] - this is the answer
                foundBook[0]}, statusCode: 200 });
    //Direction:  Make sure to account for error handling with an error message.
    } catch (err) {
      res
        .status(400)
        .json({ error: { message: "Something went wrong getting the book!" }, statusCode: 400 });
    }
    /*
         await Book.findOne({ _id: id })
        .then(foundBook => {
          res
            .status(200)
            .json({ success: { message: "Found the book!" }, data: foundBook, statusCode: 200 });
        });
    */
};


//Direction: set a constant of createBook and equate that to an asynchronous function where you have a request, response and the next keyword as a parameter before an arrow function.
const createBook = async (req, res, next) => {
    //Direction: within the arrow function's object, we are going to define our future form keys that align with the keys mentioned in the data.js object so we can capture user input and register that in our database.

    // the keys are: { title, author, publisher, genre, pages, rating, synopsis }. Set that as a constant and equate it to the req.body object
    const { title, author, publisher, genre, pages, rating, synopsis } = req.body;
  
    //Direction: Then, we're going to define a constant variable of newBook and equate that to a new Book constructor object with keys that align with the keys mentioned in the data.js object so we can capture user input and register that in our database.

    const newBook = new Book({
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis
    });

    //Yusuf's code
    //Direction: Next, stage a try/catch statement. Make sure to account for error handling with an error message.
    
    try {
    // add the await keyword and define the newBook with the .save() method. More information will come in a later unit.
      await newBook.save();
        //then chain the res.status().json() message/data you're passing through
    res
    //   use the 201 status code to say that the request has succeeded and new resource(s) has been created
        .status(201)
        .json({ success: { message: "A new book is created" }, 
        // insert a key value pair of data: newBook to reflect the change
        data: newBook, statusCode: 201 });
    } catch (err) {
      res
        .status(400)
        .json({ error: { message: "Something went wrong creating a book!" }, statusCode: 400 });
    }
};

//Direction: set a constant of editBook and equate that to an asynchronous function where you have a request, response and the next keyword as a parameter before an arrow function.
const editBook = async (req, res, next) => {
     // Direction: set a constant of {id} and equate that to the req.params object.
    const { id } = req.params;
     //Direction: within the arrow function's object, we are going to define our future form keys that align with the keys mentioned in the data.js object so we can capture user input and register that in our database.

    // the keys are: { title, author, publisher, genre, pages, rating, synopsis }. Set that as a constant and equate it to the req.body object
    const { title, author, publisher, genre, pages, rating, synopsis } = req.body;

    //Yusuf's code
    //Direction: Next, stage a try/catch statement. Make sure to account for error handling with an error message.
 
    try {
        // add the await keyword and chain that to the findByIdAndUpdate() method with 2 parameters, one being id and the other parameter as an object
      await Book.findByIdAndUpdate(id, {
        $set: {
          title,
          author,
          publisher,
          genre,
          pages,
          rating,
          synopsis
        }
      }, { new: true });
    //   after the object, add the object of { new: true } to denote the change is correct to edit the book.
        //then chain the res.status().json() message/data you're passing through
      res
        .status(201)
        .json({ success: { message: "Book is updated" }, statusCode: 201 });
    } catch (err) {
      res
        .status(400)
        .json({ error: { message: "Something went wrong while editing the book~" }, statusCode: 400 });
    }
};

//Direction: set a constant of deleteBook and equate that to an asynchronous function where you have a request, response and the next keyword as a parameter before an arrow function.
const deleteBook = async (req, res, next) => {
    // Direction: set a constant of {id} and equate that to the req.params object.
    const { id } = req.params;
    //EXPERIMENTAL - doesn't affect code functionality
    /*
    const foundBook = booksData.find(book => book.id === Number(id));

    const index = comics.indexOf(foundBook);
    comics.splice(index, 1);
    */

    //END

    //Yusuf's code
    //Direction: Next, stage a try/catch statement. Make sure to account for error handling with an error message.
    try {
    // add the await keyword and chain that to the findByIdAndDelete() method with 1 parameter, id 
      await Book.findByIdAndDelete(id);
      //then chain the res.status().json() message/data you're passing through
      res
        .status(200)
        .json({ success: { message: "Book deleted successfully!" }, statusCode: 200 });
    } catch (err) {
      res
        .status(400)
        .json({ error: { message: "Something went wrong while deleting the book!" }, statusCode: 400 });
    }
  };

module.exports = { getAllBooks, getBook, createBook, editBook, deleteBook };