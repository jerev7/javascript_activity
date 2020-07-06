export class Book {
	constructor(title, author, description, pages, currentPage, read=false) {
		this.title = title;
		this.author = author;
		this.description = description;
		this.pages = pages;
		this.currentPage = currentPage;
		this.read = read;
	}
	readBook(page) {
		if (page < 1 || page > this.pages) {
			return 0
		} if (page >= 1 && page < this.pages) {
			this.currentPage = page;
			return 1;
		} if (page === this.pages) {
			this.read = true;
			return 1;
		}
	}

}

export const books = [];

let book1 = new Book("Le mystère Napoléon", "Steve Berry", "livre plutôt cool", 530, 250);
let book2 = new Book("Mort sur le Nil", "Agatha Christie", "suspense !", 420, 3);
let book3 = new Book("Les rivières pourpres", "Jean-Christophe Grangé", "thriller", 600, 600);

books.push(book1, book2, book3);