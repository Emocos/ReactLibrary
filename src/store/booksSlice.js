import {createSlice} from "@reduxjs/toolkit";

export const booksSlice = createSlice({
    name: 'books',
    initialState: [
        {
            bookId: '1',
            count: 10,
            bookName: 'Don Quixote',
            bookAuthor: 'Miguel de Cervantes',
            bookDescription: 'Often referred to as the first modern European novel, Don Quixote follows the exploits of the titular noble who becomes obsessed with the romantic notion of chivalry. On a self-imposed mission to become a knight-errant, Don Quixote recruits common farmer, Sancho Panza, as his squire. Unfortunately, however, their quests rarely end well—among other misadventures, Don Quixote does battle with a herd of sheep, attacks a group of monks, and even frees a group of convicted criminals.'
        },
        {
            bookId: '2',
            count: 10,
            bookName: 'Lord of the Rings',
            bookAuthor: 'J.R.R. Tolkien',
            bookDescription: 'This high-fantasy novel is a famous three volume epic. It centers around an all powerful ring forged by the Dark Lord Sauron. For many years the ring is sought after by all likes, but at the start of the novel, it resides in the simple home of the hobbit Bilbo Baggins. Bilbo sets a momentous quest upon his cousin Frodo’s shoulders, tasking him with the journey to Mount Doom to destroy the ring. '
        },
        {
            bookId: '3',
            count: 10,
            bookName: 'Harry Potter and the Sorcerers Stone',
            bookAuthor: 'J.K. Rowling',
            bookDescription: 'The most recent novel on this list, Harry Potter and the Sorcerer’s Stone brings readers into a world of magic at Hogwarts School of Witchcraft and Wizardry. On his eleventh birthday, Harry’s magical heritage is brought to light by the bumbling half-giant Hagrid. As he embarks on his new life as a wizard, he finds that there’s more to this news than just learning spells and potions. The Dark Lord Voldemort, who had tried and failed to kill Harry as an infant, is regaining power, and Harry stands in his path.'
        },
        {
            bookId: '4',
            count: 10,
            bookName: 'And Then There Were None',
            bookAuthor: 'Agatha Christie',
            bookDescription: 'From acclaimed mystery author Agatha Christie, And Then There Were None is a mastery of tension. A quirky millionaire hosts a gathering of eight strangers on a private island off of the English coast. When the guests arrive, the elusive host is nowhere to be found. In his place, however, is the accusation of murder upon each of the guests.'
        },
        {
            bookId: '5',
            count: 10,
            bookName: 'Don Quixote',
            bookAuthor: 'Miguel de Cervantes',
            bookDescription: 'Often referred to as the first modern European novel, Don Quixote follows the exploits of the titular noble who becomes obsessed with the romantic notion of chivalry. On a self-imposed mission to become a knight-errant, Don Quixote recruits common farmer, Sancho Panza, as his squire. Unfortunately, however, their quests rarely end well—among other misadventures, Don Quixote does battle with a herd of sheep, attacks a group of monks, and even frees a group of convicted criminals.'
        },
        {
            bookId: '6',
            count: 10,
            bookName: "Alice's Adventures in Wonderland",
            bookAuthor: 'Lewis Carroll',
            bookDescription: 'In this quintessential novel, seven-year-old Alice stumbles down a rabbit hole into a fantastical world of wonder and trouble. While navigating this new and peculiar place, Alice encounters many enchanting anthropomorphic creatures, like the iconic White Rabbit and the Cheshire Cat. Carrol’s work twists logic and spins riddles, giddily tossing convention aside. Now one of the cornerstones of the fantasy genre, Alice’s Adventures in Wonderland holds a dear place in the hearts of both children and adults. '
        },
        {
            bookId: '7',
            count: 10,
            bookName: 'The Lion, the Witch, and the Wardrobe',
            bookAuthor: 'C.S. Lewis',
            bookDescription: 'As the first of seven novels in the series The Chronicles of Narnia, this book brings to life the fantastical world of Narnia, a place full of talking animals and magic. The story unfolds when the four Pevensie children are evacuated from England during wartime to stay in the old house of a kind professor. When the youngest child, Lucy, enters a wardrobe to find a vast, snow-filled land, she and her siblings are dragged into a battle of good and evil.'
        },
        {
            bookId: '8',
            count: 10,
            bookName: 'Pinocchio',
            bookAuthor: 'Carlo Collodi',
            bookDescription: 'This tale follows a marionette boy, Pinocchio, crafted out of a talking log by the poor woodcarver, Gepetto. Ill-behaved Pinocchio is peculiar, with a nose that grows with every lie told. As the puppet boy travels out into the world, he finds that it holds more trouble and treachery than even he can handle.'
        },
        {
            bookId: '9',
            count: 10,
            bookName: 'Catcher in the Rye',
            bookAuthor: 'J.D. Salinger',
            bookDescription: 'This novel, narrated by the iconic 16-year-old rebel Holden Caulfield, is a staple in more than just tenth grade English classrooms across America. Weaving a beloved story, Holden embarks on a personal journey back to New York following his expulsion from boarding school. '
        },
        {
            bookId: '10',
            count: 10,
            bookName: 'Anne of Green Gables',
            bookAuthor: 'L. M. Montgomery',
            bookDescription: 'Anne Shirley is a young orphan of eleven years who is mistakenly sent to the Cuthbert siblings\' Green Gables farm. The Cuthberts—who had sent for an orphan boy to help with the farm chores—find Anne to be charming and determined, and decide to let her stay. Settling in to her first real home, Anne spreads joy about the island with her fanciful imagination. '
        },
    ],
    reducers: {

    }
})

export default booksSlice.reducer