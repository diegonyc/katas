import { Component, OnInit } from '@angular/core';
import { Weapon } from '@game';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  // These can come from a Presenter object (again, Angular agnostic :-) )
  weapons$;
  gameState$;
  scores$;

  constructor(private gameService: GameService) {
    // TODO: Refactor into presenter to be able to change weapon display names
    this.weapons$ = this.gameService.weapons$;
    this.gameState$ = this.gameService.state$;
    this.scores$ = this.gameService.scores$;
  }

  play(weapon: Weapon) {
    const outcome = this.gameService.playMatchAgainstAI(weapon);
    console.log(outcome);
  }

  ngOnInit(): void {}
}

const weaponViewModelMap: Record<string, string> = {
  scissors: 'Scissors ✂️',
  rock: 'Rock 🗿',
  paper: 'Paper 📄',
};
