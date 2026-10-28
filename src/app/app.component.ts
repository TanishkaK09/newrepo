import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  friendName = 'Yash';

  showBirthday = false;
  showMessage = false;
  showMemories = false;
  showVideos = false;
  showFinalMessage = false;
  showThoughts = false;
  showChooseMemory = false;

  currentPhoto = 0;
  currentThought = 0;
  currentVideo = 0;
  selectedMemory: string | null = null;

  /**
   * Put your photos in src/assets/photos/
   * Then list each file here. You can use .jpg, .jpeg, .png, or .webp
   */
  photos = [
    {
      image: 'assets/photos/1.jpeg',
      caption: 'This was the first photo I had of you. 😂'
    },
    {
      image: 'assets/photos/2.jpeg',
      caption: 'Our first pic together. I told you to come early... you still came late. Classic. 🙄'
    },
    {
      image: 'assets/photos/3.jpeg',
      caption: 'We were actual human beings in this one. Progress. 💀'
    },
    // ADD MORE PHOTOS HERE - just follow the pattern below:
    // {
    //   image: 'assets/photos/4.jpeg',
    //   caption: 'Your caption here 😂'
    // },
    // {
    //   image: 'assets/photos/5.png',
    //   caption: 'Another one 🔥'
    // }
  ];

  /**
   * Put your videos in src/assets/videos/
   * Use .mp4 for best browser support (not .mov)
   */
  videos: { src: string; caption: string }[] = [
    {
      src: 'assets/videos/WhatsApp Video 2026-10-28 at 4.46.58 P.mp4',
      caption: 'From complete strangers to absolute chaos. This is our crazy journey. 🚀😂'
    }
  ];

  thoughts = [
    {
      text: 'You drive me absolutely insane, but I wouldn\'t have it any other way. 😤'
    },
    {
      text: 'Not gonna lie, you\'re kinda cool when you\'re not being annoying. 😂'
    },
    {
      text: 'You\'ve seen me at my worst and still stuck around. That\'s friendship. 💀'
    },
    {
      text: 'You\'re the only person I can roast and have them roast me back. That\'s real. 🔥'
    },
    {
      text: 'I\'m never gonna admit this in person but... you mean a lot to me. Deal with it. 😒'
    }
  ];

  openSurprise(): void {
    this.showBirthday = true;
  }

  openMessage(): void {
    this.showMessage = true;
  }

  openMemories(): void {
    this.showMemories = true;
  }

  openVideos(): void {
    if (this.videos.length === 0) {
      this.openThoughts();
      return;
    }

    this.showVideos = true;
    this.currentVideo = 0;
  }

  openFinalMessage(): void {
    this.showFinalMessage = true;
  }

  openThoughts(): void {
    this.showThoughts = true;
    this.currentThought = 0;
  }

  openChooseMemory(): void {
    this.showChooseMemory = true;
    this.selectedMemory = null;
  }

  nextPhoto(): void {
    this.currentPhoto = (this.currentPhoto + 1) % this.photos.length;
  }

  previousPhoto(): void {
    this.currentPhoto =
      (this.currentPhoto - 1 + this.photos.length) % this.photos.length;
  }

  nextVideo(): void {
    this.currentVideo = (this.currentVideo + 1) % this.videos.length;
  }

  previousVideo(): void {
    this.currentVideo =
      (this.currentVideo - 1 + this.videos.length) % this.videos.length;
  }

  nextThought(): void {
    if (this.currentThought < this.thoughts.length - 1) {
      this.currentThought++;
    }
  }

  chooseMemory(memory: string): void {
    this.selectedMemory = memory;
  }

  goBack(): void {
    this.showBirthday = false;
    this.showMessage = false;
    this.showMemories = false;
    this.showVideos = false;
    this.showFinalMessage = false;
    this.showThoughts = false;
    this.showChooseMemory = false;
    this.currentPhoto = 0;
    this.currentVideo = 0;
    this.currentThought = 0;
    this.selectedMemory = null;
  }

}
