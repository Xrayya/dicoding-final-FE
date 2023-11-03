# Final Project Dicoding Front-End
Repository for the final project learning path "Learning Basic Web Programming" in 2023<br>
This is a bookshelf project<br>
note : the content in this project is written in Bahasa<br>

## Features
- Add books
- Unfinished books table
- Finished books table
- Move book between table
- Delete books
- Persistent data (local storage)

## Personal Notes
### Book Data
```
{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}
```

Improvisation
```
{
  id: string | number,
  title: string,
  author: string,
  + publisher: string,
  + category: string[],
  + page: number,
  + language: string,
  year: number,
  isComplete: boolean,
}
```
