import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
    constructor(private dbzServive: DbzService) {}

    get characters(): Character[] {
        return [...this.dbzServive.characters];
    }

    onDeleteCharacter(id: string) {
        this.dbzServive.onDeleteCharacter(id);
    }

    onNewCharacter(character: Character) {
        this.dbzServive.onNewCharacter(character);
    }


}