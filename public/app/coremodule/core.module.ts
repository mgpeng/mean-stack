import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../services/authentication.service';
import { ArticlesService } from '../services/articles.service';

@NgModule({
    imports:[],
    declarations:[],
    providers:[
                // AuthenticationService,
                ArticlesService
                ]
})

export class CoreModule{}