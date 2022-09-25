import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/domain/book';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';


export interface BookElement {
  nameBook: string;
  description: string;
  athor: string;
  publicationDate: string;
  numberCopies: string;
  value: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {


  dataPrimeN: any;
  bookPrime!: BookElement[];
  dataPrimeNG: any;
  postPrime!: any;
  config!: PrimeNGConfig;
  cols!: any[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name_book', header: 'Nombre del Libro' },
      { field: 'description', header: 'Descripcion	' },
      { field: 'author', header: 'Autor' },
      { field: 'publication_date', header: 'Fecha de publicacion' },
      { field: 'number_copies', header: 'Numero de Copias' },
      { field: 'value', header: 'Valor' }
    ];
    this.dataPrimeN = this.bookService.findAll().subscribe((data) => {
      console.log(data);
      this.postPrime = data;
      this.dataPrimeNG = Object.assign(this.postPrime, Book);
    });

    console.log(this.dataPrimeNG)

    this.config.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER
      ]

    }
  }

}
