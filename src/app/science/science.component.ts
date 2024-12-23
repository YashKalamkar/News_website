import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{
  constructor(private _services: NewsService) {}

  scienceNewsDisplay: any[] = [];
  displayedNews: any[] = [];
  newsToShow = 6;

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result) => {
      console.log(result);
      if (result && result.items) {
        this.scienceNewsDisplay = result.items.map((item: any) => {
          if (item.timestamp) {
            item.formattedTime = this.convertTimestampToTime(Number(item.timestamp));
          }
          return item;
        });
        this.displayedNews = this.scienceNewsDisplay.slice(0, this.newsToShow);
      }
    }, (error) => {
      console.error('Error fetching business news', error);
    });
  }

  convertTimestampToTime(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  loadMore(): void {
    const currentLength = this.displayedNews.length;
    const nextBatch = this.scienceNewsDisplay.slice(currentLength, currentLength + this.newsToShow);
    if (nextBatch.length > 0) {
      this.displayedNews = [...this.displayedNews, ...nextBatch];
    }
  }

  openNews(url: string): void {
    window.open(url, '_blank');
  }

  onImageError(event: any): void {
    event.target.src = '../../assets/news.gif'; // Fallback image URL
  }
}
