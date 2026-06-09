import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cobertura-bug-repro');

  private _selectedReleases: any;

  public get selectedReleases(): any {
    return this._selectedReleases;
  }

  public set selectedReleases(value: any) {
    this._selectedReleases = value;
  }
}
