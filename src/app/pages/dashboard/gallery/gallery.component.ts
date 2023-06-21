import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgOptimizedImage],
  providers: [HttpClient],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit{
  products?: Array<any>;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (res:any) => {
        this.products = res;
      },
    });
  }
}
