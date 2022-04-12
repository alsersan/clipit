import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const media = this.video.nativeElement;
    // It needs to be muted this way, despite being muted in the template. Otherwise it won't work.
    media.muted = true;
    media
      .play()
      .then(() => console.log('Playback success'))
      .catch((error) => console.log('Playback error', error));
  }
}
